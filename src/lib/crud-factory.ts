import type { z } from "zod";
import {
  requireEditor,
  requireAdmin,
  canPublish,
  canDelete,
} from "@/lib/admin-auth";
import {
  ok,
  fail,
  parseBody,
  requireDbConfigured,
  toApiError,
} from "@/lib/api-helpers";
import { parsePagination } from "@/lib/cms/db";
import {
  ensureUniqueSlug,
  SlugConflictError,
  applyPublishTransition,
  revalidateContent,
} from "@/lib/admin-api";

type Status = "DRAFT" | "PUBLISHED" | "ARCHIVED";

type BaseItem = {
  id: string;
  slug?: string;
  status?: Status;
  publishedAt?: Date | null;
};

type CrudConfig<
  TSchema extends z.ZodObject<z.ZodRawShape>,
  TItem extends BaseItem,
> = {
  notFoundMessage: string;
  schema: TSchema;
  /** Field used to derive a slug when the client omits one. */
  slugSource: (body: Partial<z.infer<TSchema>>) => string;
  /** False for taxonomy models (no publication workflow). */
  hasStatus: boolean;
  count: (q: string, status?: string) => Promise<number>;
  list: (args: {
    q: string;
    status?: string;
    skip: number;
    take: number;
  }) => Promise<TItem[]>;
  findById: (id: string) => Promise<TItem | null>;
  findBySlug: (slug: string) => Promise<{ id: string } | null>;
  create: (
    data: z.infer<TSchema> & { slug: string; publishedAt?: Date | null }
  ) => Promise<TItem>;
  update: (
    id: string,
    data: Partial<z.infer<TSchema>> & { slug?: string; publishedAt?: Date | null }
  ) => Promise<TItem>;
  remove: (id: string) => Promise<void>;
  revalidateFor: (item: TItem) => string[];
  /** Optional hook fired after a slug change (e.g. auto-redirects).
   *  May return extra paths to revalidate (e.g. the retired URL). */
  onSlugChange?: (record: TItem, newSlug: string) => Promise<string[] | void>;
};

function statusChangeNeedsAdmin(
  record: BaseItem,
  nextStatus: Status | undefined,
  role: "ADMIN" | "EDITOR",
  hasStatus: boolean
): boolean {
  if (!hasStatus) return false;
  if (record.status === "PUBLISHED") return !canPublish(role);
  if (nextStatus && nextStatus !== record.status) return !canPublish(role);
  return false;
}

/** GET (list w/ search + pagination) + POST (create). */
export function makeCollectionHandlers<
  TSchema extends z.ZodObject<z.ZodRawShape>,
  TItem extends BaseItem,
>(cfg: CrudConfig<TSchema, TItem>) {
  async function GET(req: Request) {
    const auth = await requireEditor();
    if (auth instanceof Response) return auth;
    const db = requireDbConfigured();
    if (db) return db;
    try {
      const sp = new URL(req.url).searchParams;
      const q = (sp.get("q") ?? "").trim().slice(0, 200);
      const status = sp.get("status") ?? undefined;
      const { page, perPage, skip } = parsePagination(sp);
      const [items, total] = await Promise.all([
        cfg.list({ q, status, skip, take: perPage }),
        cfg.count(q, status),
      ]);
      return ok({ items, total, page, perPage });
    } catch (err) {
      return toApiError(err);
    }
  }

  async function POST(req: Request) {
    const auth = await requireEditor();
    if (auth instanceof Response) return auth;
    const db = requireDbConfigured();
    if (db) return db;
    try {
      const parsed = await parseBody<unknown>(req);
      if ("response" in parsed) return parsed.response;
      const body = cfg.schema.safeParse(parsed.data);
      if (!body.success) {
        return fail(
          body.error.issues.map((i) => i.message).join(" "),
          422
        );
      }
      const data = body.data;
      const nextStatus = cfg.hasStatus
        ? ((data["status"] as Status | undefined) ?? "DRAFT")
        : undefined;
      if (
        cfg.hasStatus &&
        nextStatus === "PUBLISHED" &&
        !canPublish(auth.role)
      ) {
        return fail("Only administrators can publish content.", 403);
      }
      const slug = await ensureUniqueSlug(
        cfg.findBySlug,
        (data["slug"] as string | undefined) || cfg.slugSource(data)
      );
      // Stamp publishedAt on first publish — but NEVER clobber an explicit
      // date (scheduled publishing relies on the author's value).
      const hasExplicitDate = Boolean(
        (data as { publishedAt?: unknown })["publishedAt"]
      );
      const published =
        cfg.hasStatus && nextStatus === "PUBLISHED" && !hasExplicitDate
          ? { publishedAt: new Date() }
          : {};
      const item = await cfg.create({ ...data, slug, ...published });
      await revalidateContent(cfg.revalidateFor(item));
      return ok({ item }, 201);
    } catch (err) {
      if (err instanceof SlugConflictError) return fail(err.message, 409);
      return toApiError(err);
    }
  }

  return { GET, POST };
}

/** GET one + PATCH + DELETE. */
export function makeItemHandlers<
  TSchema extends z.ZodObject<z.ZodRawShape>,
  TItem extends BaseItem,
>(cfg: CrudConfig<TSchema, TItem>) {
  async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
    const auth = await requireEditor();
    if (auth instanceof Response) return auth;
    const db = requireDbConfigured();
    if (db) return db;
    try {
      const { id } = await ctx.params;
      const item = await cfg.findById(id);
      if (!item) return fail(cfg.notFoundMessage, 404);
      return ok({ item });
    } catch (err) {
      return toApiError(err);
    }
  }

  async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
    const auth = await requireEditor();
    if (auth instanceof Response) return auth;
    const db = requireDbConfigured();
    if (db) return db;
    try {
      const { id } = await ctx.params;
      const record = await cfg.findById(id);
      if (!record) return fail(cfg.notFoundMessage, 404);
      const parsed = await parseBody<unknown>(req);
      if ("response" in parsed) return parsed.response;
      // Partial validation: every provided field must still be valid.
      const body = cfg.schema.partial().safeParse(parsed.data);
      if (!body.success) {
        return fail(
          body.error.issues.map((i) => i.message).join(" "),
          422
        );
      }
      const data = body.data as Record<string, unknown>;
      const nextStatus = data["status"] as Status | undefined;
      if (statusChangeNeedsAdmin(record, nextStatus, auth.role, cfg.hasStatus)) {
        return fail(
          "Only administrators can publish, unpublish, or edit published content.",
          403
        );
      }
      let slug = data["slug"] as string | undefined;
      if (slug && slug !== record.slug) {
        slug = await ensureUniqueSlug(cfg.findBySlug, slug, (row) =>
          (row as { id: string }).id === id
        );
      }
      const transition =
        cfg.hasStatus && nextStatus
          ? applyPublishTransition(
              record,
              nextStatus,
              data["publishedAt"] as string | undefined
            )
          : {};
      // `data` passed schema validation above, so this downcast is sound.
      const updateData = {
        ...(data as Partial<z.infer<TSchema>>),
        ...(slug ? { slug } : {}),
        ...transition,
      };
      const item = await cfg.update(id, updateData);
      let extraPaths: string[] = [];
      if (slug) {
        // Slug-change side effects (e.g. redirect rows) must never fail
        // the content save itself.
        try {
          const extra = await cfg.onSlugChange?.(record, slug);
          if (extra) extraPaths = extra;
        } catch (err) {
          if (process.env.NODE_ENV === "development") {
            // eslint-disable-next-line no-console
            console.error("[crud] onSlugChange failed:", err);
          }
        }
      }
      await revalidateContent([...cfg.revalidateFor(item), ...extraPaths]);
      return ok({ item });
    } catch (err) {
      if (err instanceof SlugConflictError) return fail(err.message, 409);
      return toApiError(err);
    }
  }

  async function DELETE(
    _req: Request,
    ctx: { params: Promise<{ id: string }> }
  ) {
    const auth = await requireAdmin();
    if (auth instanceof Response) return auth;
    if (!canDelete(auth.role)) return fail("Only administrators can delete.", 403);
    const db = requireDbConfigured();
    if (db) return db;
    try {
      const { id } = await ctx.params;
      const record = await cfg.findById(id);
      if (!record) return fail(cfg.notFoundMessage, 404);
      await cfg.remove(id);
      await revalidateContent(cfg.revalidateFor(record));
      return ok({ ok: true });
    } catch (err) {
      return toApiError(err);
    }
  }

  return { GET, PATCH, DELETE };
}

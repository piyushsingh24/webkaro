import { prisma } from "@/lib/prisma";
import { createSlugRedirect } from "@/lib/cms/redirects";
import type {
  ServiceInput,
  ProjectInput,
  BlogPostInput,
  TestimonialInput,
  FaqInput,
} from "@/lib/schemas/cms";

/**
 * Prisma data operations for admin CRUD handlers.
 * Each store matches the CrudConfig shape in src/lib/crud-factory.ts.
 * Status-transition and slug rules live in the factory; relation wiring
 * (tags, categories) lives here.
 */

function textSearch(q: string, fields: string[]) {
  if (!q) return {};
  return { OR: fields.map((f) => ({ [f]: { contains: q } })) };
}

function withStatus(status?: string) {
  return status ? { status: status as "DRAFT" | "PUBLISHED" | "ARCHIVED" } : {};
}

// ------------------------- Services -------------------------

export const serviceStore = {
  notFoundMessage: "Service not found.",
  slugSource: (b: Partial<ServiceInput>) => b.title ?? "service",
  hasStatus: true,
  count: (q: string, status?: string) =>
    prisma.service.count({ where: { ...withStatus(status), ...textSearch(q, ["title", "slug"]) } }),
  list: (args: { q: string; status?: string; skip: number; take: number }) =>
    prisma.service.findMany({
      where: { ...withStatus(args.status), ...textSearch(args.q, ["title", "slug"]) },
      include: { category: { select: { id: true, name: true, slug: true } } },
      orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) =>
    prisma.service.findUnique({
      where: { id },
      include: { category: { select: { id: true, name: true, slug: true } } },
    }),
  findBySlug: (slug: string) => prisma.service.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: ServiceInput & { slug: string; publishedAt?: Date | null }) =>
    prisma.service.create({ data: { ...data } }),
  update: (
    id: string,
    data: Partial<ServiceInput> & { slug?: string; publishedAt?: Date | null }
  ) => prisma.service.update({ where: { id }, data: { ...data } }),
  remove: (id: string) => prisma.service.delete({ where: { id } }).then(() => undefined),
  revalidateFor: (item: { slug?: string }) =>
    ["/services", item.slug ? `/services/${item.slug}` : "/services"],
};

// ------------------------- Projects -------------------------

export const projectStore = {
  notFoundMessage: "Project not found.",
  slugSource: (b: Partial<ProjectInput>) => b.title ?? "project",
  hasStatus: true,
  count: (q: string, status?: string) =>
    prisma.project.count({ where: { ...withStatus(status), ...textSearch(q, ["title", "slug", "category"]) } }),
  list: (args: { q: string; status?: string; skip: number; take: number }) =>
    prisma.project.findMany({
      where: { ...withStatus(args.status), ...textSearch(args.q, ["title", "slug", "category"]) },
      orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.project.findUnique({ where: { id } }),
  findBySlug: (slug: string) => prisma.project.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: ProjectInput & { slug: string; publishedAt?: Date | null }) =>
    prisma.project.create({ data: { ...data } }),
  update: (
    id: string,
    data: Partial<ProjectInput> & { slug?: string; publishedAt?: Date | null }
  ) => prisma.project.update({ where: { id }, data: { ...data } }),
  remove: (id: string) => prisma.project.delete({ where: { id } }).then(() => undefined),
  revalidateFor: (item: { slug?: string }) =>
    ["/projects", item.slug ? `/projects/${item.slug}` : "/projects"],
};

// ------------------------- Blog posts -------------------------

const postInclude = {
  category: { select: { id: true, name: true, slug: true } },
  author: { select: { id: true, name: true } },
  tags: { include: { tag: { select: { id: true, name: true, slug: true } } } },
};

function postPayload(data: Partial<BlogPostInput>, mode: "create" | "update") {
  const { tagIds, categoryId, authorId, publishedAt, ...rest } = data as BlogPostInput & {
    tagIds?: string[];
    publishedAt?: Date | string | null;
  };
  const tagOps =
    tagIds !== undefined
      ? {
          // NOTE: deleteMany is only valid on update; create accepts create[] alone.
          tags:
            mode === "update"
              ? {
                  deleteMany: {},
                  create: tagIds.map((tagId) => ({ tag: { connect: { id: tagId } } })),
                }
              : { create: tagIds.map((tagId) => ({ tag: { connect: { id: tagId } } })) },
        }
      : {};
  return {
    ...rest,
    publishedAt: publishedAt ? new Date(publishedAt) : undefined,
    categoryId: categoryId || null,
    authorId: authorId || null,
    ...tagOps,
  };
}

export const postStore = {
  notFoundMessage: "Blog post not found.",
  slugSource: (b: Partial<BlogPostInput>) => b.title ?? "post",
  hasStatus: true,
  count: (q: string, status?: string) =>
    prisma.blogPost.count({ where: { ...withStatus(status), ...textSearch(q, ["title", "slug", "excerpt"]) } }),
  list: (args: { q: string; status?: string; skip: number; take: number }) =>
    prisma.blogPost.findMany({
      where: { ...withStatus(args.status), ...textSearch(args.q, ["title", "slug", "excerpt"]) },
      include: postInclude,
      orderBy: [{ updatedAt: "desc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.blogPost.findUnique({ where: { id }, include: postInclude }),
  findBySlug: (slug: string) => prisma.blogPost.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: BlogPostInput & { slug: string; publishedAt?: Date | null }) =>
    prisma.blogPost.create({ data: postPayload({ ...data, publishedAt: data.publishedAt ?? undefined }, "create") }),
  update: (
    id: string,
    data: Partial<BlogPostInput> & { slug?: string; publishedAt?: Date | null }
  ) => prisma.blogPost.update({ where: { id }, data: postPayload(data, "update") }),
  remove: (id: string) =>
    prisma.$transaction([
      prisma.blogPostTag.deleteMany({ where: { postId: id } }),
      prisma.blogPost.delete({ where: { id } }),
    ]).then(() => undefined),
  revalidateFor: (item: { slug?: string }) =>
    ["/blogs", item.slug ? `/blogs/${item.slug}` : "/blogs"],
  // Auto-redirect when a LIVE post changes slug (draft renames need none).
  // Returns the retired path so the factory revalidates it (no stale 200).
  onSlugChange: async (
    record: { status?: string; slug?: string },
    newSlug: string
  ): Promise<string[]> => {
    const status = record.status;
    const oldSlug = record.slug;
    if (status !== "PUBLISHED" || !oldSlug || oldSlug === newSlug) return [];
    await createSlugRedirect(`/blogs/${oldSlug}`, `/blogs/${newSlug}`);
    return [`/blogs/${oldSlug}`];
  },
};

// ------------------------- Testimonials -------------------------

export const testimonialStore = {
  notFoundMessage: "Testimonial not found.",
  slugSource: (b: Partial<TestimonialInput>) => b.clientName ?? "testimonial",
  hasStatus: true,
  count: (q: string, status?: string) =>
    prisma.testimonial.count({
      where: { ...withStatus(status), ...textSearch(q, ["clientName", "company"]) },
    }),
  list: (args: { q: string; status?: string; skip: number; take: number }) =>
    prisma.testimonial.findMany({
      where: { ...withStatus(args.status), ...textSearch(args.q, ["clientName", "company"]) },
      orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.testimonial.findUnique({ where: { id } }),
  findBySlug: (_slug: string) => Promise.resolve(null),
  create: (data: TestimonialInput & { slug: string }) => {
    // Testimonial has no slug column — drop the factory-generated slug.
    const { slug: _slug, ...rest } = data;
    void _slug;
    return prisma.testimonial.create({ data: { ...rest } });
  },
  update: (id: string, data: Partial<TestimonialInput> & { slug?: string }) => {
    const { slug: _slug, ...rest } = data;
    void _slug;
    return prisma.testimonial.update({ where: { id }, data: { ...rest } });
  },
  remove: (id: string) => prisma.testimonial.delete({ where: { id } }).then(() => undefined),
  revalidateFor: (_item: { id: string }) => ["/", "/about"],
};

// ------------------------- FAQs -------------------------

export const faqStore = {
  notFoundMessage: "FAQ not found.",
  slugSource: (b: Partial<FaqInput>) => b.question ?? "faq",
  hasStatus: true,
  count: (q: string, status?: string) =>
    prisma.faq.count({ where: { ...withStatus(status), ...textSearch(q, ["question", "slug"]) } }),
  list: (args: { q: string; status?: string; skip: number; take: number }) =>
    prisma.faq.findMany({
      where: { ...withStatus(args.status), ...textSearch(args.q, ["question", "slug"]) },
      include: { service: { select: { id: true, title: true, slug: true } } },
      orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) =>
    prisma.faq.findUnique({
      where: { id },
      include: { service: { select: { id: true, title: true, slug: true } } },
    }),
  findBySlug: (slug: string) => prisma.faq.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: FaqInput & { slug: string; publishedAt?: Date | null }) => {
    // Faq has no publishedAt column — strip the factory transition field.
    const { serviceId, publishedAt: _publishedAt, ...rest } = data;
    void _publishedAt;
    return prisma.faq.create({
      data: { ...rest, serviceId: serviceId || null },
      include: { service: { select: { id: true, title: true, slug: true } } },
    });
  },
  update: (
    id: string,
    data: Partial<FaqInput> & { slug?: string; publishedAt?: Date | null }
  ) => {
    const { serviceId, publishedAt: _publishedAt, ...rest } = data;
    void _publishedAt;
    return prisma.faq.update({
      where: { id },
      data: {
        ...rest,
        ...(serviceId !== undefined ? { serviceId: serviceId || null } : {}),
      },
      include: { service: { select: { id: true, title: true, slug: true } } },
    });
  },
  remove: (id: string) => prisma.faq.delete({ where: { id } }).then(() => undefined),
  revalidateFor: (item: { slug?: string }) =>
    ["/faq", item.slug ? `/faq/${item.slug}` : "/faq", "/", "/services"],
};

// ------------------------- Taxonomy (no publication workflow) -------------------------

export const serviceCategoryStore = {
  notFoundMessage: "Service category not found.",
  slugSource: (b: Partial<{ name: string }>) => b.name ?? "category",
  hasStatus: false,
  count: (q: string) =>
    prisma.serviceCategory.count({ where: { ...textSearch(q, ["name", "slug"]) } }),
  list: (args: { q: string; skip: number; take: number }) =>
    prisma.serviceCategory.findMany({
      where: { ...textSearch(args.q, ["name", "slug"]) },
      include: { _count: { select: { services: true } } },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.serviceCategory.findUnique({ where: { id } }),
  findBySlug: (slug: string) =>
    prisma.serviceCategory.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: { name: string; slug: string; description?: string; sortOrder?: number }) =>
    prisma.serviceCategory.create({ data }),
  update: (id: string, data: Partial<{ name: string; slug: string; description?: string; sortOrder?: number }>) =>
    prisma.serviceCategory.update({ where: { id }, data }),
  remove: async (id: string) => {
    const used = await prisma.service.count({ where: { categoryId: id } });
    if (used > 0) {
      throw new Error(`Category is used by ${used} service(s). Reassign them first.`);
    }
    await prisma.serviceCategory.delete({ where: { id } });
  },
  revalidateFor: (_item: { id: string }) => ["/services"],
};

export const blogCategoryStore = {
  notFoundMessage: "Blog category not found.",
  slugSource: (b: Partial<{ name: string }>) => b.name ?? "category",
  hasStatus: false,
  count: (q: string) =>
    prisma.blogCategory.count({ where: { ...textSearch(q, ["name", "slug"]) } }),
  list: (args: { q: string; skip: number; take: number }) =>
    prisma.blogCategory.findMany({
      where: { ...textSearch(args.q, ["name", "slug"]) },
      include: { _count: { select: { posts: true } } },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.blogCategory.findUnique({ where: { id } }),
  findBySlug: (slug: string) =>
    prisma.blogCategory.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: { name: string; slug: string; description?: string; hubSlug?: string; sortOrder?: number }) =>
    prisma.blogCategory.create({ data: { ...data, hubSlug: data.hubSlug || null } }),
  update: (
    id: string,
    data: Partial<{ name: string; slug: string; description?: string; hubSlug?: string; sortOrder?: number }>
  ) =>
    prisma.blogCategory.update({
      where: { id },
      data: {
        ...data,
        ...(data.hubSlug !== undefined ? { hubSlug: data.hubSlug || null } : {}),
      },
    }),
  remove: async (id: string) => {
    const used = await prisma.blogPost.count({ where: { categoryId: id } });
    if (used > 0) {
      throw new Error(`Category is used by ${used} post(s). Reassign them first.`);
    }
    await prisma.blogCategory.delete({ where: { id } });
  },
  revalidateFor: (_item: { id: string }) => ["/blogs"],
};

export const blogTagStore = {
  notFoundMessage: "Tag not found.",
  slugSource: (b: Partial<{ name: string }>) => b.name ?? "tag",
  hasStatus: false,
  count: (q: string) =>
    prisma.blogTag.count({ where: { ...textSearch(q, ["name", "slug"]) } }),
  list: (args: { q: string; skip: number; take: number }) =>
    prisma.blogTag.findMany({
      where: { ...textSearch(args.q, ["name", "slug"]) },
      orderBy: { name: "asc" },
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.blogTag.findUnique({ where: { id } }),
  findBySlug: (slug: string) => prisma.blogTag.findUnique({ where: { slug }, select: { id: true } }),
  create: (data: { name: string; slug: string }) => prisma.blogTag.create({ data }),
  update: (id: string, data: Partial<{ name: string; slug: string }>) =>
    prisma.blogTag.update({ where: { id }, data }),
  remove: async (id: string) => {
    await prisma.$transaction([
      prisma.blogPostTag.deleteMany({ where: { tagId: id } }),
      prisma.blogTag.delete({ where: { id } }),
    ]);
  },
  revalidateFor: (_item: { id: string }) => ["/blogs"],
};

export const authorStore = {
  notFoundMessage: "Author not found.",
  slugSource: (b: Partial<{ name: string }>) => b.name ?? "author",
  hasStatus: false,
  count: (q: string) =>
    prisma.author.count({ where: { ...textSearch(q, ["name"]) } }),
  list: (args: { q: string; skip: number; take: number }) =>
    prisma.author.findMany({
      where: { ...textSearch(args.q, ["name"]) },
      include: { _count: { select: { posts: true } } },
      orderBy: { name: "asc" },
      skip: args.skip,
      take: args.take,
    }),
  findById: (id: string) => prisma.author.findUnique({ where: { id } }),
  findBySlug: (_slug: string) => Promise.resolve(null),
  create: (data: { name: string; role?: string; avatar?: string; slug?: string }) => {
    // Author has no slug column — drop the factory-generated slug.
    const { slug: _slug, ...rest } = data;
    void _slug;
    return prisma.author.create({ data: { ...rest } });
  },
  update: (
    id: string,
    data: Partial<{ name: string; role?: string; avatar?: string; slug?: string }>
  ) => {
    const { slug: _slug, ...rest } = data;
    void _slug;
    return prisma.author.update({ where: { id }, data: { ...rest } });
  },
  remove: async (id: string) => {
    const used = await prisma.blogPost.count({ where: { authorId: id } });
    if (used > 0) {
      throw new Error(`Author is used by ${used} post(s). Reassign them first.`);
    }
    await prisma.author.delete({ where: { id } });
  },
  revalidateFor: (_item: { id: string }) => ["/blogs"],
};

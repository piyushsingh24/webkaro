"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, AlertTriangle, Link2 } from "lucide-react";
import { analyzePost, type SeoWarning } from "@/lib/seo-checks";

type Values = {
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;
  coverImage?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  categoryId?: unknown;
  authorId?: unknown;
};

function asString(v: unknown): string | undefined {
  return typeof v === "string" ? v : undefined;
}

type LinkResult = { url: string; status: "ok" | "unpublished" | "broken" | "skipped"; note?: string };

/**
 * Publishing checklist: instant client-side warnings + on-demand
 * server verification (slug availability, internal links).
 * Warnings never block saving — they guide the editor.
 */
export default function SeoChecklist({
  values,
  postId,
}: {
  values: Values;
  postId?: string;
}) {
  const [server, setServer] = useState<{
    warnings: SeoWarning[];
    links: LinkResult[];
    slugAvailable: boolean | null;
  } | null>(null);
  const [checking, setChecking] = useState(false);

  const live = useMemo(
    () =>
      analyzePost({
        title: values.title ?? "",
        excerpt: values.excerpt ?? "",
        content: values.content ?? "",
        coverImage: values.coverImage,
        imageAlt: values.imageAlt,
        seoTitle: values.seoTitle,
        seoDescription: values.seoDescription,
        categoryId: asString(values.categoryId),
        authorId: asString(values.authorId),
      }),
    [values]
  );

  const warnings = server?.warnings ?? live;
  const links = server?.links ?? [];

  const verify = async () => {
    setChecking(true);
    try {
      const res = await fetch("/api/admin/blogs/validate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: postId, ...values }),
      });
      const json = (await res.json().catch(() => ({}))) as {
        warnings?: SeoWarning[];
        links?: LinkResult[];
        slugAvailable?: boolean | null;
      };
      if (res.ok) {
        setServer({
          warnings: json.warnings ?? [],
          links: json.links ?? [],
          slugAvailable: json.slugAvailable ?? null,
        });
      }
    } catch {
      /* network failure: live warnings remain visible */
    } finally {
      setChecking(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
          Publishing checklist
        </h2>
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
          style={
            warnings.length === 0
              ? { backgroundColor: "#F4F7F1", color: "#6E8E59" }
              : { backgroundColor: "#FEF2F2", color: "#991B1B" }
          }
        >
          {warnings.length === 0 ? "All clear" : `${warnings.length} to review`}
        </span>
      </div>

      {warnings.length === 0 ? (
        <p className="flex items-start gap-2 text-xs" style={{ color: "#6E8E59" }}>
          <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
          Title, excerpt, content, image and taxonomy look ready.
        </p>
      ) : (
        <ul className="space-y-2.5">
          {warnings.map((w, i) => (
            <li key={i} className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: "#656565" }}>
              <AlertTriangle className="w-4 h-4 shrink-0 mt-0 text-[#B45309]" />
              <span>
                <strong className="font-semibold" style={{ color: "#1B1B1B" }}>{w.field}:</strong> {w.message}
              </span>
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        onClick={verify}
        disabled={checking}
        className="inline-flex items-center gap-2 px-4 h-10 rounded-xl text-xs font-bold border transition-colors duration-200 disabled:opacity-50"
        style={{ borderColor: "rgba(0,0,0,0.1)", color: "#2563EB" }}
      >
        <Link2 className="w-3.5 h-3.5" />
        {checking ? "Verifying..." : "Verify slug & internal links"}
      </button>

      {server && (
        <div className="space-y-2">
          {server.slugAvailable === false && (
            <p className="text-xs font-medium" style={{ color: "#991B1B" }}>
              Slug is unavailable — publishing would fail or collide.
            </p>
          )}
          {links.length > 0 && (
            <ul className="space-y-1.5">
              {links.map((l) => (
                <li key={l.url} className="flex items-start gap-2 text-xs" style={{ color: "#656565" }}>
                  <span
                    className="mt-1 w-2 h-2 rounded-full shrink-0"
                    style={{
                      backgroundColor:
                        l.status === "ok" ? "#6E8E59" : l.status === "broken" ? "#DC2626" : "#B45309",
                    }}
                  />
                  <span className="font-mono break-all">{l.url}</span>
                  <span className="shrink-0" style={{ color: "#888888" }}>
                    {l.status}
                    {l.note ? ` — ${l.note}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {links.length === 0 && (
            <p className="text-xs" style={{ color: "#888888" }}>No internal links in the body.</p>
          )}
        </div>
      )}
    </div>
  );
}

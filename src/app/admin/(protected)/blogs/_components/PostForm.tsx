"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { blogPostSchema, type BlogPostInput } from "@/lib/schemas/cms";
import {
  PageHeader,
  Card,
  Field,
  TextInput,
  Textarea,
  Select,
  PrimaryButton,
  GhostButton,
} from "../../_components/ui";
import { submitAdminForm } from "../../_components/form-utils";
import SeoChecklist from "./SeoChecklist";

type Option = { id: string; name: string };

type Props = {
  mode: "create" | "edit";
  id?: string;
  categories: Option[];
  tags: Option[];
  authors: (Option & { role?: string | null })[];
  canPublish: boolean;
  initial?: Partial<BlogPostInput> & { tagIds?: string[] };
};

function toLocalInput(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  if (Number.isNaN(d.getTime())) return "";
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function PostForm({
  mode,
  id,
  categories,
  tags,
  authors,
  canPublish,
  initial,
}: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>(initial?.tagIds ?? []);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
    // Input type (pre-defaults) vs output type differ due to schema defaults.
  } = useForm<z.input<typeof blogPostSchema>, unknown, BlogPostInput>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      slug: initial?.slug ?? "",
      title: initial?.title ?? "",
      excerpt: initial?.excerpt ?? "",
      content: initial?.content ?? "",
      coverImage: initial?.coverImage ?? "",
      imageAlt: initial?.imageAlt ?? "",
      categoryId: initial?.categoryId ?? "",
      authorId: initial?.authorId ?? "",
      status: initial?.status ?? "DRAFT",
      publishedAt: initial?.publishedAt
        ? toLocalInput(initial.publishedAt)
        : undefined,
      readingMinutes: initial?.readingMinutes ?? undefined,
      seoTitle: initial?.seoTitle ?? "",
      seoDescription: initial?.seoDescription ?? "",
      canonicalUrl: initial?.canonicalUrl ?? "",
      ogImage: initial?.ogImage ?? "",
    },
  });

  const toggleTag = (tagId: string) =>
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );

  const onSubmit = async (v: BlogPostInput) => {
    setSaving(true);
    try {
      const payload = {
        ...v,
        title: v.title.trim(),
        slug: v.slug.trim(),
        excerpt: v.excerpt.trim(),
        content: v.content,
        categoryId: v.categoryId || undefined,
        authorId: v.authorId || undefined,
        tagIds: selectedTags,
      };
      const endpoint =
        mode === "create" ? "/api/admin/blogs" : `/api/admin/blogs/${id}`;
      const result = await submitAdminForm(
        endpoint,
        mode === "create" ? "POST" : "PATCH",
        payload
      );
      if (!result.ok) {
        toast.error(result.error ?? "Save failed.");
        if (result.error?.toLowerCase().includes("slug")) {
          setError("slug", { message: result.error });
        }
        setSaving(false);
        return;
      }
      toast.success(mode === "create" ? "Post created." : "Post saved.");
      router.push("/admin/blogs");
      router.refresh();
    } catch {
      toast.error("Save failed. Check your connection.");
      setSaving(false);
    }
  };

  const err = (name: keyof BlogPostInput) => errors[name]?.message;

  return (
    <div>
      <PageHeader
        eyebrow="Blogs"
        title={mode === "create" ? "New Post" : "Edit Post"}
        description="Content is Markdown (GFM). Raw HTML is never rendered — safe by default."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="space-y-5">
              <Field label="Title" error={err("title")}>
                <TextInput invalid={Boolean(err("title"))} {...register("title")} />
              </Field>
              <Field label="Slug" hint="Public URL: /blogs/your-slug." error={err("slug")}>
                <TextInput invalid={Boolean(err("slug"))} {...register("slug")} />
              </Field>
              <Field label="Excerpt" hint="Listing cards + meta description fallback." error={err("excerpt")}>
                <Textarea rows={3} invalid={Boolean(err("excerpt"))} {...register("excerpt")} />
              </Field>
              <Field label="Content (Markdown)" error={err("content")}>
                <Textarea
                  rows={18}
                  invalid={Boolean(err("content"))}
                  {...register("content")}
                  className="font-mono text-[13px]"
                  placeholder={"## Heading\n\nWrite in Markdown. **Bold**, lists, `code`, links all supported."}
                />
              </Field>
            </Card>

            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                SEO & media
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Cover image URL">
                  <TextInput {...register("coverImage")} />
                </Field>
                <Field label="Image alt text">
                  <TextInput {...register("imageAlt")} />
                </Field>
                <Field label="OG image URL">
                  <TextInput {...register("ogImage")} />
                </Field>
                <Field label="Canonical URL" hint="Only when republishing duplicate content.">
                  <TextInput {...register("canonicalUrl")} placeholder="/blogs/slug" />
                </Field>
              </div>
              <Field label="SEO title">
                <TextInput {...register("seoTitle")} />
              </Field>
              <Field label="SEO description">
                <Textarea rows={2} {...register("seoDescription")} />
              </Field>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-6">
            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                Publish
              </h2>
              <Field
                label="Status"
                hint={canPublish ? undefined : "Editors can only save drafts."}
                error={err("status")}
              >
                <Select {...register("status")}>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED" disabled={!canPublish}>Published</option>
                  <option value="ARCHIVED" disabled={!canPublish}>Archived</option>
                </Select>
              </Field>
              <Field label="Publish date" hint="Future dates stay hidden until reached." error={err("publishedAt")}>
                <TextInput
                  type="datetime-local"
                  {...register("publishedAt")}
                />
              </Field>
              <Field label="Reading time (min)" hint="Auto-estimated when empty.">
                <TextInput type="number" min={1} {...register("readingMinutes", { valueAsNumber: true })} />
              </Field>
              <Field label="Category" error={err("categoryId")}>
                <Select {...register("categoryId")}>
                  <option value="">Uncategorized</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Author">
                <Select {...register("authorId")}>
                  <option value="">Webkaro Collective</option>
                  {authors.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field label="Tags">
                <div className="flex flex-wrap gap-2">
                  {tags.length === 0 && (
                    <p className="text-xs" style={{ color: "#888888" }}>
                      No tags yet — create them under Blogs → Tags.
                    </p>
                  )}
                  {tags.map((t) => {
                    const on = selectedTags.includes(t.id);
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => toggleTag(t.id)}
                        aria-pressed={on}
                        className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-200"
                        style={
                          on
                            ? { backgroundColor: "#1B1B1B", color: "#FFFFFF", borderColor: "#1B1B1B" }
                            : { backgroundColor: "#FFFFFF", color: "#656565", borderColor: "rgba(0,0,0,0.1)" }
                        }
                      >
                        {t.name}
                      </button>
                    );
                  })}
                </div>
              </Field>
              <PrimaryButton type="submit" disabled={saving} className="w-full">
                {saving ? "Saving..." : mode === "create" ? "Create post" : "Save changes"}
              </PrimaryButton>
              <GhostButton href="/admin/blogs">Cancel</GhostButton>
            </Card>

            <Card>
              <SeoChecklist values={watch()} postId={id} />
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

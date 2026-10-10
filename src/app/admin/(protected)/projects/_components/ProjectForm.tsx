"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { projectSchema, type ProjectInput } from "@/lib/schemas/cms";
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
import {
  linesToArray,
  arrayToLines,
  kvLinesToArray,
  kvArrayToLines,
  submitAdminForm,
} from "../../_components/form-utils";
import ImageField from "../../_components/ImageField";

type Props = {
  mode: "create" | "edit";
  id?: string;
  canPublish: boolean;
  initial?: Omit<
    Partial<ProjectInput>,
    "results" | "outcomes" | "tags" | "screenshots" | "metrics"
  > & {
    results?: unknown;
    outcomes?: unknown;
    tags?: unknown;
    screenshots?: unknown;
    metrics?: unknown;
  };
};

type FormValues = Omit<
  ProjectInput,
  "results" | "outcomes" | "tags" | "screenshots" | "metrics"
> & {
  results: string;
  outcomes: string;
  tags: string;
  screenshots: string;
  metrics: string;
};

function toFormValues(initial: Props["initial"]): FormValues {
  return {
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    category: initial?.category ?? "",
    clientName: initial?.clientName ?? "",
    industry: initial?.industry ?? "",
    summary: initial?.summary ?? "",
    problem: initial?.problem ?? "",
    strategy: initial?.strategy ?? "",
    results: arrayToLines(initial?.results),
    outcomes: arrayToLines(initial?.outcomes),
    tags: arrayToLines(initial?.tags),
    screenshots: arrayToLines(initial?.screenshots),
    metrics: kvArrayToLines(initial?.metrics),
    thumbnail: initial?.thumbnail ?? "",
    imageAlt: initial?.imageAlt ?? "",
    demoUrl: initial?.demoUrl ?? "",
    featured: initial?.featured ?? false,
    status: (initial?.status as FormValues["status"]) ?? "DRAFT",
    sortOrder: initial?.sortOrder ?? 0,
    seoTitle: initial?.seoTitle ?? "",
    seoDescription: initial?.seoDescription ?? "",
    ogImage: initial?.ogImage ?? "",
  };
}

export default function ProjectForm({ mode, id, canPublish, initial }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({ defaultValues: toFormValues(initial) });

  const onSubmit = async (v: FormValues) => {
    setSaving(true);
    try {
      const payload = {
        slug: v.slug.trim(),
        title: v.title.trim(),
        category: v.category.trim(),
        clientName: (v.clientName ?? "").trim() || undefined,
        industry: (v.industry ?? "").trim() || undefined,
        summary: v.summary.trim(),
        problem: (v.problem ?? "").trim() || undefined,
        strategy: (v.strategy ?? "").trim() || undefined,
        results: linesToArray(v.results),
        outcomes: linesToArray(v.outcomes),
        tags: linesToArray(v.tags),
        screenshots: linesToArray(v.screenshots),
        metrics: kvLinesToArray(v.metrics),
        thumbnail: (v.thumbnail ?? "").trim() || undefined,
        imageAlt: (v.imageAlt ?? "").trim() || undefined,
        demoUrl: (v.demoUrl ?? "").trim() || undefined,
        featured: Boolean(v.featured),
        status: v.status,
        sortOrder: Number(v.sortOrder) || 0,
        seoTitle: (v.seoTitle ?? "").trim() || undefined,
        seoDescription: (v.seoDescription ?? "").trim() || undefined,
        ogImage: (v.ogImage ?? "").trim() || undefined,
      };
      const check = projectSchema.safeParse(payload);
      if (!check.success) {
        for (const issue of check.error.issues.slice(0, 4)) {
          const key = String(issue.path[0] ?? "");
          if (key) setError(key as keyof FormValues, { message: issue.message });
        }
        toast.error(check.error.issues[0]?.message ?? "Validation failed.");
        setSaving(false);
        return;
      }
      const endpoint =
        mode === "create" ? "/api/admin/projects" : `/api/admin/projects/${id}`;
      const result = await submitAdminForm(
        endpoint,
        mode === "create" ? "POST" : "PATCH",
        payload
      );
      if (!result.ok) {
        toast.error(result.error ?? "Save failed.");
        setSaving(false);
        return;
      }
      toast.success(mode === "create" ? "Project created." : "Project saved.");
      router.push("/admin/projects");
      router.refresh();
    } catch {
      toast.error("Save failed. Check your connection.");
      setSaving(false);
    }
  };

  const err = (name: keyof FormValues) => errors[name]?.message;

  return (
    <div>
      <PageHeader
        eyebrow="Projects"
        title={mode === "create" ? "New Project" : "Edit Project"}
        description="Client names, metrics and outcomes must be genuine — never fabricate results."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="space-y-5">
              <Field label="Title" error={err("title")}>
                <TextInput invalid={Boolean(err("title"))} {...register("title")} />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Slug" error={err("slug")}>
                  <TextInput invalid={Boolean(err("slug"))} {...register("slug")} placeholder="project-name" />
                </Field>
                <Field label="Category" hint="e.g. Web Development, EdTech." error={err("category")}>
                  <TextInput invalid={Boolean(err("category"))} {...register("category")} />
                </Field>
                <Field label="Client name (optional)">
                  <TextInput {...register("clientName")} />
                </Field>
                <Field label="Industry (optional)">
                  <TextInput {...register("industry")} placeholder="E-commerce, Healthcare..." />
                </Field>
              </div>
              <Field label="Summary" error={err("summary")}>
                <Textarea rows={3} invalid={Boolean(err("summary"))} {...register("summary")} />
              </Field>
              <Field label="Problem">
                <Textarea rows={4} {...register("problem")} />
              </Field>
              <Field label="Strategy">
                <Textarea rows={4} {...register("strategy")} />
              </Field>
            </Card>

            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                Results & proof
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Results" hint="One per line.">
                  <Textarea rows={5} {...register("results")} className="font-mono" />
                </Field>
                <Field label="Outcomes" hint="One per line.">
                  <Textarea rows={5} {...register("outcomes")} className="font-mono" />
                </Field>
              </div>
              <Field label="Metrics" hint='One per line: "Label | Value". Only verified numbers.'>
                <Textarea rows={4} {...register("metrics")} className="font-mono" placeholder="Performance | 98/100" />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Tags" hint="One per line.">
                  <Textarea rows={4} {...register("tags")} className="font-mono" />
                </Field>
                <Field label="Screenshots" hint="Image URLs, one per line.">
                  <Textarea rows={4} {...register("screenshots")} className="font-mono" />
                </Field>
              </div>
            </Card>

            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                Media & SEO
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Thumbnail">
                  <ImageField
                    value={watch("thumbnail") ?? ""}
                    onChange={(v) => setValue("thumbnail", v)}
                  />
                </Field>
                <Field label="Image alt text">
                  <TextInput {...register("imageAlt")} />
                </Field>
                <Field label="Live demo URL">
                  <TextInput {...register("demoUrl")} />
                </Field>
                <Field label="OG image">
                  <ImageField
                    value={watch("ogImage") ?? ""}
                    onChange={(v) => setValue("ogImage", v)}
                  />
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
              <Field label="Display order">
                <TextInput type="number" min={0} {...register("sortOrder", { valueAsNumber: true })} />
              </Field>
              <label className="flex items-center gap-3 text-sm font-medium cursor-pointer" style={{ color: "#1B1B1B" }}>
                <input type="checkbox" {...register("featured")} className="w-4 h-4 accent-[#6E8E59]" />
                Featured on homepage
              </label>
              <PrimaryButton type="submit" disabled={saving} className="w-full">
                {saving ? "Saving..." : mode === "create" ? "Create project" : "Save changes"}
              </PrimaryButton>
              <GhostButton href="/admin/projects">Cancel</GhostButton>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

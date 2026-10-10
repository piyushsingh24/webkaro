"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { serviceSchema, type ServiceInput } from "@/lib/schemas/cms";
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
  prettyJson,
  parseJsonArray,
  submitAdminForm,
} from "../../_components/form-utils";
import ImageField from "../../_components/ImageField";

type Category = { id: string; name: string };

type Props = {
  mode: "create" | "edit";
  id?: string;
  categories: Category[];
  canPublish: boolean;
  initial?: Omit<
    Partial<ServiceInput>,
    | "features"
    | "deliverables"
    | "technologies"
    | "benefits"
    | "techStack"
    | "processSteps"
    | "caseStudy"
  > & {
    features?: unknown;
    deliverables?: unknown;
    technologies?: unknown;
    benefits?: unknown;
    techStack?: unknown;
    processSteps?: unknown;
    caseStudy?: unknown;
  };
};

type FormValues = Omit<ServiceInput, "features" | "deliverables" | "technologies" | "benefits" | "techStack" | "processSteps" | "caseStudy"> & {
  features: string;
  deliverables: string;
  technologies: string;
  benefits: string;
  techStack: string;
  processSteps: string;
  caseProject: string;
  caseChallenge: string;
  caseSolution: string;
  caseResults: string;
};

function toFormValues(
  initial: Props["initial"],
  categories: Category[]
): FormValues {
  const cs =
    typeof initial?.caseStudy === "object" && initial.caseStudy !== null
      ? (initial.caseStudy as Record<string, unknown>)
      : null;
  return {
    slug: initial?.slug ?? "",
    title: initial?.title ?? "",
    shortDescription: initial?.shortDescription ?? "",
    description: initial?.description ?? "",
    icon: initial?.icon ?? "Laptop",
    categoryId: initial?.categoryId ?? categories[0]?.id ?? "",
    price: initial?.price ?? "",
    pricingHint: initial?.pricingHint ?? "",
    timeline: initial?.timeline ?? "",
    features: arrayToLines(initial?.features),
    deliverables: arrayToLines(initial?.deliverables),
    technologies: arrayToLines(initial?.technologies),
    benefits: arrayToLines(initial?.benefits),
    techStack: prettyJson(initial?.techStack),
    processSteps: prettyJson(initial?.processSteps),
    caseProject: cs ? String(cs.project ?? "") : "",
    caseChallenge: cs ? String(cs.challenge ?? "") : "",
    caseSolution: cs ? String(cs.solution ?? "") : "",
    caseResults: cs ? String(cs.results ?? "") : "",
    featuredImage: initial?.featuredImage ?? "",
    imageAlt: initial?.imageAlt ?? "",
    seoTitle: initial?.seoTitle ?? "",
    seoDescription: initial?.seoDescription ?? "",
    ogImage: initial?.ogImage ?? "",
    status: (initial?.status as FormValues["status"]) ?? "DRAFT",
    sortOrder: initial?.sortOrder ?? 0,
  };
}

export default function ServiceForm({
  mode,
  id,
  categories,
  canPublish,
  initial,
}: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    // Field-level validity is enforced on submit via serviceSchema.
    defaultValues: toFormValues(initial, categories),
  });

  const onSubmit = async (v: FormValues) => {
    setSaving(true);
    try {
      let techStack: unknown[] = [];
      let processSteps: unknown[] = [];
      try {
        techStack = parseJsonArray(v.techStack, "Tech stack");
        processSteps = parseJsonArray(v.processSteps, "Process steps");
      } catch (e) {
        toast.error(e instanceof Error ? e.message : "Invalid JSON.");
        setSaving(false);
        return;
      }
      const hasCase =
        v.caseProject.trim() ||
        v.caseChallenge.trim() ||
        v.caseSolution.trim() ||
        v.caseResults.trim();

      const payload = {
        slug: v.slug.trim(),
        title: v.title.trim(),
        shortDescription: v.shortDescription.trim(),
        description: v.description.trim(),
        icon: (v.icon ?? "").trim() || "Laptop",
        categoryId: v.categoryId,
        price: (v.price ?? "").trim() || undefined,
        pricingHint: (v.pricingHint ?? "").trim() || undefined,
        timeline: (v.timeline ?? "").trim() || undefined,
        features: linesToArray(v.features),
        deliverables: linesToArray(v.deliverables),
        technologies: linesToArray(v.technologies),
        benefits: linesToArray(v.benefits),
        techStack,
        processSteps,
        ...(hasCase
          ? {
              caseStudy: {
                project: v.caseProject.trim(),
                challenge: v.caseChallenge.trim(),
                solution: v.caseSolution.trim(),
                results: v.caseResults.trim(),
              },
            }
          : {}),
        featuredImage: (v.featuredImage ?? "").trim() || undefined,
        imageAlt: (v.imageAlt ?? "").trim() || undefined,
        seoTitle: (v.seoTitle ?? "").trim() || undefined,
        seoDescription: (v.seoDescription ?? "").trim() || undefined,
        ogImage: (v.ogImage ?? "").trim() || undefined,
        status: v.status,
        sortOrder: Number(v.sortOrder) || 0,
      };

      // Client-side schema check for friendly field errors.
      const check = serviceSchema.safeParse(payload);
      if (!check.success) {
        for (const issue of check.error.issues.slice(0, 4)) {
          const key = String(issue.path[0] ?? "");
          if (key) {
            setError(key as keyof FormValues, { message: issue.message });
          }
        }
        toast.error(check.error.issues[0]?.message ?? "Validation failed.");
        setSaving(false);
        return;
      }

      const endpoint =
        mode === "create" ? "/api/admin/services" : `/api/admin/services/${id}`;
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
      toast.success(mode === "create" ? "Service created." : "Service saved.");
      router.push("/admin/services");
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
        eyebrow="Services"
        title={mode === "create" ? "New Service" : "Edit Service"}
        description="Slug becomes the public URL: /services/your-slug. Only PUBLISHED services are visible publicly."
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="space-y-5">
              <Field label="Title" error={err("title")}>
                <TextInput invalid={Boolean(err("title"))} {...register("title")} placeholder="Business Websites" />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Slug" hint="Lowercase letters, numbers, hyphens." error={err("slug")}>
                  <TextInput invalid={Boolean(err("slug"))} {...register("slug")} placeholder="business-websites" />
                </Field>
                <Field label="Icon name" hint="Lucide icon key, e.g. Laptop, Zap." error={err("icon")}>
                  <TextInput {...register("icon")} placeholder="Laptop" />
                </Field>
              </div>
              <Field label="Short description" error={err("shortDescription")}>
                <Textarea rows={2} invalid={Boolean(err("shortDescription"))} {...register("shortDescription")} />
              </Field>
              <Field label="Full description" error={err("description")}>
                <Textarea rows={5} invalid={Boolean(err("description"))} {...register("description")} />
              </Field>
            </Card>

            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                Features & deliverables
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Features" hint="One per line.">
                  <Textarea rows={6} {...register("features")} className="font-mono" />
                </Field>
                <Field label="Deliverables" hint="One per line.">
                  <Textarea rows={6} {...register("deliverables")} className="font-mono" />
                </Field>
                <Field label="Technologies" hint="One per line, e.g. Next.js.">
                  <Textarea rows={4} {...register("technologies")} className="font-mono" />
                </Field>
                <Field label="Why-choose points" hint="One per line.">
                  <Textarea rows={4} {...register("benefits")} className="font-mono" />
                </Field>
              </div>
              <Field label="Tech stack (JSON)" hint='[{"name":"Next.js","description":"..."}]'>
                <Textarea rows={4} {...register("techStack")} className="font-mono text-xs" />
              </Field>
              <Field label="Process steps (JSON)" hint='[{"step":"01","title":"...","description":"..."}]'>
                <Textarea rows={4} {...register("processSteps")} className="font-mono text-xs" />
              </Field>
            </Card>

            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                Case study (optional)
              </h2>
              <Field label="Project">
                <TextInput {...register("caseProject")} />
              </Field>
              <Field label="Challenge">
                <Textarea rows={3} {...register("caseChallenge")} />
              </Field>
              <Field label="Solution">
                <Textarea rows={3} {...register("caseSolution")} />
              </Field>
              <Field label="Results">
                <Textarea rows={3} {...register("caseResults")} />
              </Field>
            </Card>

            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                SEO & image
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Featured image">
                  <ImageField
                    value={watch("featuredImage") ?? ""}
                    onChange={(v) => setValue("featuredImage", v)}
                  />
                </Field>
                <Field label="Image alt text">
                  <TextInput {...register("imageAlt")} />
                </Field>
                <Field label="OG image">
                  <ImageField
                    value={watch("ogImage") ?? ""}
                    onChange={(v) => setValue("ogImage", v)}
                  />
                </Field>
              </div>
              <Field label="SEO title" hint="Defaults to “Title | WebKaro”.">
                <TextInput {...register("seoTitle")} />
              </Field>
              <Field label="SEO description" hint="Defaults to short description.">
                <Textarea rows={2} {...register("seoDescription")} />
              </Field>
            </Card>
          </div>

          <div className="space-y-6 lg:sticky lg:top-6">
            <Card className="space-y-5">
              <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                Publish
              </h2>
              <Field label="Category" error={err("categoryId")}>
                <Select {...register("categoryId")}>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </Select>
              </Field>
              <Field
                label="Status"
                hint={canPublish ? undefined : "Editors can only save drafts — an administrator publishes."}
                error={err("status")}
              >
                <Select {...register("status")}>
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED" disabled={!canPublish}>
                    Published
                  </option>
                  <option value="ARCHIVED" disabled={!canPublish}>
                    Archived
                  </option>
                </Select>
              </Field>
              <Field label="Display order" hint="Lower appears first.">
                <TextInput type="number" min={0} {...register("sortOrder", { valueAsNumber: true })} />
              </Field>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Price">
                  <TextInput {...register("price")} placeholder="₹25,000+" />
                </Field>
                <Field label="Timeline">
                  <TextInput {...register("timeline")} placeholder="2–3 weeks" />
                </Field>
              </div>
              <Field label="Pricing hint">
                <TextInput {...register("pricingHint")} />
              </Field>
              <PrimaryButton type="submit" disabled={saving} className="w-full">
                {saving ? "Saving..." : mode === "create" ? "Create service" : "Save changes"}
              </PrimaryButton>
              <GhostButton href="/admin/services">Cancel</GhostButton>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

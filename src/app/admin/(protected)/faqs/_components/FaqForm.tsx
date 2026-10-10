"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
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
import RichTextEditor from "../../_components/RichTextEditor";

type ServiceOption = { id: string; title: string };

type Props = {
  mode: "create" | "edit";
  id?: string;
  services: ServiceOption[];
  canPublish: boolean;
  initial?: {
    slug: string;
    question: string;
    answer: string;
    details: string;
    category: string;
    serviceId: string;
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    sortOrder: number;
  };
};

type FormValues = {
  slug: string;
  question: string;
  answer: string;
  details: string;
  category: string;
  serviceId: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  sortOrder: number;
};

export default function FaqForm({ mode, id, services, canPublish, initial }: Props) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      slug: initial?.slug ?? "",
      question: initial?.question ?? "",
      answer: initial?.answer ?? "",
      details: initial?.details ?? "",
      category: initial?.category ?? "",
      serviceId: initial?.serviceId ?? "",
      status: initial?.status ?? "DRAFT",
      sortOrder: initial?.sortOrder ?? 0,
    },
  });

  const onSubmit = async (v: FormValues) => {
    setSaving(true);
    try {
      const payload = {
        slug: v.slug.trim(),
        question: v.question.trim(),
        answer: v.answer.trim(),
        details: v.details.trim() || undefined,
        category: v.category.trim() || undefined,
        serviceId: v.serviceId || undefined,
        status: v.status,
        sortOrder: Number(v.sortOrder) || 0,
      };
      const endpoint =
        mode === "create" ? "/api/admin/faqs" : `/api/admin/faqs/${id}`;
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
      toast.success("Saved.");
      router.push("/admin/faqs");
      router.refresh();
    } catch {
      toast.error("Save failed. Check your connection.");
      setSaving(false);
    }
  };

  return (
    <div>
      <PageHeader eyebrow="FAQs" title={mode === "create" ? "New FAQ" : "Edit FAQ"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="space-y-5 max-w-2xl">
          <Field label="Question" error={errors.question?.message}>
            <TextInput
              invalid={Boolean(errors.question)}
              {...register("question", { required: "Question is required." })}
            />
          </Field>
          <Field label="Slug" hint="Public URL: /faq/your-slug." error={errors.slug?.message}>
            <TextInput
              invalid={Boolean(errors.slug)}
              {...register("slug", { required: "Slug is required." })}
              placeholder="how-much-does-it-cost"
            />
          </Field>
          <Field label="Answer" hint="Short answer shown in accordions." error={errors.answer?.message}>
            <Textarea rows={3} invalid={Boolean(errors.answer)} {...register("answer", { required: "Answer is required." })} />
          </Field>
          <Field label="Details (optional)" hint="Rich text shown on the detail page.">
            <RichTextEditor
              height={300}
              value={watch("details") ?? ""}
              onChange={(v) => setValue("details", v)}
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Category (optional)">
              <TextInput {...register("category")} placeholder="Pricing, Process..." />
            </Field>
            <Field label="Related service (optional)">
              <Select {...register("serviceId")}>
                <option value="">None</option>
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Status" hint={canPublish ? undefined : "Editors can only save drafts."}>
              <Select {...register("status")}>
                <option value="DRAFT">Draft</option>
                <option value="PUBLISHED" disabled={!canPublish}>Published</option>
                <option value="ARCHIVED" disabled={!canPublish}>Archived</option>
              </Select>
            </Field>
            <Field label="Display order">
              <TextInput type="number" min={0} {...register("sortOrder", { valueAsNumber: true })} />
            </Field>
          </div>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton type="submit" disabled={saving}>
              {saving ? "Saving..." : mode === "create" ? "Create" : "Save changes"}
            </PrimaryButton>
            <GhostButton href="/admin/faqs">Cancel</GhostButton>
          </div>
        </Card>
      </form>
    </div>
  );
}

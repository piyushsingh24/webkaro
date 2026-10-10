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
import ImageField from "../../_components/ImageField";

type Props = {
  mode: "create" | "edit";
  id?: string;
  canPublish: boolean;
  initial?: {
    clientName: string;
    company: string;
    role: string;
    content: string;
    avatar: string;
    rating?: number | null;
    featured: boolean;
    verified: boolean;
    status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    sortOrder: number;
  };
};

type FormValues = {
  clientName: string;
  company: string;
  role: string;
  content: string;
  avatar: string;
  rating: string;
  featured: boolean;
  verified: boolean;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  sortOrder: number;
};

export default function TestimonialForm({ mode, id, canPublish, initial }: Props) {
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
      clientName: initial?.clientName ?? "",
      company: initial?.company ?? "",
      role: initial?.role ?? "",
      content: initial?.content ?? "",
      avatar: initial?.avatar ?? "",
      rating: initial?.rating ? String(initial.rating) : "",
      featured: initial?.featured ?? false,
      verified: initial?.verified ?? false,
      status: initial?.status ?? "DRAFT",
      sortOrder: initial?.sortOrder ?? 0,
    },
  });

  const onSubmit = async (v: FormValues) => {
    setSaving(true);
    try {
      const payload = {
        clientName: v.clientName.trim(),
        company: v.company.trim() || undefined,
        role: v.role.trim() || undefined,
        content: v.content.trim(),
        avatar: v.avatar.trim() || undefined,
        rating: v.rating ? Number(v.rating) : undefined,
        featured: Boolean(v.featured),
        verified: Boolean(v.verified),
        status: v.status,
        sortOrder: Number(v.sortOrder) || 0,
      };
      const endpoint =
        mode === "create" ? "/api/admin/testimonials" : `/api/admin/testimonials/${id}`;
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
      router.push("/admin/testimonials");
      router.refresh();
    } catch {
      toast.error("Save failed. Check your connection.");
      setSaving(false);
    }
  };

  return (
    <div>
      <PageHeader eyebrow="Testimonials" title={mode === "create" ? "New Testimonial" : "Edit Testimonial"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="space-y-5 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field label="Client name" error={errors.clientName?.message}>
              <TextInput invalid={Boolean(errors.clientName)} {...register("clientName", { required: "Client name is required." })} />
            </Field>
            <Field label="Company">
              <TextInput {...register("company")} />
            </Field>
            <Field label="Role / designation">
              <TextInput {...register("role")} placeholder="Founder, CEO..." />
            </Field>
            <Field label="Rating">
              <Select {...register("rating")}>
                <option value="">No rating</option>
                {[5, 4, 3, 2, 1].map((n) => (
                  <option key={n} value={n}>{n} / 5</option>
                ))}
              </Select>
            </Field>
          </div>
          <Field label="Quote" error={errors.content?.message}>
            <Textarea rows={4} invalid={Boolean(errors.content)} {...register("content", { required: "Quote is required." })} />
          </Field>
          <Field label="Avatar (optional)">
            <ImageField
              value={watch("avatar") ?? ""}
              onChange={(v) => setValue("avatar", v)}
            />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          <label className="flex items-center gap-3 text-sm font-medium cursor-pointer" style={{ color: "#1B1B1B" }}>
            <input type="checkbox" {...register("featured")} className="w-4 h-4 accent-[#6E8E59]" />
            Featured on homepage
          </label>
          <label className="flex items-center gap-3 text-sm font-medium cursor-pointer" style={{ color: "#1B1B1B" }}>
            <input type="checkbox" {...register("verified")} className="w-4 h-4 accent-[#6E8E59]" />
            Verified by administrator (only check genuine, confirmed quotes)
          </label>
          <div className="flex flex-wrap gap-3">
            <PrimaryButton type="submit" disabled={saving}>
              {saving ? "Saving..." : mode === "create" ? "Create" : "Save changes"}
            </PrimaryButton>
            <GhostButton href="/admin/testimonials">Cancel</GhostButton>
          </div>
        </Card>
      </form>
    </div>
  );
}

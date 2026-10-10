"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  Card,
  Field,
  TextInput,
  Select,
  PrimaryButton,
} from "../../_components/ui";

type FormValues = {
  name: string;
  email: string;
  role: "ADMIN" | "EDITOR";
  password: string;
  confirm: string;
};

/**
 * Create-user form (ADMIN only — the API enforces this server-side).
 * The password is hashed with Argon2id on the server and never returned.
 */
export default function UserForm() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", role: "EDITOR", password: "", confirm: "" },
  });

  const onSubmit = async (v: FormValues) => {
    if (v.password !== v.confirm) {
      toast.error("Passwords do not match.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: v.name.trim(),
          email: v.email.trim(),
          role: v.role,
          password: v.password,
        }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        toast.error(json.error ?? "Could not create user.");
        setSaving(false);
        return;
      }
      toast.success(`Account created for ${v.email.trim()}.`);
      reset();
      router.refresh();
    } catch {
      toast.error("Could not create user. Check your connection.");
      setSaving(false);
    }
  };

  return (
    <Card className="lg:sticky lg:top-6">
      <h2
        className="text-lg font-semibold mb-1"
        style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
      >
        New user
      </h2>
      <p className="text-xs mb-5" style={{ color: "#888888" }}>
        They can sign in immediately at /admin/login. Password needs 12+
        characters.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Field label="Full name" error={errors.name?.message}>
          <TextInput
            invalid={Boolean(errors.name)}
            placeholder="Jane Doe"
            {...register("name", { required: "Name is required." })}
          />
        </Field>
        <Field label="Email address" error={errors.email?.message}>
          <TextInput
            type="email"
            autoComplete="off"
            invalid={Boolean(errors.email)}
            placeholder="jane@webkaro.in"
            {...register("email", { required: "Email is required." })}
          />
        </Field>
        <Field label="Role" hint="Admins can publish, assign, delete and manage users. Editors can only work with drafts and notes.">
          <Select {...register("role")}>
            <option value="EDITOR">Editor</option>
            <option value="ADMIN">Admin</option>
          </Select>
        </Field>
        <Field label="Password" error={errors.password?.message}>
          <TextInput
            type="password"
            autoComplete="new-password"
            invalid={Boolean(errors.password)}
            placeholder="Minimum 12 characters"
            {...register("password", {
              required: "Password is required.",
              minLength: { value: 12, message: "Minimum 12 characters." },
            })}
          />
        </Field>
        <Field label="Confirm password">
          <TextInput
            type="password"
            autoComplete="new-password"
            placeholder="Repeat the password"
            {...register("confirm", { required: "Please confirm the password." })}
          />
          {errors.confirm && (
            <p className="mt-1.5 text-xs font-medium" style={{ color: "#DC2626" }}>
              {errors.confirm.message}
            </p>
          )}
        </Field>
        <PrimaryButton type="submit" disabled={saving} className="w-full">
          {saving ? "Creating..." : "Create account"}
        </PrimaryButton>
      </form>
    </Card>
  );
}

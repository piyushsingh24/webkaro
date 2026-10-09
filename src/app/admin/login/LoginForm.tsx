"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { loginSchema, type LoginInput } from "@/lib/schemas/auth";

/** Allow only same-origin relative redirects (prevents open-redirect abuse). */
function safeCallbackUrl(raw: string | null): string {
  if (raw && raw.startsWith("/") && !raw.startsWith("//")) return raw;
  return "/admin";
}

export default function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginInput) => {
    setServerError(null);
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      // Server intentionally returns a generic message (see src/lib/auth.ts).
      setServerError(result.error);
      return;
    }
    if (result?.ok) {
      router.push(safeCallbackUrl(searchParams.get("callbackUrl")));
      router.refresh();
    } else {
      setServerError("Something went wrong. Please try again.");
    }
  };

  const inputClass =
    "w-full h-14 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="admin-email"
          className="block text-xs uppercase tracking-widest font-semibold mb-2"
          style={{ color: "#888888" }}
        >
          Email Address
        </label>
        <input
          id="admin-email"
          type="email"
          autoComplete="username"
          placeholder="admin@webkaro.in"
          className={inputClass}
          style={{
            backgroundColor: "#FAF8F5",
            borderColor: errors.email ? "#DC2626" : "rgba(0,0,0,0.06)",
            color: "#1B1B1B",
          }}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-2 text-xs font-medium" style={{ color: "#DC2626" }}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="admin-password"
          className="block text-xs uppercase tracking-widest font-semibold mb-2"
          style={{ color: "#888888" }}
        >
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          autoComplete="current-password"
          placeholder="••••••••••••"
          className={inputClass}
          style={{
            backgroundColor: "#FAF8F5",
            borderColor: errors.password ? "#DC2626" : "rgba(0,0,0,0.06)",
            color: "#1B1B1B",
          }}
          {...register("password")}
        />
        {errors.password && (
          <p className="mt-2 text-xs font-medium" style={{ color: "#DC2626" }}>
            {errors.password.message}
          </p>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          className="px-5 py-4 rounded-2xl text-sm font-medium"
          style={{ backgroundColor: "#FEF2F2", color: "#991B1B" }}
        >
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-arrow w-full h-14 rounded-2xl text-base font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] disabled:opacity-60 disabled:hover:translate-y-0"
        style={{ backgroundColor: "#2563EB" }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Signing in...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            Sign In
            <ArrowRight className="btn-arrow-icon w-4 h-4" />
          </span>
        )}
      </button>
    </form>
  );
}

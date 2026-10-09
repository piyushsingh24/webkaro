import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared presentational primitives for admin pages (server-safe). */

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
      <div>
        <p
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-2"
          style={{ color: "#2563EB" }}
        >
          {eyebrow}
        </p>
        <h1
          className="text-3xl md:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
        >
          {title}
        </h1>
        {description && (
          <p className="text-sm mt-2 max-w-xl" style={{ color: "#656565" }}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

const statusStyles: Record<string, { bg: string; fg: string }> = {
  PUBLISHED: { bg: "#F4F7F1", fg: "#6E8E59" },
  DRAFT: { bg: "#F6F3EE", fg: "#656565" },
  ARCHIVED: { bg: "#FEF2F2", fg: "#991B1B" },
};

export function StatusBadge({ status }: { status: string }) {
  const s = statusStyles[status] ?? statusStyles.DRAFT;
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest"
      style={{ backgroundColor: s.bg, color: s.fg }}
    >
      {status.toLowerCase()}
    </span>
  );
}

export function EmptyState({
  title,
  hint,
  action,
}: {
  title: string;
  hint?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className="text-center py-16 px-6 rounded-2xl border"
      style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
    >
      <p
        className="text-base font-semibold mb-2"
        style={{ color: "#1B1B1B" }}
      >
        {title}
      </p>
      {hint && (
        <p className="text-sm mb-6" style={{ color: "#888888" }}>
          {hint}
        </p>
      )}
      {action}
    </div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn("p-6 md:p-8 rounded-2xl border", className)}
      style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
    >
      {children}
    </div>
  );
}

export function Field({
  label,
  hint,
  error,
  children,
  htmlFor,
}: {
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
  htmlFor?: string;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-xs uppercase tracking-widest font-semibold mb-2"
        style={{ color: "#888888" }}
      >
        {label}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-1.5 text-xs" style={{ color: "#888888" }}>
          {hint}
        </p>
      )}
      {error && (
        <p className="mt-1.5 text-xs font-medium" style={{ color: "#DC2626" }}>
          {error}
        </p>
      )}
    </div>
  );
}

const inputStyle = (invalid: boolean): React.CSSProperties => ({
  backgroundColor: "#FAF8F5",
  borderColor: invalid ? "#DC2626" : "rgba(0,0,0,0.06)",
  color: "#1B1B1B",
});

export function TextInput(
  props: React.InputHTMLAttributes<HTMLInputElement> & { invalid?: boolean }
) {
  const { invalid, ...rest } = props;
  return (
    <input
      {...rest}
      className={cn(
        "w-full h-12 px-4 rounded-xl border text-sm transition-all duration-200 focus:outline-none",
        props.className
      )}
      style={inputStyle(Boolean(invalid))}
    />
  );
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    invalid?: boolean;
    rows?: number;
  }
) {
  const { invalid, rows = 4, ...rest } = props;
  return (
    <textarea
      {...rest}
      rows={rows}
      className={cn(
        "w-full px-4 py-3 rounded-xl border text-sm leading-relaxed transition-all duration-200 focus:outline-none",
        props.className
      )}
      style={inputStyle(Boolean(invalid))}
    />
  );
}

export function Select(
  props: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }
) {
  const { invalid, ...rest } = props;
  return (
    <select
      {...rest}
      className={cn(
        "w-full h-12 px-4 rounded-xl border text-sm transition-all duration-200 focus:outline-none",
        props.className
      )}
      style={inputStyle(Boolean(invalid))}
    />
  );
}

export function PrimaryButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-1px] disabled:opacity-60 disabled:hover:translate-y-0",
        props.className
      )}
      style={{ backgroundColor: "#2563EB" }}
    />
  );
}

export function GhostButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-2xl text-sm font-semibold border transition-all duration-300"
      style={{ borderColor: "rgba(0,0,0,0.08)", color: "#2563EB" }}
    >
      {children}
    </Link>
  );
}

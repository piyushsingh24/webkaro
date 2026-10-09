"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { Search, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

/** Debounced search box syncing ?q= (resets to page 1). */
export function SearchInput({ placeholder }: { placeholder: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");
  const [pending, startTransition] = useTransition();

  return (
    <div className="relative w-full sm:max-w-xs">
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
        style={{ color: "#888888" }}
      />
      <input
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          setValue(v);
          startTransition(() => {
            const params = new URLSearchParams(searchParams.toString());
            if (v.trim()) params.set("q", v.trim());
            else params.delete("q");
            params.delete("page");
            router.replace(`?${params.toString()}`);
          });
        }}
        placeholder={placeholder}
        aria-label="Search"
        className="w-full h-11 pl-10 pr-4 rounded-xl border text-sm focus:outline-none"
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "rgba(0,0,0,0.08)",
          color: "#1B1B1B",
          opacity: pending ? 0.7 : 1,
        }}
      />
    </div>
  );
}

/** Status filter pills (All / Draft / Published / Archived). */
export function StatusFilter({ base }: { base: string }) {
  const searchParams = useSearchParams();
  const active = searchParams.get("status") ?? "";
  const options = [
    { value: "", label: "All" },
    { value: "DRAFT", label: "Draft" },
    { value: "PUBLISHED", label: "Published" },
    { value: "ARCHIVED", label: "Archived" },
  ];
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const params = new URLSearchParams(searchParams.toString());
        if (o.value) params.set("status", o.value);
        else params.delete("status");
        params.delete("page");
        const isActive = active === o.value;
        return (
          <Link
            key={o.label}
            href={`${base}?${params.toString()}`}
            aria-current={isActive ? "true" : undefined}
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200"
            style={
              isActive
                ? { backgroundColor: "#1B1B1B", color: "#FFFFFF" }
                : {
                    backgroundColor: "#FFFFFF",
                    color: "#656565",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }
            }
          >
            {o.label}
          </Link>
        );
      })}
    </div>
  );
}

/** Delete with inline confirmation. ADMIN-only endpoints enforce server-side. */
export function DeleteButton({
  endpoint,
  label,
  onDeleted,
}: {
  endpoint: string;
  label: string;
  onDeleted?: () => void;
}) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [busy, setBusy] = useState(false);

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors duration-200"
        style={{ borderColor: "rgba(0,0,0,0.08)", color: "#991B1B" }}
      >
        <Trash2 className="w-3.5 h-3.5" />
        Delete
      </button>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <span className="font-medium" style={{ color: "#656565" }}>
        Delete {label}?
      </span>
      <button
        type="button"
        disabled={busy}
        onClick={async () => {
          setBusy(true);
          try {
            const res = await fetch(endpoint, { method: "DELETE" });
            const json = (await res.json().catch(() => ({}))) as {
              error?: string;
            };
            if (!res.ok) {
              toast.error(json.error ?? "Delete failed.");
              setBusy(false);
              setConfirming(false);
              return;
            }
            toast.success("Deleted.");
            if (onDeleted) onDeleted();
            else router.refresh();
          } catch {
            toast.error("Delete failed. Check your connection.");
            setBusy(false);
            setConfirming(false);
          }
        }}
        className="px-3 py-1.5 rounded-lg text-xs font-bold text-white disabled:opacity-60"
        style={{ backgroundColor: "#DC2626" }}
      >
        {busy ? "Deleting..." : "Confirm"}
      </button>
      <button
        type="button"
        disabled={busy}
        onClick={() => setConfirming(false)}
        className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
        style={{ borderColor: "rgba(0,0,0,0.08)", color: "#656565" }}
      >
        Cancel
      </button>
    </span>
  );
}

/** Simple prev/next pagination driven by ?page=. */
export function Pagination({
  base,
  page,
  perPage,
  total,
}: {
  base: string;
  page: number;
  perPage: number;
  total: number;
}) {
  const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (totalPages <= 1) return null;

  const href = (p: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(p));
    return `${base}?${params.toString()}`;
  };

  const btn =
    "inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors duration-200 disabled:opacity-40";
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-xs" style={{ color: "#888888" }}>
        Page {page} of {totalPages} · {total} total
      </p>
      <div className="flex gap-2">
        <Link
          href={href(page - 1)}
          aria-disabled={page <= 1}
          className={btn}
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            color: "#1B1B1B",
            pointerEvents: page <= 1 ? "none" : undefined,
            opacity: page <= 1 ? 0.4 : 1,
          }}
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Prev
        </Link>
        <Link
          href={href(page + 1)}
          className={btn}
          style={{
            borderColor: "rgba(0,0,0,0.08)",
            color: "#1B1B1B",
            pointerEvents: page >= totalPages ? "none" : undefined,
            opacity: page >= totalPages ? 0.4 : 1,
          }}
        >
          Next <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

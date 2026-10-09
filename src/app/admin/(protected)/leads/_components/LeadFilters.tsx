"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { LEAD_STATUSES, LEAD_SOURCES } from "@/lib/schemas/leads";

function Filter({
  name,
  value,
  options,
  label,
}: {
  name: string;
  value?: string;
  options: readonly string[];
  label: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <label
      className="inline-flex items-center gap-2 text-xs font-semibold"
      style={{ color: "#656565" }}
    >
      {label}
      <select
        value={value ?? ""}
        onChange={(e) => {
          const params = new URLSearchParams(searchParams.toString());
          if (e.target.value) params.set(name, e.target.value);
          else params.delete(name);
          params.delete("page");
          router.replace(`/admin/leads?${params.toString()}`);
        }}
        className="h-11 px-3 rounded-xl border text-xs font-medium bg-white focus:outline-none"
        style={{ borderColor: "rgba(0,0,0,0.08)", color: "#1B1B1B" }}
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o.replace(/_/g, " ")}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function LeadFilters({
  status,
  service,
  source,
  sort,
  services,
}: {
  status?: string;
  service?: string;
  source?: string;
  sort?: string;
  services: string[];
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Filter name="status" value={status} options={LEAD_STATUSES} label="Status" />
      <Filter name="service" value={service} options={services} label="Service" />
      <Filter name="source" value={source} options={LEAD_SOURCES} label="Source" />
      <Filter
        name="sort"
        value={sort}
        options={["newest", "oldest", "followup"]}
        label="Sort"
      />
    </div>
  );
}

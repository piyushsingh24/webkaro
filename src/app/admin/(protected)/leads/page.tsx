import Link from "next/link";
import { countLeads, listLeads, listLeadServices, LEAD_STATUSES } from "@/lib/crm/leads";
import { isDbConfigured } from "@/lib/cms/db";
import { LEAD_SOURCES } from "@/lib/schemas/leads";
import {
  PageHeader,
  EmptyState,
  Card,
} from "../_components/ui";
import {
  SearchInput,
  DeleteButton,
  Pagination,
} from "../_components/controls";
import LeadStatusBadge from "./_components/LeadStatusBadge";
import LeadFilters from "./_components/LeadFilters";

const PER_PAGE = 20;

export default async function LeadsAdminPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const q = (sp.q ?? "").slice(0, 200);
  const status = LEAD_STATUSES.includes(sp.status as never)
    ? (sp.status as (typeof LEAD_STATUSES)[number])
    : undefined;
  const service = sp.service || undefined;
  const source = (LEAD_SOURCES as readonly string[]).includes(sp.source ?? "")
    ? sp.source
    : undefined;
  const sortParam = sp.sort;
  const sort = sortParam === "oldest" || sortParam === "followup" ? sortParam : "newest";
  const page = Math.max(1, Number(sp.page) || 1);
  const skip = (page - 1) * PER_PAGE;

  let items: Awaited<ReturnType<typeof listLeads>> = [];
  let total = 0;
  let services: string[] = [];
  let dbError = !isDbConfigured();
  if (!dbError) {
    try {
      [items, total, services] = await Promise.all([
        listLeads({ q, status, service, source, sort, skip, take: PER_PAGE }),
        countLeads({ q, status, service, source }),
        listLeadServices(),
      ]);
    } catch {
      dbError = true;
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="CRM"
        title="Leads"
        description="Every enquiry from the website lands here. Only administrators and editors can see contact details."
      />

      {dbError && (
        <Card className="mb-6">
          <p className="text-sm font-semibold" style={{ color: "#991B1B" }}>Database not connected.</p>
          <p className="text-sm mt-1" style={{ color: "#656565" }}>
            Set DATABASE_URL and run <code>npm run db:migrate</code>.
          </p>
        </Card>
      )}

      <div className="flex flex-col gap-3 mb-6">
        <SearchInput placeholder="Search name, email, phone, company..." />
        <LeadFilters status={status} service={service} source={source} sort={sort} services={services} />
      </div>

      {items.length === 0 ? (
        <EmptyState
          title={q || status || service || source ? "No leads match." : "No leads yet."}
          hint="New website enquiries will appear here automatically."
        />
      ) : (
        <Card className="!p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[820px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-widest" style={{ color: "#888888" }}>
                  <th className="px-5 py-3 font-semibold">Contact</th>
                  <th className="px-5 py-3 font-semibold">Service</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold">Source</th>
                  <th className="px-5 py-3 font-semibold">Received</th>
                  <th className="px-5 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((lead) => (
                  <tr key={lead.id} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <td className="px-5 py-3.5">
                      <Link href={`/admin/leads/${lead.id}`} className="font-semibold hover:opacity-70" style={{ color: "#1B1B1B" }}>
                        {lead.name}
                      </Link>
                      <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
                        {[lead.email, lead.phone].filter(Boolean).join(" · ") || "—"}
                      </p>
                    </td>
                    <td className="px-5 py-3.5" style={{ color: "#656565" }}>{lead.serviceInterest ?? "—"}</td>
                    <td className="px-5 py-3.5"><LeadStatusBadge status={lead.status} /></td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: "#656565" }}>{lead.source ?? "—"}</td>
                    <td className="px-5 py-3.5 text-xs" style={{ color: "#656565" }}>
                      {new Date(lead.createdAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="flex justify-end gap-2">
                        <Link href={`/admin/leads/${lead.id}`} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border" style={{ borderColor: "rgba(0,0,0,0.08)", color: "#2563EB" }}>
                          Open
                        </Link>
                        <DeleteButton endpoint={`/api/admin/leads/${lead.id}`} label={`lead from ${lead.name}`} />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Pagination base="/admin/leads" page={page} perPage={PER_PAGE} total={total} />
    </div>
  );
}


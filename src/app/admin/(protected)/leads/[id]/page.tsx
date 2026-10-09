import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import { getLeadById } from "@/lib/crm/leads";
import { PageHeader, Card } from "../../_components/ui";
import { DeleteButton } from "../../_components/controls";
import LeadStatusBadge from "../_components/LeadStatusBadge";
import {
  StatusChanger,
  NoteForm,
  FollowUpForm,
  AssignSelect,
  EditDetailsForm,
} from "../_components/LeadActions";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 py-2.5 border-b last:border-0" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
      <p className="text-[11px] uppercase tracking-widest font-semibold sm:w-40 shrink-0" style={{ color: "#888888" }}>
        {label}
      </p>
      <p className="text-sm break-words" style={{ color: "#1B1B1B" }}>{value}</p>
    </div>
  );
}

const ACTIVITY_LABEL: Record<string, string> = {
  CREATED: "Enquiry received",
  STATUS_CHANGE: "Status changed",
  NOTE: "Note",
  FOLLOW_UP: "Follow-up",
  ASSIGNMENT: "Assignment",
};

export default async function LeadDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.role === "ADMIN";
  if (!isDbConfigured()) notFound();

  const [lead, users] = await Promise.all([
    getLeadById(id).catch(() => null),
    prisma.user
      .findMany({
        where: { isActive: true },
        select: { id: true, name: true, email: true },
        orderBy: { name: "asc" },
      })
      .catch(() => []),
  ]);
  if (!lead) notFound();

  return (
    <div>
      <Link
        href="/admin/leads"
        className="inline-flex items-center gap-2 text-xs font-semibold mb-6 hover:opacity-70"
        style={{ color: "#2563EB" }}
      >
        <ArrowLeft className="w-3.5 h-3.5" /> All leads
      </Link>

      <PageHeader
        eyebrow="CRM"
        title={lead.name}
        description={`Received ${new Date(lead.createdAt).toLocaleString("en-IN")} · via ${lead.source ?? "unknown source"}`}
        action={
          <span className="flex items-center gap-3">
            <LeadStatusBadge status={lead.status} />
            {isAdmin && (
              <DeleteButton endpoint={`/api/admin/leads/${lead.id}`} label={`lead from ${lead.name}`} />
            )}
          </span>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
              Contact & project
            </h2>
            <Row label="Email" value={lead.email ?? "—"} />
            <Row label="Phone" value={lead.phone ?? "—"} />
            <Row label="Prefers" value={lead.preferredContactMethod.replace(/_/g, " ").toLowerCase()} />
            <Row label="Company" value={lead.companyName ?? "—"} />
            <Row label="Service" value={lead.serviceInterest ?? "—"} />
            <Row label="Budget" value={lead.budgetRange ?? "—"} />
            <Row label="Message" value={lead.projectDescription || "—"} />
            <div className="pt-3">
              <EditDetailsForm
                id={lead.id}
                lead={{
                  name: lead.name,
                  email: lead.email,
                  phone: lead.phone,
                  companyName: lead.companyName,
                  serviceInterest: lead.serviceInterest,
                  budgetRange: lead.budgetRange,
                  projectDescription: lead.projectDescription,
                }}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
              Attribution
            </h2>
            <Row label="Landing page" value={lead.landingPage ?? "—"} />
            <Row label="Referrer" value={lead.referrer ?? "—"} />
            <Row
              label="UTM"
              value={[lead.utmSource, lead.utmMedium, lead.utmCampaign].filter(Boolean).join(" / ") || "—"}
            />
          </Card>

          <Card>
            <h2 className="text-lg font-semibold mb-5" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
              Activity timeline
            </h2>
            {lead.activities.length === 0 ? (
              <p className="text-sm" style={{ color: "#888888" }}>No activity yet.</p>
            ) : (
              <ol className="relative space-y-5">
                {lead.activities.map((a) => (
                  <li key={a.id} className="relative pl-7">
                    <span className="absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full border-2" style={{ borderColor: "#6E8E59", backgroundColor: "#FFFFFF" }} />
                    <p className="text-sm font-semibold" style={{ color: "#1B1B1B" }}>
                      {ACTIVITY_LABEL[a.type] ?? a.type}
                      {a.type === "STATUS_CHANGE" && a.fromStatus && a.toStatus && (
                        <span style={{ color: "#656565" }}>
                          {" "}{a.fromStatus.replace(/_/g, " ")} → {a.toStatus.replace(/_/g, " ")}
                        </span>
                      )}
                    </p>
                    {a.note && (
                      <p className="text-sm mt-1 whitespace-pre-line" style={{ color: "#656565" }}>{a.note}</p>
                    )}
                    {a.followUpAt && (
                      <p className="text-xs mt-1" style={{ color: "#6E8E59" }}>
                        Follow up: {new Date(a.followUpAt).toLocaleString("en-IN")}
                      </p>
                    )}
                    <p className="text-[11px] mt-1" style={{ color: "#888888" }}>
                      {new Date(a.createdAt).toLocaleString("en-IN")}
                      {a.actor ? ` · ${a.actor.name ?? a.actor.email}` : " · system"}
                    </p>
                  </li>
                ))}
              </ol>
            )}
            <div className="pt-5 mt-2 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
              <h3 className="text-sm font-semibold mb-3" style={{ color: "#1B1B1B" }}>Add internal note</h3>
              <NoteForm id={lead.id} />
            </div>
          </Card>
        </div>

        <div className="lg:col-span-2 space-y-6 lg:sticky lg:top-6">
          <Card className="space-y-4">
            <h2 className="text-base font-semibold" style={{ color: "#1B1B1B" }}>Status</h2>
            <StatusChanger id={lead.id} current={lead.status} canChange={isAdmin} />
            {!isAdmin && (
              <p className="text-xs" style={{ color: "#888888" }}>
                Only administrators can change status or assignment.
              </p>
            )}
          </Card>
          <Card className="space-y-4">
            <h2 className="text-base font-semibold" style={{ color: "#1B1B1B" }}>Follow-up</h2>
            {lead.followUpAt && (
              <p className="text-sm font-medium" style={{ color: "#6E8E59" }}>
                Due: {new Date(lead.followUpAt).toLocaleString("en-IN")}
              </p>
            )}
            <FollowUpForm id={lead.id} current={lead.followUpAt ? new Date(lead.followUpAt).toISOString() : null} />
          </Card>
          <Card className="space-y-4">
            <h2 className="text-base font-semibold" style={{ color: "#1B1B1B" }}>Assigned to</h2>
            <AssignSelect
              id={lead.id}
              currentId={lead.assignedToId}
              users={users}
              canAssign={isAdmin}
            />
            {!isAdmin && (
              <p className="text-sm" style={{ color: "#656565" }}>
                {lead.assignedTo ? (lead.assignedTo.name ?? lead.assignedTo.email) : "Unassigned"}
              </p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

import { getServerSession } from "next-auth";
import Link from "next/link";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import { getLeadMetrics } from "@/lib/crm/leads";
import LeadStatusBadge from "./leads/_components/LeadStatusBadge";

/**
 * Admin overview — metrics derived ONLY from real database data.
 */
export default async function AdminOverviewPage() {
  const session = await getServerSession(authOptions);

  const [totalUsers, activeAdmins, admins] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { role: "ADMIN", isActive: true } }),
    prisma.user.findMany({
      orderBy: { createdAt: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    }),
  ]);

  const leads = isDbConfigured()
    ? await getLeadMetrics().catch(() => null)
    : null;

  const cards = [
    { label: "Total Users", value: String(totalUsers) },
    { label: "Active Admins", value: String(activeAdmins) },
    { label: "Session Expires", value: "8h" },
  ];

  const leadCards = leads
    ? [
        { label: "Total Leads", value: String(leads.total) },
        { label: "New Leads", value: String(leads.counts.NEW) },
        { label: "Qualified", value: String(leads.counts.QUALIFIED) },
        { label: "Proposals Sent", value: String(leads.counts.PROPOSAL_SENT) },
        { label: "Won", value: String(leads.counts.WON) },
      ]
    : [];

  const setupChecklist = [
    { label: "MySQL connected (migration applied)", done: true },
    { label: "Administrator account created via setup script", done: totalUsers > 0 },
    {
      label: "NEXTAUTH_SECRET configured in this environment",
      done: Boolean(process.env.NEXTAUTH_SECRET),
    },
    { label: "Signed in as administrator", done: Boolean(session?.user) },
  ];

  return (
    <div>
      <p
        className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
        style={{ color: "#2563EB" }}
      >
        Overview
      </p>
      <h1
        className="text-3xl md:text-4xl font-semibold tracking-tight mb-8"
        style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
      >
        Dashboard
      </h1>

      {/* Metric cards (real data) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {cards.map((card) => (
          <div
            key={card.label}
            className="p-6 rounded-2xl border"
            style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-2"
              style={{ color: "#888888" }}
            >
              {card.label}
            </p>
            <p
              className="text-3xl font-semibold"
              style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* CRM snapshot (real lead data) */}
      <div
        className="p-6 md:p-8 rounded-2xl border mb-10"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
          >
            Leads Snapshot
          </h2>
          <Link
            href="/admin/leads"
            className="inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-70"
            style={{ color: "#2563EB" }}
          >
            Open CRM <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        {!leads ? (
          <p className="text-sm" style={{ color: "#888888" }}>
            Lead data unavailable — connect the database to see CRM metrics.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {leadCards.map((card) => (
                <div
                  key={card.label}
                  className="p-4 rounded-xl"
                  style={{ backgroundColor: "#FAF8F5" }}
                >
                  <p className="text-[11px] uppercase tracking-widest font-semibold mb-1" style={{ color: "#888888" }}>
                    {card.label}
                  </p>
                  <p className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: "#1B1B1B" }}>
                  Follow-ups due ({leads.followUpsDue.length})
                </h3>
                {leads.followUpsDue.length === 0 ? (
                  <p className="text-xs" style={{ color: "#888888" }}>Nothing overdue.</p>
                ) : (
                  <div className="space-y-2">
                    {leads.followUpsDue.slice(0, 5).map((l) => (
                      <Link
                        key={l.id}
                        href={`/admin/leads/${l.id}`}
                        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg hover:opacity-80"
                        style={{ backgroundColor: "#FEF2F2" }}
                      >
                        <span className="text-xs font-semibold truncate" style={{ color: "#1B1B1B" }}>
                          {l.name}
                        </span>
                        <span className="text-[11px] shrink-0" style={{ color: "#991B1B" }}>
                          {l.followUpAt ? new Date(l.followUpAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : "—"}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3" style={{ color: "#1B1B1B" }}>
                  Recent enquiries
                </h3>
                {leads.recent.length === 0 ? (
                  <p className="text-xs" style={{ color: "#888888" }}>No enquiries yet.</p>
                ) : (
                  <div className="space-y-2">
                    {leads.recent.map((l) => (
                      <Link
                        key={l.id}
                        href={`/admin/leads/${l.id}`}
                        className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg hover:opacity-80"
                        style={{ backgroundColor: "#FAF8F5" }}
                      >
                        <span className="text-xs font-semibold truncate" style={{ color: "#1B1B1B" }}>
                          {l.name}
                          <span className="font-normal" style={{ color: "#888888" }}>
                            {" "}· {l.serviceInterest ?? "general"}
                          </span>
                        </span>
                        <LeadStatusBadge status={l.status} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Administrators */}
      <div
        className="p-6 md:p-8 rounded-2xl border mb-10"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
      >
        <h2
          className="text-xl font-semibold mb-1"
          style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
        >
          Administrators
        </h2>
        <p className="text-sm mb-6" style={{ color: "#656565" }}>
          Accounts with dashboard access. New admins can only be created via
          the secure setup script — there is no public registration.
        </p>
        <div className="space-y-3">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl"
              style={{ backgroundColor: "#FAF8F5" }}
            >
              <div className="min-w-0">
                <p
                  className="text-sm font-semibold truncate"
                  style={{ color: "#1B1B1B" }}
                >
                  {admin.name ?? admin.email}
                </p>
                <p className="text-xs truncate" style={{ color: "#888888" }}>
                  {admin.email} · {admin.role} · since{" "}
                  {admin.createdAt.toLocaleDateString("en-IN")}
                </p>
              </div>
              <span
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: admin.isActive ? "#F4F7F1" : "#FEF2F2",
                  color: admin.isActive ? "#6E8E59" : "#991B1B",
                }}
              >
                {admin.isActive ? "Active" : "Disabled"}
              </span>
            </div>
          ))}
          {admins.length === 0 && (
            <p className="text-sm" style={{ color: "#888888" }}>
              No administrator accounts found.
            </p>
          )}
        </div>
      </div>

      {/* Setup checklist */}
      <div
        className="p-6 md:p-8 rounded-2xl border"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)" }}
      >
        <h2
          className="text-xl font-semibold mb-6"
          style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}
        >
          Phase 1 Setup Status
        </h2>
        <div className="space-y-4">
          {setupChecklist.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              {item.done ? (
                <CheckCircle2
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#6E8E59" }}
                />
              ) : (
                <Circle
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: "#888888" }}
                />
              )}
              <span className="text-sm" style={{ color: "#656565" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

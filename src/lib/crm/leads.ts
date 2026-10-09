import { prisma } from "@/lib/prisma";
import type { LeadStatus } from "@prisma/client";
import type { LeadSubmitInput } from "@/lib/schemas/leads";
import { LEAD_STATUSES as STATUS_LIST } from "@/lib/schemas/leads";

/**
 * CRM data access — server-side only (imports prisma directly).
 * Reads are used by admin pages; writes by admin API handlers and the
 * public submission endpoint.
 */

/** Re-exported for server code (client components import from schemas). */
export const LEAD_STATUSES: LeadStatus[] = [...STATUS_LIST];

/** Dedup window: same contact + same service within 24h reuses the lead. */
const DEDUP_WINDOW_MS = 24 * 60 * 60 * 1000;

export type LeadListFilters = {
  q?: string;
  status?: LeadStatus;
  service?: string;
  source?: string;
  sort?: "newest" | "oldest" | "followup";
  skip: number;
  take: number;
};

function searchClause(q: string) {
  if (!q) return {};
  return {
    OR: [
      { name: { contains: q } },
      { email: { contains: q } },
      { phone: { contains: q } },
      { companyName: { contains: q } },
    ],
  };
}

const leadCardSelect = {
  id: true,
  name: true,
  email: true,
  phone: true,
  companyName: true,
  serviceInterest: true,
  status: true,
  source: true,
  followUpAt: true,
  createdAt: true,
  assignedTo: { select: { id: true, name: true, email: true } },
} as const;

export async function countLeads(filters: Omit<LeadListFilters, "skip" | "take" | "sort">) {
  return prisma.lead.count({
    where: {
      ...(filters.status ? { status: filters.status } : {}),
      ...(filters.service ? { serviceInterest: filters.service } : {}),
      ...(filters.source ? { source: filters.source } : {}),
      ...searchClause(filters.q ?? ""),
    },
  });
}

export async function listLeads(filters: LeadListFilters) {
  const orderBy =
    filters.sort === "oldest"
      ? { createdAt: "asc" as const }
      : filters.sort === "followup"
        ? [{ followUpAt: "asc" as const }, { createdAt: "desc" as const }]
        : { createdAt: "desc" as const };
  return prisma.lead.findMany({
    where: {
      ...(filters.status ? { status: filters.status } : {}),
      ...(filters.service ? { serviceInterest: filters.service } : {}),
      ...(filters.source ? { source: filters.source } : {}),
      ...searchClause(filters.q ?? ""),
    },
    select: leadCardSelect,
    orderBy,
    skip: filters.skip,
    take: filters.take,
  });
}

export async function getLeadById(id: string) {
  return prisma.lead.findUnique({
    where: { id },
    include: {
      assignedTo: { select: { id: true, name: true, email: true } },
      activities: {
        include: { actor: { select: { id: true, name: true, email: true } } },
        orderBy: { createdAt: "asc" },
      },
    },
  });
}

export type NewLeadResult =
  | { deduped: false; lead: { id: string } }
  | { deduped: true; lead: { id: string } };

/**
 * Create a lead + its CREATED activity atomically.
 * Returns the existing lead (deduped) when the same contact submitted for
 * the same service within the last 24h — without discarding the signal:
 * a lightweight meta activity is still recorded on the original lead.
 */
export async function createLead(input: LeadSubmitInput): Promise<NewLeadResult> {
  const since = new Date(Date.now() - DEDUP_WINDOW_MS);
  const or = [
    ...(input.email ? [{ email: input.email }] : []),
    ...(input.phone ? [{ phone: input.phone }] : []),
  ];

  if (or.length > 0) {
    const recent = await prisma.lead.findFirst({
      where: {
        createdAt: { gte: since },
        ...(input.serviceInterest ? { serviceInterest: input.serviceInterest } : {}),
        OR: or,
      },
      orderBy: { createdAt: "desc" },
    });

    if (recent) {
      await prisma.leadActivity.create({
        data: {
          leadId: recent.id,
          type: "NOTE",
          note: "Repeat enquiry received within 24h (deduplicated).",
          meta: {
            source: input.source ?? null,
            landingPage: input.landingPage ?? null,
          },
        },
      });
      return { deduped: true, lead: { id: recent.id } };
    }
  }

  const lead = await prisma.$transaction(async (tx) => {
    const created = await tx.lead.create({
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        companyName: input.companyName,
        serviceInterest: input.serviceInterest,
        projectDescription: input.projectDescription,
        budgetRange: input.budgetRange,
        preferredContactMethod: input.preferredContactMethod ?? "EMAIL",
        source: input.source ?? "other",
        landingPage: input.landingPage,
        referrer: input.referrer,
        utmSource: input.utmSource,
        utmMedium: input.utmMedium,
        utmCampaign: input.utmCampaign,
      },
      select: { id: true },
    });
    await tx.leadActivity.create({
      data: {
        leadId: created.id,
        type: "CREATED",
        toStatus: "NEW",
        meta: {
          source: input.source ?? null,
          landingPage: input.landingPage ?? null,
        },
      },
    });
    return created;
  });

  return { deduped: false, lead };
}

// ------------------------- Admin mutations -------------------------

export async function changeLeadStatus(
  id: string,
  to: LeadStatus,
  actorId: string
) {
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) return null;
  if (lead.status === to) return lead;
  const [updated] = await prisma.$transaction([
    prisma.lead.update({ where: { id }, data: { status: to } }),
    prisma.leadActivity.create({
      data: {
        leadId: id,
        type: "STATUS_CHANGE",
        fromStatus: lead.status,
        toStatus: to,
        actorId,
      },
    }),
  ]);
  return updated;
}

export async function addLeadNote(id: string, note: string, actorId: string) {
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) return null;
  await prisma.leadActivity.create({
    data: { leadId: id, type: "NOTE", note, actorId },
  });
  return lead;
}

export async function setLeadFollowUp(
  id: string,
  followUpAt: Date | null,
  actorId: string
) {
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) return null;
  const [updated] = await prisma.$transaction([
    prisma.lead.update({ where: { id }, data: { followUpAt } }),
    prisma.leadActivity.create({
      data: {
        leadId: id,
        type: "FOLLOW_UP",
        followUpAt,
        note: followUpAt ? undefined : "Follow-up cleared.",
        actorId,
      },
    }),
  ]);
  return updated;
}

export async function assignLead(
  id: string,
  assignedToId: string | null,
  actorId: string
) {
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) return null;
  if (assignedToId) {
    const user = await prisma.user.findUnique({ where: { id: assignedToId } });
    if (!user || !user.isActive) return "invalid-assignee" as const;
  }
  const [updated] = await prisma.$transaction([
    prisma.lead.update({ where: { id }, data: { assignedToId } }),
    prisma.leadActivity.create({
      data: {
        leadId: id,
        type: "ASSIGNMENT",
        note: assignedToId ? undefined : "Lead unassigned.",
        actorId,
        meta: assignedToId ? { assignedToId } : undefined,
      },
    }),
  ]);
  return updated;
}

export async function updateLeadDetails(
  id: string,
  data: Partial<{
    name: string;
    email?: string;
    phone?: string;
    companyName?: string;
    serviceInterest?: string;
    projectDescription?: string;
    budgetRange?: string;
    preferredContactMethod: "EMAIL" | "PHONE" | "WHATSAPP";
    source: string;
  }>
) {
  try {
    return await prisma.lead.update({ where: { id }, data });
  } catch {
    return null;
  }
}

export async function deleteLead(id: string) {
  try {
    await prisma.lead.delete({ where: { id } });
    return true;
  } catch {
    return false;
  }
}

// ------------------------- Overview metrics -------------------------

export async function getLeadMetrics() {
  const [total, byStatus, followUpsDue, recent] = await Promise.all([
    prisma.lead.count(),
    prisma.lead.groupBy({ by: ["status"], _count: { status: true } }),
    prisma.lead.findMany({
      where: {
        followUpAt: { lte: new Date() },
        status: { notIn: ["WON", "LOST"] },
      },
      select: { id: true, name: true, followUpAt: true, status: true },
      orderBy: { followUpAt: "asc" },
      take: 10,
    }),
    prisma.lead.findMany({
      select: {
        id: true,
        name: true,
        serviceInterest: true,
        status: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
      take: 5,
    }),
  ]);
  const counts: Record<string, number> = { NEW: 0, CONTACTED: 0, QUALIFIED: 0, PROPOSAL_SENT: 0, WON: 0, LOST: 0 };
  for (const row of byStatus) counts[row.status] = row._count.status;
  return { total, counts, followUpsDue, recent };
}

/** Distinct service interests for admin filter dropdowns. */
export async function listLeadServices(): Promise<string[]> {
  const rows = await prisma.lead.findMany({
    select: { serviceInterest: true },
    distinct: ["serviceInterest"],
    orderBy: { serviceInterest: "asc" },
    take: 100,
  });
  return rows
    .map((r) => r.serviceInterest)
    .filter((s): s is string => Boolean(s));
}

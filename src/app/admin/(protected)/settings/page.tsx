import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { isDbConfigured } from "@/lib/cms/db";
import { DEFAULT_SETTINGS } from "@/lib/cms/settings";
import { HOMEPAGE_SECTION_KEYS } from "@/lib/schemas/cms";
import { PageHeader, Card } from "../_components/ui";
import SettingsForm from "./_components/SettingsForm";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.role === "ADMIN";

  let settings: Record<string, string> = { ...DEFAULT_SETTINGS };
  let sections = HOMEPAGE_SECTION_KEYS.map((key, i) => ({
    key,
    isVisible: true,
    sortOrder: i,
  }));
  let serviceOptions: { slug: string; title: string }[] = [];
  let projectOptions: { slug: string; title: string }[] = [];
  let testimonialOptions: { id: string; label: string }[] = [];
  let faqOptions: { slug: string; question: string }[] = [];

  if (isDbConfigured()) {
    try {
      const [rows, sectionRows, services, projects, testimonials, faqs] =
        await Promise.all([
          prisma.siteSetting.findMany(),
          prisma.homepageSection.findMany(),
          prisma.service.findMany({
            where: { status: "PUBLISHED" },
            select: { slug: true, title: true },
            orderBy: { title: "asc" },
          }),
          prisma.project.findMany({
            where: { status: "PUBLISHED" },
            select: { slug: true, title: true },
            orderBy: { title: "asc" },
          }),
          prisma.testimonial.findMany({
            where: { status: "PUBLISHED" },
            select: { id: true, clientName: true },
            orderBy: { clientName: "asc" },
          }),
          prisma.faq.findMany({
            where: { status: "PUBLISHED" },
            select: { slug: true, question: true },
            orderBy: { sortOrder: "asc" },
          }),
        ]);
      for (const row of rows) settings[row.key] = row.value;
      const byKey = new Map(sectionRows.map((r) => [r.key, r]));
      sections = sections.map((s) => {
        const row = byKey.get(s.key);
        return row
          ? { key: s.key, isVisible: row.isVisible, sortOrder: row.sortOrder }
          : s;
      });
      serviceOptions = services;
      projectOptions = projects;
      testimonialOptions = testimonials.map((t) => ({
        id: t.id,
        label: t.clientName,
      }));
      faqOptions = faqs;
    } catch {
      /* static defaults stand in */
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="CMS"
        title="Site Settings"
        description="Business details, hero content, featured selections, and homepage section visibility. Changes apply to the public site on save."
        action={
          <Link
            href="/admin/settings/redirects"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-2xl text-sm font-semibold border transition-colors duration-200"
            style={{ borderColor: "rgba(0,0,0,0.1)", color: "#2563EB" }}
          >
            Manage redirects →
          </Link>
        }
      />
      {!isAdmin && (
        <Card className="mb-6">
          <p className="text-sm" style={{ color: "#656565" }}>
            You are signed in as an editor. Browsing is allowed, but only
            administrators can save settings.
          </p>
        </Card>
      )}
      <SettingsForm
        initial={settings}
        sections={sections}
        serviceOptions={serviceOptions}
        projectOptions={projectOptions}
        testimonialOptions={testimonialOptions}
        faqOptions={faqOptions}
        canSave={isAdmin}
      />
    </div>
  );
}

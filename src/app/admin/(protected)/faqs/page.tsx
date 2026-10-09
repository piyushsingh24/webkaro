import Link from "next/link";
import { Plus } from "lucide-react";
import { faqStore } from "@/lib/cms/stores";
import { isDbConfigured } from "@/lib/cms/db";
import {
  PageHeader,
  StatusBadge,
  EmptyState,
  Card,
} from "../_components/ui";
import {
  SearchInput,
  StatusFilter,
  DeleteButton,
  Pagination,
} from "../_components/controls";

const PER_PAGE = 20;

export default async function FaqsAdminPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | undefined>>;
}) {
  const sp = await searchParams;
  const q = (sp.q ?? "").slice(0, 200);
  const status = sp.status || undefined;
  const page = Math.max(1, Number(sp.page) || 1);
  const skip = (page - 1) * PER_PAGE;

  let items: Awaited<ReturnType<typeof faqStore.list>> = [];
  let total = 0;
  let dbError = !isDbConfigured();
  if (!dbError) {
    try {
      [items, total] = await Promise.all([
        faqStore.list({ q, status, skip, take: PER_PAGE }),
        faqStore.count(q, status),
      ]);
    } catch {
      dbError = true;
    }
  }

  return (
    <div>
      <PageHeader
        eyebrow="CMS"
        title="FAQs"
        description="Questions appear on the homepage preview, FAQ index, and detail pages once PUBLISHED."
        action={
          <Link
            href="/admin/faqs/new"
            className="inline-flex items-center gap-2 px-5 h-11 rounded-2xl text-sm font-semibold text-white transition-all duration-300 hover:translate-y-[-1px]"
            style={{ backgroundColor: "#2563EB" }}
          >
            <Plus className="w-4 h-4" /> New FAQ
          </Link>
        }
      />

      {dbError && (
        <Card className="mb-6">
          <p className="text-sm font-semibold" style={{ color: "#991B1B" }}>Database not connected.</p>
          <p className="text-sm mt-1" style={{ color: "#656565" }}>
            Set DATABASE_URL and run <code>npm run db:migrate</code>.
          </p>
        </Card>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <SearchInput placeholder="Search FAQs..." />
        <StatusFilter base="/admin/faqs" />
      </div>

      {items.length === 0 ? (
        <EmptyState title={q || status ? "No FAQs match." : "No FAQs yet."} />
      ) : (
        <Card className="!p-0 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-widest" style={{ color: "#888888" }}>
                  <th className="px-5 py-3 font-semibold">Question</th>
                  <th className="px-5 py-3 font-semibold">Service</th>
                  <th className="px-5 py-3 font-semibold">Status</th>
                  <th className="px-5 py-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((f) => (
                  <tr key={f.id} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                    <td className="px-5 py-3.5">
                      <Link href={`/admin/faqs/${f.id}`} className="font-semibold hover:opacity-70" style={{ color: "#1B1B1B" }}>
                        {f.question}
                      </Link>
                      <p className="text-xs mt-0.5" style={{ color: "#888888" }}>
                        /faq/{f.slug}
                      </p>
                    </td>
                    <td className="px-5 py-3.5" style={{ color: "#656565" }}>{f.service?.title ?? "—"}</td>
                    <td className="px-5 py-3.5"><StatusBadge status={f.status} /></td>
                    <td className="px-5 py-3.5">
                      <span className="flex justify-end gap-2">
                        <Link href={`/admin/faqs/${f.id}`} className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border" style={{ borderColor: "rgba(0,0,0,0.08)", color: "#2563EB" }}>
                          Edit
                        </Link>
                        <DeleteButton endpoint={`/api/admin/faqs/${f.id}`} label="this FAQ" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      <Pagination base="/admin/faqs" page={page} perPage={PER_PAGE} total={total} />
    </div>
  );
}


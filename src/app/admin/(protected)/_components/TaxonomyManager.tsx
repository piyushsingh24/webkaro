"use client";

import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Plus } from "lucide-react";
import { slugify } from "@/lib/cms/db";
import { PageHeader, Card, Field, TextInput, Textarea } from "./ui";
import { DeleteButton } from "./controls";
import ImageField from "./ImageField";

export type TaxField = {
  key: string;
  label: string;
  placeholder?: string;
  textarea?: boolean;
  number?: boolean;
  /** Render the Cloudinary image field instead of a text input. */
  image?: boolean;
};

/**
 * Self-contained manager for simple taxonomy models
 * (blog categories/tags, authors, service categories).
 */
export default function TaxonomyManager({
  title,
  eyebrow,
  description,
  endpoint,
  fields,
  columns,
  backHref,
}: {
  title: string;
  eyebrow: string;
  description: string;
  endpoint: string;
  fields: TaxField[];
  columns: { key: string; label: string }[];
  backHref: string;
}) {
  const [items, setItems] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [failed, setFailed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<Record<string, string>>({});

  const load = useCallback(async () => {
    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch(`${endpoint}?perPage=100`);
      const json = (await res.json()) as { items?: Record<string, unknown>[] };
      if (!res.ok) throw new Error();
      setItems(json.items ?? []);
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    void load();
  }, [load]);

  const set = (key: string, value: string) =>
    setForm((f) => {
      const next = { ...f, [key]: value };
      // Auto-suggest slug from name while slug is untouched.
      if (key === "name" && !f.slug) next.slug = slugify(value);
      return next;
    });

  const create = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload: Record<string, unknown> = {};
      for (const f of fields) {
        const v = (form[f.key] ?? "").trim();
        payload[f.key] = f.number ? Number(v) || 0 : v || undefined;
      }
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        toast.error(json.error ?? "Create failed.");
        setSaving(false);
        return;
      }
      toast.success("Created.");
      setForm({});
      await load();
    } catch {
      toast.error("Create failed. Check your connection.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div>
      <PageHeader eyebrow={eyebrow} title={title} description={description} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <Card>
          <h2 className="text-lg font-semibold mb-5" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
            New
          </h2>
          <form onSubmit={create} className="space-y-4">
            {fields.map((f) => (
              <Field key={f.key} label={f.label}>
                {f.image ? (
                  <ImageField
                    value={form[f.key] ?? ""}
                    onChange={(v) => set(f.key, v)}
                  />
                ) : f.textarea ? (
                  <Textarea
                    rows={2}
                    value={form[f.key] ?? ""}
                    onChange={(e) => set(f.key, e.target.value)}
                    placeholder={f.placeholder}
                  />
                ) : (
                  <TextInput
                    type={f.number ? "number" : "text"}
                    value={form[f.key] ?? ""}
                    onChange={(e) => set(f.key, e.target.value)}
                    placeholder={f.placeholder}
                  />
                )}
              </Field>
            ))}
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 px-5 h-11 rounded-2xl text-sm font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: "#2563EB" }}
            >
              <Plus className="w-4 h-4" /> {saving ? "Creating..." : "Create"}
            </button>
          </form>
        </Card>

        <Card className="lg:col-span-2 !p-0 overflow-hidden">
          {loading ? (
            <p className="p-6 text-sm" style={{ color: "#888888" }}>Loading...</p>
          ) : failed ? (
            <p className="p-6 text-sm font-medium" style={{ color: "#991B1B" }}>
              Could not load. Is the database connected?
            </p>
          ) : items.length === 0 ? (
            <p className="p-6 text-sm" style={{ color: "#888888" }}>Nothing here yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[480px]">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-widest" style={{ color: "#888888" }}>
                    {columns.map((c) => (
                      <th key={c.key} className="px-5 py-3 font-semibold">{c.label}</th>
                    ))}
                    <th className="px-5 py-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={String(item.id)} className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                      {columns.map((c) => (
                        <td key={c.key} className="px-5 py-3" style={{ color: "#1B1B1B" }}>
                          {String(item[c.key] ?? "—")}
                        </td>
                      ))}
                      <td className="px-5 py-3 text-right">
                        <DeleteButton
                          endpoint={`${endpoint}/${String(item.id)}`}
                          label="this entry"
                          onDeleted={() => void load()}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="px-5 py-3 border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
            <a href={backHref} className="text-xs font-semibold" style={{ color: "#2563EB" }}>
              ← Back
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}

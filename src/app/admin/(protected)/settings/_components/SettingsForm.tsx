"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Card, Field, TextInput, Textarea } from "../../_components/ui";
import { asSlugList } from "@/lib/cms/settings";

type Option = { value: string; label: string };

const GROUPS: { title: string; keys: { key: string; label: string; textarea?: boolean }[] }[] = [
  {
    title: "Hero",
    keys: [
      { key: "hero_headline", label: "Headline (use blank lines for line breaks)", textarea: true },
      { key: "hero_description", label: "Description", textarea: true },
      { key: "hero_primary_cta_text", label: "Primary button text" },
      { key: "hero_primary_cta_url", label: "Primary button URL" },
      { key: "hero_secondary_cta_text", label: "Secondary button text" },
      { key: "hero_secondary_cta_url", label: "Secondary button URL" },
    ],
  },
  {
    title: "Contact",
    keys: [
      { key: "contact_email", label: "Contact email" },
      { key: "contact_phone", label: "Business phone" },
      { key: "whatsapp_url", label: "WhatsApp URL" },
    ],
  },
  {
    title: "Social links",
    keys: [
      { key: "social_twitter", label: "Twitter / X" },
      { key: "social_linkedin", label: "LinkedIn" },
      { key: "social_instagram", label: "Instagram" },
      { key: "social_facebook", label: "Facebook" },
    ],
  },
  {
    title: "Footer",
    keys: [{ key: "footer_about", label: "About blurb", textarea: true }],
  },
];

const SECTION_LABELS: Record<string, string> = {
  hero: "Hero",
  services: "Services",
  projects: "Projects",
  process: "Process",
  why: "Why Webkaro",
  statistics: "Statistics",
  founders: "Founders",
  testimonials: "Testimonials",
  tech: "Technology stack",
  faq: "FAQ",
  cta: "Final CTA",
};

function MultiSelect({
  label,
  hint,
  options,
  values,
  onChange,
  disabled,
}: {
  label: string;
  hint: string;
  options: Option[];
  values: string[];
  onChange: (v: string[]) => void;
  disabled: boolean;
}) {
  if (options.length === 0) {
    return (
      <Field label={label} hint="No published entries available yet.">
        <p className="text-xs" style={{ color: "#888888" }}>—</p>
      </Field>
    );
  }
  return (
    <Field label={label} hint={hint}>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const on = values.includes(o.value);
          return (
            <button
              key={o.value}
              type="button"
              disabled={disabled}
              onClick={() =>
                onChange(
                  on ? values.filter((v) => v !== o.value) : [...values, o.value]
                )
              }
              aria-pressed={on}
              className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-200 disabled:opacity-60"
              style={
                on
                  ? { backgroundColor: "#1B1B1B", color: "#FFFFFF", borderColor: "#1B1B1B" }
                  : { backgroundColor: "#FFFFFF", color: "#656565", borderColor: "rgba(0,0,0,0.1)" }
              }
            >
              {o.label}
            </button>
          );
        })}
      </div>
    </Field>
  );
}

export default function SettingsForm({
  initial,
  sections,
  serviceOptions,
  projectOptions,
  testimonialOptions,
  faqOptions,
  canSave,
}: {
  initial: Record<string, string>;
  sections: { key: string; isVisible: boolean; sortOrder: number }[];
  serviceOptions: { slug: string; title: string }[];
  projectOptions: { slug: string; title: string }[];
  testimonialOptions: { id: string; label: string }[];
  faqOptions: { slug: string; question: string }[];
  canSave: boolean;
}) {
  const router = useRouter();
  const [values, setValues] = useState(initial);
  const [sectionState, setSectionState] = useState(sections);
  const [saving, setSaving] = useState(false);

  const set = (key: string, value: string) =>
    setValues((v) => ({ ...v, [key]: value }));

  const save = async () => {
    setSaving(true);
    try {
      const settings = Object.entries(values).map(([key, value]) => ({
        key,
        value,
      }));
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ settings }),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        toast.error(json.error ?? "Save failed.");
        setSaving(false);
        return;
      }
      const res2 = await fetch("/api/admin/homepage-sections", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sections: sectionState }),
      });
      const json2 = (await res2.json().catch(() => ({}))) as { error?: string };
      if (!res2.ok) {
        toast.error(json2.error ?? "Sections save failed.");
        setSaving(false);
        return;
      }
      toast.success("Settings saved. Public pages revalidated.");
      router.refresh();
    } catch {
      toast.error("Save failed. Check your connection.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {GROUPS.map((g) => (
        <Card key={g.title} className="space-y-5">
          <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
            {g.title}
          </h2>
          {g.keys.map((k) => (
            <Field key={k.key} label={k.label}>
              {k.textarea ? (
                <Textarea
                  rows={k.key === "hero_headline" ? 3 : 2}
                  value={values[k.key] ?? ""}
                  disabled={!canSave}
                  onChange={(e) => set(k.key, e.target.value)}
                />
              ) : (
                <TextInput
                  value={values[k.key] ?? ""}
                  disabled={!canSave}
                  onChange={(e) => set(k.key, e.target.value)}
                />
              )}
            </Field>
          ))}
        </Card>
      ))}

      <Card className="space-y-5">
        <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
          Featured selections
        </h2>
        <MultiSelect
          label="Featured services"
          hint="Homepage services block. Empty = first published services."
          options={serviceOptions.map((s) => ({ value: s.slug, label: s.title }))}
          values={asSlugList(values.featured_services)}
          onChange={(v) => set("featured_services", JSON.stringify(v))}
          disabled={!canSave}
        />
        <MultiSelect
          label="Featured projects"
          hint="Homepage case studies."
          options={projectOptions.map((p) => ({ value: p.slug, label: p.title }))}
          values={asSlugList(values.featured_projects)}
          onChange={(v) => set("featured_projects", JSON.stringify(v))}
          disabled={!canSave}
        />
        <MultiSelect
          label="Featured testimonials"
          hint="Homepage carousel."
          options={testimonialOptions.map((t) => ({ value: t.id, label: t.label }))}
          values={asSlugList(values.featured_testimonials)}
          onChange={(v) => set("featured_testimonials", JSON.stringify(v))}
          disabled={!canSave}
        />
        <MultiSelect
          label="Homepage FAQs"
          hint="Homepage FAQ preview."
          options={faqOptions.map((f) => ({ value: f.slug, label: f.question.slice(0, 60) }))}
          values={asSlugList(values.faq_selection)}
          onChange={(v) => set("faq_selection", JSON.stringify(v))}
          disabled={!canSave}
        />
      </Card>

      <Card className="space-y-4">
        <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)", color: "#1B1B1B" }}>
          Homepage sections
        </h2>
        {sectionState
          .slice()
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((s) => (
            <div key={s.key} className="flex items-center gap-4">
              <label className="flex items-center gap-3 text-sm font-medium flex-1 cursor-pointer" style={{ color: "#1B1B1B" }}>
                <input
                  type="checkbox"
                  checked={s.isVisible}
                  disabled={!canSave}
                  onChange={(e) =>
                    setSectionState((prev) =>
                      prev.map((p) => (p.key === s.key ? { ...p, isVisible: e.target.checked } : p))
                    )
                  }
                  className="w-4 h-4 accent-[#6E8E59]"
                />
                {SECTION_LABELS[s.key] ?? s.key}
              </label>
              <input
                type="number"
                min={0}
                max={100}
                value={s.sortOrder}
                disabled={!canSave}
                onChange={(e) =>
                  setSectionState((prev) =>
                    prev.map((p) =>
                      p.key === s.key ? { ...p, sortOrder: Number(e.target.value) || 0 } : p
                    )
                  )
                }
                aria-label={`${s.key} order`}
                className="w-20 h-10 px-3 rounded-xl border text-sm"
                style={{ backgroundColor: "#FAF8F5", borderColor: "rgba(0,0,0,0.06)", color: "#1B1B1B" }}
              />
            </div>
          ))}
      </Card>

      {canSave && (
        <button
          type="button"
          onClick={save}
          disabled={saving}
          className="inline-flex items-center justify-center gap-2 px-8 h-12 rounded-2xl text-sm font-semibold text-white disabled:opacity-60"
          style={{ backgroundColor: "#2563EB" }}
        >
          {saving ? "Saving..." : "Save all settings"}
        </button>
      )}
    </div>
  );
}

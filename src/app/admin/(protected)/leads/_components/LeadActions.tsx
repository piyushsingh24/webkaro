"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LEAD_STATUSES } from "@/lib/schemas/leads";

async function patchLead(
  id: string,
  payload: Record<string, unknown>
): Promise<boolean> {
  const res = await fetch(`/api/admin/leads/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    toast.error(json.error ?? "Update failed.");
    return false;
  }
  return true;
}

function useRefresh() {
  const router = useRouter();
  return () => router.refresh();
}

export function StatusChanger({
  id,
  current,
  canChange,
}: {
  id: string;
  current: string;
  canChange: boolean;
}) {
  const refresh = useRefresh();
  const [value, setValue] = useState(current);
  const [busy, setBusy] = useState(false);
  if (!canChange) return null;
  return (
    <span className="inline-flex items-center gap-2">
      <select
        value={value}
        disabled={busy}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Change status"
        className="h-10 px-3 rounded-xl border text-xs font-semibold bg-white focus:outline-none"
        style={{ borderColor: "rgba(0,0,0,0.1)", color: "#1B1B1B" }}
      >
        {LEAD_STATUSES.map((s) => (
          <option key={s} value={s}>
            {s.replace(/_/g, " ")}
          </option>
        ))}
      </select>
      <button
        type="button"
        disabled={busy || value === current}
        onClick={async () => {
          setBusy(true);
          const ok = await patchLead(id, { action: "status", to: value });
          if (ok) {
            toast.success(`Status → ${value.replace(/_/g, " ")}.`);
            refresh();
          }
          setBusy(false);
        }}
        className="h-10 px-4 rounded-xl text-xs font-bold text-white disabled:opacity-50"
        style={{ backgroundColor: "#2563EB" }}
      >
        {busy ? "Saving..." : "Set"}
      </button>
    </span>
  );
}

export function NoteForm({ id }: { id: string }) {
  const refresh = useRefresh();
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!note.trim()) return;
        setBusy(true);
        const ok = await patchLead(id, { action: "note", note: note.trim() });
        if (ok) {
          toast.success("Note added.");
          setNote("");
          refresh();
        }
        setBusy(false);
      }}
      className="space-y-3"
    >
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows={3}
        maxLength={5000}
        placeholder="Write an internal note (never shown publicly)..."
        className="w-full px-4 py-3 rounded-xl border text-sm leading-relaxed focus:outline-none"
        style={{ backgroundColor: "#FAF8F5", borderColor: "rgba(0,0,0,0.06)", color: "#1B1B1B" }}
      />
      <button
        type="submit"
        disabled={busy || !note.trim()}
        className="px-5 h-10 rounded-xl text-xs font-bold text-white disabled:opacity-50"
        style={{ backgroundColor: "#1B1B1B" }}
      >
        {busy ? "Adding..." : "Add note"}
      </button>
    </form>
  );
}

export function FollowUpForm({
  id,
  current,
}: {
  id: string;
  current: string | null;
}) {
  const refresh = useRefresh();
  const [value, setValue] = useState(current ? current.slice(0, 16) : "");
  const [busy, setBusy] = useState(false);
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        const ok = await patchLead(id, {
          action: "followup",
          followUpAt: value ? new Date(value).toISOString() : "",
        });
        if (ok) {
          toast.success(value ? "Follow-up scheduled." : "Follow-up cleared.");
          refresh();
        }
        setBusy(false);
      }}
      className="flex flex-wrap items-center gap-2"
    >
      <input
        type="datetime-local"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Follow-up date"
        className="h-10 px-3 rounded-xl border text-xs bg-white focus:outline-none"
        style={{ borderColor: "rgba(0,0,0,0.1)", color: "#1B1B1B" }}
      />
      <button
        type="submit"
        disabled={busy}
        className="h-10 px-4 rounded-xl text-xs font-bold text-white disabled:opacity-50"
        style={{ backgroundColor: "#6E8E59" }}
      >
        {busy ? "Saving..." : "Save"}
      </button>
      {current && (
        <button
          type="button"
          disabled={busy}
          onClick={async () => {
            setBusy(true);
            const ok = await patchLead(id, { action: "followup", followUpAt: "" });
            if (ok) {
              toast.success("Follow-up cleared.");
              setValue("");
              refresh();
            }
            setBusy(false);
          }}
          className="h-10 px-3 rounded-xl text-xs font-semibold border"
          style={{ borderColor: "rgba(0,0,0,0.1)", color: "#656565" }}
        >
          Clear
        </button>
      )}
    </form>
  );
}

export function AssignSelect({
  id,
  currentId,
  users,
  canAssign,
}: {
  id: string;
  currentId: string | null;
  users: { id: string; name: string | null; email: string }[];
  canAssign: boolean;
}) {
  const refresh = useRefresh();
  const [busy, setBusy] = useState(false);
  if (!canAssign) return null;
  return (
    <select
      value={currentId ?? ""}
      disabled={busy}
      aria-label="Assign lead"
      onChange={async (e) => {
        setBusy(true);
        const ok = await patchLead(id, {
          action: "assign",
          assignedToId: e.target.value,
        });
        if (ok) {
          toast.success("Assignment updated.");
          refresh();
        }
        setBusy(false);
      }}
      className="h-10 px-3 rounded-xl border text-xs font-semibold bg-white focus:outline-none max-w-full"
      style={{ borderColor: "rgba(0,0,0,0.1)", color: "#1B1B1B" }}
    >
      <option value="">Unassigned</option>
      {users.map((u) => (
        <option key={u.id} value={u.id}>
          {u.name ?? u.email}
        </option>
      ))}
    </select>
  );
}

export function EditDetailsForm({
  id,
  lead,
}: {
  id: string;
  lead: {
    name: string;
    email: string | null;
    phone: string | null;
    companyName: string | null;
    serviceInterest: string | null;
    budgetRange: string | null;
    projectDescription: string | null;
  };
}) {
  const refresh = useRefresh();
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: lead.name,
    email: lead.email ?? "",
    phone: lead.phone ?? "",
    companyName: lead.companyName ?? "",
    serviceInterest: lead.serviceInterest ?? "",
    budgetRange: lead.budgetRange ?? "",
    projectDescription: lead.projectDescription ?? "",
  });
  const set = (k: keyof typeof form, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs font-semibold"
        style={{ color: "#2563EB" }}
      >
        Edit contact details
      </button>
    );
  }

  const input =
    "w-full h-10 px-3 rounded-xl border text-sm bg-white focus:outline-none";
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setBusy(true);
        const ok = await patchLead(id, {
          action: "update",
          data: {
            name: form.name.trim(),
            email: form.email.trim(),
            phone: form.phone.trim(),
            companyName: form.companyName.trim(),
            serviceInterest: form.serviceInterest.trim(),
            budgetRange: form.budgetRange.trim(),
            projectDescription: form.projectDescription.trim(),
          },
        });
        if (ok) {
          toast.success("Details updated.");
          setOpen(false);
          refresh();
        }
        setBusy(false);
      }}
      className="grid grid-cols-1 sm:grid-cols-2 gap-3"
    >
      {(
        [
          ["name", "Name"],
          ["email", "Email"],
          ["phone", "Phone"],
          ["companyName", "Company"],
          ["serviceInterest", "Service interest"],
          ["budgetRange", "Budget"],
        ] as const
      ).map(([k, label]) => (
        <label key={k} className="text-xs font-semibold" style={{ color: "#656565" }}>
          {label}
          <input
            value={form[k]}
            onChange={(e) => set(k, e.target.value)}
            className={`${input} mt-1 font-normal`}
            style={{ borderColor: "rgba(0,0,0,0.1)", color: "#1B1B1B" }}
          />
        </label>
      ))}
      <label className="text-xs font-semibold sm:col-span-2" style={{ color: "#656565" }}>
        Project description
        <textarea
          value={form.projectDescription}
          onChange={(e) => set("projectDescription", e.target.value)}
          rows={3}
          className="w-full px-3 py-2 rounded-xl border text-sm bg-white focus:outline-none mt-1 font-normal"
          style={{ borderColor: "rgba(0,0,0,0.1)", color: "#1B1B1B" }}
        />
      </label>
      <span className="sm:col-span-2 flex gap-2">
        <button
          type="submit"
          disabled={busy}
          className="h-10 px-5 rounded-xl text-xs font-bold text-white disabled:opacity-50"
          style={{ backgroundColor: "#2563EB" }}
        >
          {busy ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="h-10 px-4 rounded-xl text-xs font-semibold border"
          style={{ borderColor: "rgba(0,0,0,0.1)", color: "#656565" }}
        >
          Cancel
        </button>
      </span>
    </form>
  );
}

const styles: Record<string, { bg: string; fg: string }> = {
  NEW: { bg: "#EFF6FF", fg: "#1D4ED8" },
  CONTACTED: { bg: "#F6F3EE", fg: "#656565" },
  QUALIFIED: { bg: "#F4F7F1", fg: "#5A7548" },
  PROPOSAL_SENT: { bg: "#EEF2FF", fg: "#4F46E5" },
  WON: { bg: "#F4F7F1", fg: "#6E8E59" },
  LOST: { bg: "#FEF2F2", fg: "#991B1B" },
};

export default function LeadStatusBadge({ status }: { status: string }) {
  const s = styles[status] ?? styles.NEW;
  return (
    <span
      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest whitespace-nowrap"
      style={{ backgroundColor: s.bg, color: s.fg }}
    >
      {status.replace(/_/g, " ").toLowerCase()}
    </span>
  );
}

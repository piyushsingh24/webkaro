/** Client↔server conversion helpers for admin CMS forms. */

export function linesToArray(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

export function arrayToLines(arr: unknown): string {
  return Array.isArray(arr)
    ? arr.filter((v) => typeof v === "string").join("\n")
    : "";
}

/** "Label | Value" lines ↔ [{ label, value }]. */
export function kvLinesToArray(
  text: string
): { label: string; value: string }[] {
  return text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [label = "", ...rest] = l.split("|");
      return { label: label.trim(), value: rest.join("|").trim() };
    })
    .filter((kv) => kv.label && kv.value);
}

export function kvArrayToLines(arr: unknown): string {
  if (!Array.isArray(arr)) return "";
  return arr
    .filter(
      (v): v is { label: string; value: string } =>
        typeof v === "object" && v !== null
    )
    .map((v) => `${String(v.label ?? "")} | ${String(v.value ?? "")}`)
    .join("\n");
}

export function prettyJson(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (Array.isArray(value) && value.length === 0) return "";
  try {
    return JSON.stringify(value, null, 2);
  } catch {
    return "";
  }
}

export function parseJsonArray(text: string, field: string): unknown[] {
  const trimmed = text.trim();
  if (!trimmed) return [];
  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    throw new Error(`${field} must be valid JSON.`);
  }
  if (!Array.isArray(parsed)) throw new Error(`${field} must be a JSON array.`);
  return parsed;
}

export async function submitAdminForm(
  endpoint: string,
  method: "POST" | "PATCH",
  payload: unknown
): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch(endpoint, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = (await res.json().catch(() => ({}))) as {
    error?: string;
  };
  if (!res.ok) return { ok: false, error: json.error ?? "Save failed." };
  return { ok: true };
}

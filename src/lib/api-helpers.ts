import { NextResponse } from "next/server";
import { isDbConfigured } from "@/lib/cms/db";

export function ok<T>(data: T, status = 200): NextResponse {
  return NextResponse.json(data, { status });
}

export function fail(message: string, status = 400): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

/** 503 when no database is configured — never pretend a write succeeded. */
export function requireDbConfigured(): NextResponse | null {
  if (!isDbConfigured()) {
    return fail("Database is not configured (DATABASE_URL is missing).", 503);
  }
  return null;
}

/** Parse JSON body safely; returns fail() response on invalid JSON. */
export async function parseBody<T>(
  req: Request
): Promise<{ data: T } | { response: NextResponse }> {
  try {
    const data = (await req.json()) as T;
    return { data };
  } catch {
    return { response: fail("Invalid JSON body.", 400) };
  }
}

/** Never leak stack traces or DB internals to API consumers. */
export function toApiError(err: unknown): NextResponse {
  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.error("[admin-api]", err);
  }
  return fail("Something went wrong. Please try again.", 500);
}

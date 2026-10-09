"use client";

import { useEffect, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useTheme } from "next-themes";

/**
 * Cloudflare Turnstile widget. Fetches the public site key from
 * GET /api/captcha/sitekey (keeps the exact CLOUDFLARE_SITE_KEY /
 * CLOUDFLARE_SECRET_KEY server naming — no NEXT_PUBLIC_ duplication).
 * Renders nothing when unconfigured; the server then relies on the
 * honeypot + time-trap + rate limits instead.
 */
export default function TurnstileWidget({
  onVerify,
  onConfigured,
  resetSignal = 0,
}: {
  onVerify: (token: string | null) => void;
  /** Called once with whether a site key exists (false → no widget). */
  onConfigured?: (configured: boolean) => void;
  /** Increment to reset the widget (e.g. after successful submit). */
  resetSignal?: number;
}) {
  const [siteKey, setSiteKey] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/captcha/sitekey")
      .then((r) => r.json())
      .then((j: { siteKey?: string | null }) => {
        if (!cancelled) {
          const key = j.siteKey ?? null;
          setSiteKey(key);
          setLoaded(true);
          onConfigured?.(Boolean(key));
        }
      })
      .catch(() => {
        if (!cancelled) {
          setLoaded(true);
          onConfigured?.(false);
        }
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!loaded || !siteKey) return null;

  return (
    <div className="flex justify-center pt-2">
      <Turnstile
        key={resetSignal}
        siteKey={siteKey}
        options={{ theme: theme === "dark" ? "dark" : "light" }}
        onSuccess={(token) => onVerify(token)}
        onExpire={() => onVerify(null)}
        onError={() => onVerify(null)}
      />
    </div>
  );
}

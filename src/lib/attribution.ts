"use client";

/**
 * Client-side enquiry attribution: landing page, referrer, UTM params.
 * Call inside a client component event handler (never during SSR).
 * Values are length-capped; the server re-validates everything.
 */
export type Attribution = {
  landingPage: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
};

function clean(value: string | null, max: number): string | undefined {
  if (!value) return undefined;
  const v = value.slice(0, max);
  return v === "" ? undefined : v;
}

export function collectAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  return {
    landingPage: window.location.pathname.slice(0, 500),
    referrer: clean(document.referrer, 500),
    utmSource: clean(params.get("utm_source"), 150),
    utmMedium: clean(params.get("utm_medium"), 150),
    utmCampaign: clean(params.get("utm_campaign"), 150),
  };
}

# Search Console verification — Webkaro sitemap & indexing (Phase 4)

No Search Console API integration exists (not requested). All checks below
are manual, in google.com/webmasters (Search Console). Never claim Google
has indexed a URL unless these tools confirm it.

## 1. Sitemap submission (one-time + after major changes)

1. Open Search Console → property `https://www.webkaro.in` → Sitemaps.
2. Add sitemap: `https://www.webkaro.in/sitemap.xml` → Submit.
3. Expect status "Success" with a discovered-URL count. Our sitemap includes
   ONLY published content: services, projects, live blog posts (scheduled/
   future posts appear automatically once their date passes), published FAQs
   and static hubs. Drafts, archived posts, preview routes and /admin/* never
   appear (verify by opening /sitemap.xml in a browser while signed out).

## 2. URL Inspection (per article)

1. Search Console → URL Inspection → paste the full article URL.
2. Check: "URL is on Google" (indexed) or "URL is not on Google".
3. If not indexed: review "Page indexing" → fix any error shown →
   "Request indexing" (quota-limited; prioritize money pages first).
4. "View crawled page" confirms Googlebot sees the rendered article,
   canonical tag, and BlogPosting JSON-LD (also testable at
   validator.schema.org and Rich Results Test).

## 3. What to verify after each publish cycle

- New article URL returns 200 signed-out; metadata shows unique title +
  description; canonical is self-referencing (or the intentional override).
- JSON-LD has ISO datePublished/dateModified, author, image, publisher.
- Sitemap contains the URL with a fresh lastModified (updatedAt).
- Retired slugs: old URL returns 301/307 to the new URL (single hop);
  no chains, no loops (the admin Redirect manager loop-checks on save).
- Draft/preview URLs: /admin/blogs/<id>/preview redirects to login when
  signed out and carries noindex when signed in.
- Coverage report: watch "Not found (404)" (expected for retired slugs
  WITHOUT redirects — add redirects for any with traffic) and
  "Excluded: Crawled - currently not indexed" (normal for new content;
  indexing is Google's decision, not guaranteed by sitemap presence).

## 4. Robots

/robots.txt allows `/`, disallows `/api/` and `/_next/`, and points to the
sitemap. Admin and preview routes rely on `noindex` metadata (not robots
disallow), so they can never leak via the sitemap.

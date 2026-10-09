# Phase 2 — CMS: Operations Guide (Migration, Admin Manual, Caching)

## A. One-time migration (static src/data -> MySQL)

Prerequisites: DATABASE_URL set in `.env`, MySQL running, database exists.

```powershell
npm run db:migrate          # review + apply the additive migration
npm run cms:import          # DRY RUN — prints per-model counts, writes nothing
npm run cms:import -- --run # real import: upserts by slug, skips existing rows
```

- Re-running without flags only adds missing records (idempotent).
- `--update` overwrites existing rows (use deliberately; manual edits otherwise kept).
- Static files in `src/data/` are intentionally KEPT as fallback + reference.
- Verify afterwards: public pages, `/sitemap.xml` (published only), then
  create a DRAFT in /admin and confirm it is invisible publicly.

Expected inventory (dry-run verified): 3 service categories, 29 services
(+ embedded service FAQs), 9 projects, 11 posts, 6 testimonials, 10 FAQs,
18 settings, 11 homepage sections.

## B. Daily admin use

- Dashboard: /admin (Overview) — Services, Projects, Blogs (+ Categories,
  Tags, Authors), Testimonials, FAQs, Settings.
- Statuses: DRAFT (private) / PUBLISHED (public) / ARCHIVED (hidden).
- Only ADMIN can publish, unpublish, edit published rows, delete, or save
  Settings. EDITOR can create/edit drafts only (UI hints + server 403s).
- Slugs: public URLs (/services/<slug> etc.). Auto-suffixed on conflict.
  Changing a slug breaks the old URL — add a Redirect row (fromPath/toPath)
  or keep the old slug. Redirects are honored by detail pages.
- Blog content + FAQ details are Markdown (GFM). Raw HTML is never rendered.
- Scheduled posts: set status PUBLISHED with a future publish date — the
  post appears automatically once reached (checked at read time, no cron).
- Deleting a category/author in use is refused (reassign first).

## C. Caching

- Public detail/listing pages are statically generated (published only).
- Every admin mutation revalidates its listing + detail + `/` + sitemap via
  `revalidatePath` — no redeploy needed.
- Drafts are excluded from static params and the sitemap, so they never leak.
- Blog category hubs (/blogs/frontend etc.) remain static editorial shells
  (build-time lists) — full dynamic hubs are a scoped follow-up.

## D. Production notes

- Apply schema with `prisma migrate deploy` (never `migrate dev`/reset).
- `next build` runs `prisma generate` automatically via postinstall.
- Admin + auth routes are dynamic (per-request sessions); public content
  stays static. No DATABASE_URL at build time = static fallback (build-safe).
- Rate limiting is per-instance in-memory (see Phase 1 doc); shared store later.

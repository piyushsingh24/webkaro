# Phase 3 — Lead CRM: Operations Guide

## A. Apply the migration

```powershell
npm run db:migrate          # local: reviews + applies add_lead_crm
```

Production (Vercel): `prisma migrate deploy` before/with build; never
`migrate dev` or `migrate reset` against production. The migration is
purely additive (`leads`, `lead_activities` + FKs).

## B. Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `DATABASE_URL` | yes | MySQL connection |
| `LEAD_NOTIFY_EMAIL` | no | Business inbox (defaults to site contact email) |
| `RESEND_API_KEY` + `RESEND_FROM` | no | Enables email alerts + visitor ack. Without them leads still save; skips are logged |
| `LEAD_SEND_ACK` | no | `true` = acknowledgement email to visitor (default off) |
| `CLOUDFLARE_SECRET_KEY` (`CLOUDFLARE_SITE_KEY` for the widget) | no | Turnstile token verification. Without them: honeypot + 2.5s time-trap + 5 req/10 min per IP still apply |
| `WEB3FORMS_FORWARD_ENABLED` | no | `true` = also forward saved leads to Web3Forms (default off; prevents duplicate emails) |

## C. Submission flow

Forms (`/contact`, FinalCTA everywhere incl. service/project/blog embeds)
POST to `/api/leads` with attribution (source, landing page, referrer, UTM)
+ honeypot + fill-time. Server: rate limit → origin check → traps (silent
fake success) → zod → Turnstile CAPTCHA (strict when CLOUDFLARE_SECRET_KEY
is set) → transactional save with
24h dedup (same contact + service reuses the lead, records a NOTE activity)
→ post-commit notifications (fail-open). Success returned ONLY after persist.

## D. Admin use (/admin/leads)

- List: search (name/email/phone/company), status/service/source filters,
  newest/oldest/follow-up sort, pagination.
- Detail: contact + project + attribution, status changer, notes, follow-up
  date, assignment, contact editing, full activity timeline, delete.
- Roles: EDITOR may add notes, set follow-ups, edit details. Status changes,
  assignment, deletes, settings = ADMIN only (UI hides + API 403s).
- Overview (/admin): totals, NEW/qualified/proposals/won, follow-ups due,
  recent enquiries — all from live queries, no sample data.

## E. Rate limiting honesty

Public + login limits are per-instance in-memory (see Phase 1 doc): full
protection on a single server, best-effort per instance on Vercel's
multi-instance serverless. A shared store (Upstash Redis) is the documented
upgrade — needs an account + `UPSTASH_REDIS_REST_URL/_TOKEN`; say the word
and it can be wired without changing call sites.

## F. Cutover checklist (Web3Forms → CRM)

1. Deploy; submit a test enquiry on /contact; confirm lead in /admin/leads.
2. Confirm `/api/leads` validation (bad email → 422, no contact → 422).
3. Add RESEND_API_KEY when ready; submit again; confirm inbox alert.
4. Only then remove the Web3Forms access key if desired. Keep
   `WEB3FORMS_FORWARD_ENABLED=false` to avoid duplicates.


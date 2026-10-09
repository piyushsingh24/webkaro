# Phase 1 — Admin Auth: Setup Guide (Local + Vercel)

## A. Local setup (Windows PowerShell)

1. Start MySQL (requires Administrator):
   ```powershell
   net start MySQL80
   ```
   Then create the database (in MySQL shell / Workbench):
   ```sql
   CREATE DATABASE IF NOT EXISTS webkaro
     CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

2. Copy env and fill secrets (never commit `.env`):
   ```powershell
   Copy-Item .env.example .env
   ```
   Set `DATABASE_URL`, generate `NEXTAUTH_SECRET`:
   ```powershell
   openssl rand -base64 32
   ```
   (Git Bash / WSL provide `openssl`; otherwise use any password manager.)

3. Run the migration (creates the `users` table):
   ```powershell
   npm run db:migrate
   ```
   Give the migration a name like `init-admin-auth` when prompted.

4. Create the one-time administrator (min 12-char `ADMIN_PASSWORD` in `.env`):
   ```powershell
   npm run admin:create
   ```
   Then DELETE `ADMIN_PASSWORD` from `.env`. The script refuses to run
   if any admin already exists.

5. Start and verify:
   ```powershell
   npm run dev
   ```
   - `http://localhost:3000/admin` → redirects to `/admin/login` (unauthenticated).
   - Valid credentials → dashboard. Invalid → generic error. 6th rapid
     failure → rate-limit message. Disabled account (`isActive=false`
     via `npm run db:studio`) → generic error, no login.

## B. Vercel production setup

Vercel has no local MySQL — use a hosted MySQL (Aiven, PlanetScale,
Railway, AWS RDS, etc.) reachable over the public internet with SSL.

1. Project → Settings → Environment Variables (Production + Preview):
   - `DATABASE_URL` = `mysql://USER:PASSWORD@HOST:PORT/DBNAME?sslaccept=strict`
     (hosted providers give the exact string; keep `?ssl*` params they specify)
   - `NEXTAUTH_SECRET` = fresh `openssl rand -base64 32` value
     (MUST differ from local)
   - `NEXTAUTH_URL` = `https://www.webkaro.in`
   - Do NOT set `ADMIN_EMAIL`/`ADMIN_PASSWORD` on Vercel.
2. Apply schema: from your machine with the PROD url once —
   `DATABASE_URL="<prod-url>" npx prisma migrate deploy`
   (or run `prisma migrate deploy` in Vercel's Build Command BEFORE
   `next build`, e.g. `prisma migrate deploy && next build`).
   Never run `migrate dev` or `migrate reset` against production.
3. Create the prod admin from your machine:
   `DATABASE_URL="<prod-url>" ADMIN_EMAIL=... ADMIN_PASSWORD=... npm run admin:create`
4. Verify: `https://www.webkaro.in/admin/login` signs in; `/admin` is
   unreachable signed-out; admin pages return `noindex` (check View Source).

## C. Notes & limits

- JWT sessions (8h, HTTP-only cookies). Role changes need re-login.
- Rate limit is per-instance in-memory (fine locally; shared-store upgrade
  is a documented later-phase item).
- `@node-rs/argon2` ships prebuilt binaries — no build tools needed on
  Vercel. Auth route runs on Node.js runtime (never Edge).
- `prisma generate` runs automatically on `npm install` (postinstall hook
  ships with @prisma/client) — no extra build-step config needed.

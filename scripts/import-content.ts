/**
 * Phase 2 content migration: src/data/* (static) -> MySQL via Prisma.
 *
 * Usage:
 *   npm run cms:import          # dry run (default): reports what WOULD happen
 *   npm run cms:import -- --run # perform the import (upsert by slug)
 *   npm run cms:import -- --run --update   # also overwrite existing rows
 *
 * Rules (safe by default):
 * - Idempotent: every record is keyed by its unique slug. Re-runs only add
 *   missing records; existing rows are SKIPPED unless --update is passed.
 * - Never deletes. Never touches the static files (kept until verified).
 * - Reports imported / skipped / failed per model, plus duplicate slugs.
 * - Existing slugs, URLs and metadata are preserved 1:1.
 *
 * Requires DATABASE_URL (node --env-file=.env via the npm script).
 */

import { PrismaClient, Prisma, type ContentStatus } from "@prisma/client";
import { services, serviceCategories } from "../src/data/services.js";
import { projectDetails } from "../src/data/projects.js";
import { blogs } from "../src/data/blogs.js";
import { testimonials } from "../src/data/testimonials.js";
import { faqs } from "../src/data/faq.js";
import { slugify } from "../src/lib/cms/db.js";
import { DEFAULT_SETTINGS } from "../src/lib/cms/settings.js";
import { HOMEPAGE_SECTION_KEYS } from "../src/lib/schemas/cms.js";

const prisma = new PrismaClient();
const PUBLISHED = "PUBLISHED" as ContentStatus;

const args = process.argv.slice(2);
const RUN = args.includes("--run");
const UPDATE = args.includes("--update");

/** Plain-JSON clone so typed static data satisfies Prisma InputJsonValue. */
function toJson(value: unknown): Prisma.InputJsonValue {
  return JSON.parse(JSON.stringify(value ?? [])) as Prisma.InputJsonValue;
}

type Report = { imported: number; skipped: number; failed: number; errors: string[] };
const report: Record<string, Report> = {};
function bucket(name: string): Report {
  return (report[name] ??= { imported: 0, skipped: 0, failed: 0, errors: [] });
}
function dupCheck(model: string, slugs: string[]) {
  const seen = new Set<string>();
  for (const s of slugs) {
    if (seen.has(s)) bucket(model).errors.push(`duplicate slug in static data: ${s}`);
    seen.add(s);
  }
}

async function importCategories() {
  const b = bucket("service_categories");
  dupCheck("service_categories", serviceCategories.map((c) => slugify(c.name)));
  for (const [i, c] of serviceCategories.entries()) {
    const slug = slugify(c.name);
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      const existing = await prisma.serviceCategory.findUnique({ where: { slug } });
      if (existing && !UPDATE) {
        b.skipped++;
        continue;
      }
      await prisma.serviceCategory.upsert({
        where: { slug },
        create: { name: c.name, slug, description: c.description, sortOrder: i },
        update: UPDATE ? { name: c.name, description: c.description, sortOrder: i } : {},
      });
      b.imported++;
    } catch (e) {
      b.failed++;
      b.errors.push(`${slug}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

async function importServices() {
  const b = bucket("services");
  dupCheck("services", services.map((s) => s.id));
  for (const [i, s] of services.entries()) {
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      const category = await prisma.serviceCategory.findUnique({
        where: { slug: slugify(s.category) },
      });
      if (!category) throw new Error(`missing category for "${s.category}"`);
      const existing = await prisma.service.findUnique({ where: { slug: s.id } });
      if (existing && !UPDATE) {
        b.skipped++;
      } else {
        const data = {
          slug: s.id,
          title: s.title,
          shortDescription: s.shortDescription,
          description: s.description,
          icon: s.icon,
          price: s.price,
          pricingHint: s.pricingHint,
          timeline: s.timeline,
          features: toJson(s.features),
          deliverables: toJson(s.deliverables),
          technologies: toJson([]),
          benefits: toJson(s.whyChoosePoints ?? []),
          techStack: toJson(s.techStackDetails ?? []),
          processSteps: toJson(s.processSteps ?? []),
          caseStudy: s.caseStudy ? toJson(s.caseStudy) : Prisma.DbNull,
          seoTitle: s.seoTitle ?? null,
          seoDescription: s.seoDescription ?? null,
          status: PUBLISHED,
          sortOrder: i,
          publishedAt: new Date(),
          categoryId: category.id,
        };
        if (existing) {
          await prisma.service.update({ where: { slug: s.id }, data });
        } else {
          await prisma.service.create({ data });
        }
        b.imported++;
      }
      // Embedded service FAQs -> linked Faq rows (slug: <service>-faq-<n>).
      const service = await prisma.service.findUnique({ where: { slug: s.id } });
      if (service && s.faqs) {
        for (const [fi, f] of s.faqs.entries()) {
          const fslug = `${s.id}-faq-${fi + 1}`;
          const fexisting = await prisma.faq.findUnique({ where: { slug: fslug } });
          if (fexisting && !UPDATE) {
            bucket("faqs").skipped++;
            continue;
          }
          const fdata = {
            slug: fslug,
            question: f.question,
            answer: f.answer,
            category: "Service",
            status: PUBLISHED,
            sortOrder: fi,
            serviceId: service.id,
          };
          if (fexisting) await prisma.faq.update({ where: { slug: fslug }, data: fdata });
          else await prisma.faq.create({ data: fdata });
          bucket("faqs").imported++;
        }
      }
    } catch (e) {
      b.failed++;
      b.errors.push(`${s.id}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

async function importProjects() {
  const b = bucket("projects");
  const details = Object.values(projectDetails);
  dupCheck("projects", details.map((p) => p.slug));
  for (const [i, p] of details.entries()) {
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      const existing = await prisma.project.findUnique({ where: { slug: p.slug } });
      if (existing && !UPDATE) {
        b.skipped++;
        continue;
      }
      const data = {
        slug: p.slug,
        title: p.title,
        category: p.category,
        summary: p.description,
        problem: p.problem,
        strategy: p.strategy,
        results: toJson(p.results),
        metrics: toJson(p.metrics),
        outcomes: toJson(p.outcomes ?? []),
        thumbnail: p.thumbnail,
        screenshots: toJson(p.screenshots),
        tags: toJson(p.tags),
        demoUrl: p.demoUrl ?? null,
        status: PUBLISHED,
        sortOrder: i,
        publishedAt: new Date(),
      };
      if (existing) await prisma.project.update({ where: { slug: p.slug }, data });
      else await prisma.project.create({ data });
      b.imported++;
    } catch (e) {
      b.failed++;
      b.errors.push(`${p.slug}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

function parseMinutes(readTime: string): number {
  const m = readTime.match(/(\d+)/);
  return m ? Number(m[1]) : 5;
}

async function importBlogs() {
  const b = bucket("blog_posts");
  dupCheck("blog_posts", blogs.map((p) => p.slug));
  const author = RUN
    ? await prisma.author
        .findFirst({ where: { name: "Webkaro Collective" } })
        .then(
          async (found) =>
            found ?? prisma.author.create({ data: { name: "Webkaro Collective" } })
        )
    : null;

  const categoryCache = new Map<string, string>();
  for (const p of blogs) {
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      let categoryId: string | null = null;
      if (p.category) {
        if (!categoryCache.has(p.category)) {
          const slug = slugify(p.category);
          const cat = await prisma.blogCategory.upsert({
            where: { slug },
            create: { name: p.category, slug },
            update: {},
          });
          categoryCache.set(p.category, cat.id);
        }
        categoryId = categoryCache.get(p.category) ?? null;
      }
      const existing = await prisma.blogPost.findUnique({ where: { slug: p.slug } });
      if (existing && !UPDATE) {
        b.skipped++;
        continue;
      }
      const publishedAt = new Date(p.date);
      const data = {
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        content: p.content,
        status: PUBLISHED,
        publishedAt: Number.isNaN(publishedAt.getTime()) ? new Date() : publishedAt,
        readingMinutes: parseMinutes(p.readTime),
        categoryId,
        authorId: author?.id ?? null,
      };
      if (existing) await prisma.blogPost.update({ where: { slug: p.slug }, data });
      else await prisma.blogPost.create({ data });
      b.imported++;
    } catch (e) {
      b.failed++;
      b.errors.push(`${p.slug}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

async function importTestimonials() {
  const b = bucket("testimonials");
  for (const [i, t] of testimonials.entries()) {
    const key = `${t.name}-${t.company}`;
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      const existing = await prisma.testimonial.findFirst({
        where: { clientName: t.name, company: t.company },
      });
      if (existing && !UPDATE) {
        b.skipped++;
        continue;
      }
      const data = {
        clientName: t.name,
        company: t.company,
        role: t.role,
        content: t.quote,
        verified: t.verified,
        status: PUBLISHED,
        sortOrder: i,
      };
      if (existing) await prisma.testimonial.update({ where: { id: existing.id }, data });
      else await prisma.testimonial.create({ data });
      b.imported++;
    } catch (e) {
      b.failed++;
      b.errors.push(`${key}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

async function importFaqs() {
  const b = bucket("faqs");
  dupCheck("faqs", faqs.map((f) => f.slug));
  for (const [i, f] of faqs.entries()) {
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      const existing = await prisma.faq.findUnique({ where: { slug: f.slug } });
      if (existing && !UPDATE) {
        b.skipped++;
        continue;
      }
      const data = {
        slug: f.slug,
        question: f.question,
        answer: f.answer,
        details: f.details,
        category: f.category ?? null,
        status: PUBLISHED,
        sortOrder: i,
      };
      if (existing) await prisma.faq.update({ where: { slug: f.slug }, data });
      else await prisma.faq.create({ data });
      b.imported++;
    } catch (e) {
      b.failed++;
      b.errors.push(`${f.slug}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

async function importSettings() {
  const b = bucket("site_settings");
  for (const [key, value] of Object.entries(DEFAULT_SETTINGS)) {
    try {
      if (!RUN) {
        b.imported++;
        continue;
      }
      const existing = await prisma.siteSetting.findUnique({ where: { key } });
      if (existing && !UPDATE) {
        b.skipped++;
        continue;
      }
      await prisma.siteSetting.upsert({
        where: { key },
        create: { key, value },
        update: UPDATE ? { value } : {},
      });
      b.imported++;
    } catch (e) {
      b.failed++;
      b.errors.push(`${key}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
  const sb = bucket("homepage_sections");
  for (const [i, key] of HOMEPAGE_SECTION_KEYS.entries()) {
    try {
      if (!RUN) {
        sb.imported++;
        continue;
      }
      const existing = await prisma.homepageSection.findUnique({ where: { key } });
      if (existing && !UPDATE) {
        sb.skipped++;
        continue;
      }
      await prisma.homepageSection.upsert({
        where: { key },
        create: { key, isVisible: true, sortOrder: i },
        update: {},
      });
      sb.imported++;
    } catch (e) {
      sb.failed++;
      sb.errors.push(`${key}: ${e instanceof Error ? e.message : "unknown"}`);
    }
  }
}

async function main() {
  console.log(
    RUN
      ? `IMPORT ${UPDATE ? "(update existing)" : "(skip existing)"}`
      : "DRY RUN — no writes. Pass --run to import."
  );
  await importCategories();
  await importServices();
  await importProjects();
  await importBlogs();
  await importTestimonials();
  await importFaqs();
  await importSettings();

  let totals = { imported: 0, skipped: 0, failed: 0 };
  for (const [model, r] of Object.entries(report)) {
    totals.imported += r.imported;
    totals.skipped += r.skipped;
    totals.failed += r.failed;
    console.log(
      `${model}: imported=${r.imported} skipped=${r.skipped} failed=${r.failed}`
    );
    for (const e of r.errors.slice(0, 10)) console.log(`  ! ${e}`);
  }
  console.log(
    `TOTAL: imported=${totals.imported} skipped=${totals.skipped} failed=${totals.failed}`
  );
  if (!RUN) console.log("Static files untouched. Re-run with --run to write.");
}

try {
  await main();
} catch (e) {
  console.error(`FATAL: ${e instanceof Error ? e.message : "unknown"}`);
  process.exitCode = 1;
} finally {
  await prisma.$disconnect();
}

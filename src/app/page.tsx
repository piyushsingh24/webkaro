import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Process from "@/components/sections/Process";
import ExpertCommunity from "@/components/sections/ExpertCommunity";
import Statistics from "@/components/sections/Statistics";
import FoundersSection from "@/components/sections/FoundersSection";
import Testimonials from "@/components/sections/Testimonials";
import TechnologyStack from "@/components/sections/TechnologyStack";
import FAQPreview from "@/components/sections/FAQPreview";
import FinalCTA from "@/components/sections/FinalCTA";
import { getSiteSettings, asSlugList, getHomepageSections } from "@/lib/cms/settings";
import { listPublishedServices, listServiceCategories } from "@/lib/cms/services";
import { listPublishedProjects } from "@/lib/cms/projects";
import {
  listFeaturedTestimonials,
  listPublishedFaqs,
} from "@/lib/cms/content";

export const metadata: Metadata = {
  title: "Web Design Agency in Delhi | Webkaro",
  description: "Custom web design & development in Delhi. We build fast, conversion-focused websites for startups & businesses.",
  keywords: [
    "MERN stack developer",
    "Next.js development studio",
    "custom web applications Noida",
    "premium digital experiences",
    "startup engineering team",
    "web design agency Delhi",
    "website development Delhi",
  ],

  verification: {
    google: "a02zrNgd7cZycONHIRJnFCcigBIAx5jMcimO9wqvHQ8",
  },

  openGraph: {
    title: "Best MERN Stack & Next.js Development Partner | Webkaro",
    description:
      "Engineering scalable digital experiences for the modern web with Next.js and MERN stack.",
  },
  alternates: {
    canonical: "/",
  },
};

/** Order a full list by an admin slug/id selection (selection order kept). */
function applySelection<T>(all: T[], selection: string[], keyOf: (t: T) => string): T[] {
  if (selection.length === 0) return all;
  const byKey = new Map(all.map((t) => [keyOf(t), t]));
  const picked = selection
    .map((k) => byKey.get(k))
    .filter((t): t is T => Boolean(t));
  return picked.length > 0 ? picked : all;
}

export default async function Home() {
  const [settings, sections, services, categories, projects, testimonials, faqs] =
    await Promise.all([
      getSiteSettings(),
      getHomepageSections(),
      listPublishedServices(),
      listServiceCategories(),
      listPublishedProjects(),
      listFeaturedTestimonials(8),
      listPublishedFaqs(),
    ]);

  const homeServices = applySelection(
    services,
    asSlugList(settings.featured_services),
    (s) => s.id
  );
  const homeProjects = applySelection(
    projects,
    asSlugList(settings.featured_projects),
    (p) => p.slug
  ).slice(0, 3);
  const homeTestimonials = applySelection(
    testimonials,
    asSlugList(settings.featured_testimonials),
    (t) => t.id
  );
  const homeFaqs = applySelection(
    faqs,
    asSlugList(settings.faq_selection),
    (f) => f.slug
  );

  const blocks: Record<string, React.ReactNode> = {
    hero: (
      <Hero
        content={{
          headline: settings.hero_headline,
          description: settings.hero_description,
          primaryCta: {
            text: settings.hero_primary_cta_text,
            url: settings.hero_primary_cta_url,
          },
          secondaryCta: {
            text: settings.hero_secondary_cta_text,
            url: settings.hero_secondary_cta_url,
          },
        }}
      />
    ),
    services: <ServicesOverview services={homeServices} categories={categories} />,
    projects: <FeaturedProjects projects={homeProjects} />,
    process: <Process />,
    why: <ExpertCommunity />,
    statistics: <Statistics />,
    founders: <FoundersSection />,
    testimonials: <Testimonials testimonials={homeTestimonials} />,
    tech: <TechnologyStack />,
    faq: <FAQPreview faqs={homeFaqs} />,
    cta: (
      <FinalCTA
        source="homepage-quote"
        contact={{ email: settings.contact_email, phone: settings.contact_phone }}
      />
    ),
  };

  const visible = sections
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .filter((s) => s.isVisible && blocks[s.key]);

  return <>{visible.map((s) => <div key={s.key}>{blocks[s.key]}</div>)}</>;
}

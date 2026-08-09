import { services, getServiceById } from "@/data/services";
import { notFound } from "next/navigation";
import { Check, Clock, Tag, ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";
import { ServiceIcon } from "@/components/ui/service-icon";
import type { Metadata } from "next";

/* ---- Static params for all 6 service routes ---- */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.id }));
}

/* ---- Dynamic metadata ---- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) return { title: "Service Not Found" };

  const title = service.seoTitle || `${service.title} | WebKaro`;
  const description = service.seoDescription || service.shortDescription;

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://webkaro.in/services/${slug}`,
      siteName: "Webkaro Studio",
      images: [{ url: "/logo.png", alt: "Webkaro Studio" }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  /* Other services for the "Explore more" strip */
  const others = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="pt-36 md:pt-44 pb-0">

      {/* ---- Hero ---- */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          {/* Back breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            All Services
          </Link>

          <div className="flex items-start gap-6 mb-8">
            {/* Icon badge */}
            <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} border border-primary/20`}>
              <ServiceIcon name={service.icon} className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-2">
                WebKaro Service
              </p>
              <h1 className="text-4xl md:text-6xl font-black text-foreground font-outfit leading-tight">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-foreground/65 text-lg md:text-xl max-w-3xl leading-relaxed">
            {service.description}
          </p>

          {/* Price & Timeline chips */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-bold text-sm">
              <Tag className="w-4 h-4" /> {service.price}
            </span>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 border border-border text-foreground/70 font-semibold text-sm">
              <Clock className="w-4 h-4" /> {service.timeline}
            </span>
          </div>
        </div>
      </section>

      {/* ---- Content Grid (Features & Deliverables) ---- */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Features */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground font-outfit mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-base">01</span>
                </div>
                Key Features
              </h2>
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card dark:bg-white/[0.01] hover:border-primary/20 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/75 font-medium text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-foreground font-outfit mb-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-base">02</span>
                </div>
                Deliverables
              </h2>
              <div className="space-y-4">
                {service.deliverables.map((deliverable, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card dark:bg-white/[0.01] hover:border-primary/20 transition-all group"
                  >
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary/70" />
                    </div>
                    <span className="text-foreground/75 font-medium text-sm leading-relaxed">
                      {deliverable}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Why Choose This Stack ---- */}
      {service.whyChoosePoints && (
        <section className="px-6 mb-20 md:mb-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-12 text-center">
              Why Choose {service.title.split(" ")[0]}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.whyChoosePoints.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card dark:bg-white/[0.01]"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-primary font-bold text-xs">{i + 1}</span>
                  </div>
                  <p className="text-foreground/75 font-medium text-sm leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Tech Stack Details ---- */}
      {service.techStackDetails && (
        <section className="px-6 mb-20 md:mb-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-4">
              Technology Stack
            </h2>
            <p className="text-foreground/60 text-lg mb-12 max-w-3xl">
              We use battle-tested technologies to build scalable, maintainable applications.
            </p>
            <div className="space-y-6">
              {service.techStackDetails.map((tech, i) => (
                <div
                  key={i}
                  className="border border-border rounded-2xl p-6 bg-card dark:bg-white/[0.01]"
                >
                  <h3 className="text-xl font-bold text-foreground font-outfit mb-3">
                    {tech.name}
                  </h3>
                  <p className="text-foreground/65 text-sm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Process & Timeline ---- */}
      {service.processSteps && (
        <section className="px-6 mb-20 md:mb-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-12">
              Our Development Process
            </h2>
            <div className="space-y-6">
              {service.processSteps.map((step, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-6 rounded-2xl border border-border bg-card dark:bg-white/[0.01]"
                >
                  <div className="w-16 h-16 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <span className="text-primary font-black text-xs">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-foreground font-outfit mb-1">
                      {step.title}
                    </h3>
                    <p className="text-foreground/65 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Case Study ---- */}
      {service.caseStudy && (
        <section className="px-6 mb-20 md:mb-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-8">
              Case Study: {service.caseStudy.project}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-foreground font-outfit mb-2">The Challenge</h3>
                <p className="text-foreground/65 leading-relaxed">
                  {service.caseStudy.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground font-outfit mb-2">Our Solution</h3>
                <p className="text-foreground/65 leading-relaxed">
                  {service.caseStudy.solution}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground font-outfit mb-2">The Results</h3>
                <p className="text-foreground/65 leading-relaxed">
                  {service.caseStudy.results}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ---- FAQ ---- */}
      {service.faqs && (
        <section className="px-6 mb-20 md:mb-28">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border border-border rounded-2xl p-6 bg-card dark:bg-white/[0.01] open:bg-primary/5 open:border-primary/20 transition-all"
                >
                  <summary className="flex items-center gap-4 cursor-pointer list-none">
                    <span className="text-primary font-black text-xs w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      Q
                    </span>
                    <span className="text-lg font-bold text-foreground font-outfit group-open:text-primary transition-colors">
                      {faq.question}
                    </span>
                  </summary>
                  <div className="mt-4 pl-10">
                    <p className="text-foreground/65 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---- Why choose us banner ---- */}
      <section className="px-6 mb-20 md:mb-28">
        <div className="max-w-5xl mx-auto">
          <div className={`relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br ${service.color} border border-primary/20`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full" />
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-black text-foreground font-outfit mb-4">
                Ready to get started?
              </h2>
              <p className="text-foreground/70 text-base md:text-lg max-w-xl mb-8">
                Let's discuss your project requirements. Book a free 30-min consultation and we'll put together a tailored proposal.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-105 transition-all"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-xl font-semibold text-foreground/70 hover:border-primary/50 hover:text-primary transition-all text-sm"
                >
                  Browse All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Explore more services ---- */}
      <section className="px-6 mb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-black text-foreground font-outfit mb-8">
            Explore More Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card dark:bg-white/[0.02] hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.color}`}>
                  <ServiceIcon name={s.icon} className="w-6 h-6 text-primary/70" />
                </div>
                <div>
                  <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{s.title}</p>
                  <p className="text-xs text-foreground/50 mt-0.5">{s.price}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-primary ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

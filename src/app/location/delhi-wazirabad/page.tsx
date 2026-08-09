import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin, Phone, Clock, Check } from "lucide-react";
import type { ReactNode } from "react";
import { createMetadata, siteUrl } from "@/lib/seo";

export const metadata: Metadata = createMetadata("/location/delhi-wazirabad", {
  title: "Web Design Agency in Delhi | Wazirabad | Webkaro Studio",
  description: "Premium web design & MERN stack development studio in Wazirabad, Delhi NCR. Custom websites, SaaS apps, and digital products. Free consultation today.",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness-delhi`,
  "name": "Webkaro Studio",
  "image": `${siteUrl}/logo.png`,
  "telephone": "+91-7048903201",
  "url": `${siteUrl}/location/delhi-wazirabad`,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Sovia Vihar 3rd Pusta",
    "addressLocality": "Wazirabad",
    "addressRegion": "Delhi",
    "postalCode": "110094",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.7041,
    "longitude": 77.1025,
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00",
  },
  "priceRange": "₹₹₹",
  "areaServed": ["Delhi", "Wazirabad", "North Delhi", "NCR"],
  "serviceType": "Web Design Agency, MERN Stack Development, SaaS Development",
};

export default function DelhiLocationPage() {
  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-5xl mx-auto px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-black text-foreground font-outfit leading-tight mb-6">
            Web Design Agency in <span className="text-primary">Wazirabad, Delhi</span>
          </h1>
          <p className="text-foreground/65 text-lg md:text-xl leading-relaxed max-w-3xl mb-8">
            Webkaro is a premium web design and MERN stack development studio based in
            Wazirabad, Delhi NCR. We build high-performance websites, SaaS applications,
            and digital products for startups and businesses across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-105 transition-all"
            >
              Book Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Address & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground font-outfit mb-2">Our Studio</h3>
              <p className="text-foreground/65 leading-relaxed">
                Sovia Vihar 3rd Pusta<br />
                Wazirabad, Delhi 110094<br />
                India
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground font-outfit mb-2">Contact</h3>
              <p className="text-foreground/65 leading-relaxed">
                +91-7048903201<br />
                Mon – Fri, 9 AM – 6 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Why hire a local Delhi agency */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-8">
            Why Choose a Delhi-Based Web Design Agency?
          </h2>
          <div className="space-y-4">
            {[
              "Local presence — meet in person or video call in your timezone",
              " Hindi + English communication for clearer project alignment",
              " Lower costs than Western agencies (up to 60% savings)",
              " Faster iteration cycles with same-day response times",
              " Deep understanding of the Indian market and user behaviour",
            ].map((benefit, i) => (
              <div key={i} className="flex items-start gap-4">
                <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground/70 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services in Delhi */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-8">
            Our Services in Delhi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Website Design & Development", desc: "Custom websites built for speed, SEO, and conversions." },
              { title: "MERN Stack Application Development", desc: "Full-stack JavaScript applications for startups and enterprises." },
              { title: "SaaS Product Development", desc: "From MVP to scale — end-to-end SaaS product engineering." },
              { title: "Website Redesign", desc: "Modernize your existing site with 301-safe SEO migration." },
            ].map((service, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 bg-card dark:bg-white/[0.01]">
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-foreground font-outfit mb-8">
            Frequently Asked Questions — Delhi Clients
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What areas of Delhi do you serve?",
                a: "We serve all of Delhi NCR including Wazirabad, North Delhi, South Delhi, East Delhi, West Delhi, and surrounding NCR cities like Gurgaon and Noida.",
              },
              {
                q: "How much does a website cost in Delhi?",
                a: "Static websites start at ₹50,000. Custom web applications and MERN stack projects start at ₹12 lakhs for an MVP. Get a free quote via our contact form.",
              },
              {
                q: "Can I meet you in person in Delhi?",
                a: "Yes. We're based in Wazirabad, Delhi and offer in-person consultations for Delhi-based clients. Call us at +91-7048903201 to schedule a meeting.",
              },
            ].map((faq, i) => (
              <div key={i} className="border border-border rounded-2xl p-6 bg-card dark:bg-white/[0.01]">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/65 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-16 border-t border-border">
          <h2 className="text-2xl font-black text-foreground font-outfit mb-4">
            Ready to build your next project in Delhi?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-105 transition-all"
          >
            Start Your Project <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

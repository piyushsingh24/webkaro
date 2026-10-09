"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { collectAttribution } from "@/lib/attribution";
import TurnstileWidget from "@/components/forms/TurnstileWidget";

const PROJECT_TYPE_LABELS: Record<string, string> = {
  "web-dev": "Web Development",
  saas: "SaaS MVP",
  "ui-ux": "UI/UX Design",
  integration: "API Integration",
};

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [captchaConfigured, setCaptchaConfigured] = useState<boolean | null>(null);
  const [captchaReset, setCaptchaReset] = useState(0);
  // Spam time-trap: bots submit instantly, humans take seconds.
  const mountedAt = useRef<number>(Date.now());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const projectType = String(formData.get("project_type") ?? "web-dev");
    const message = String(formData.get("message") ?? "").trim();

    if (captchaConfigured === true && !turnstileToken) {
      setError("Please complete the captcha verification.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Primary pipeline: CRM lead (server optionally forwards to Web3Forms
      // behind WEB3FORMS_FORWARD_ENABLED — no duplicate notifications).
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          serviceInterest: PROJECT_TYPE_LABELS[projectType] ?? projectType,
          projectDescription: message,
          source: "contact-page",
          turnstileToken: turnstileToken ?? undefined,
          website: String(formData.get("website") ?? ""),
          filledAt: mountedAt.current,
          ...collectAttribution(),
        }),
      });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (response.ok && result.ok) {
        setIsSuccess(true);
        setTurnstileToken(null);
        setCaptchaReset((n) => n + 1);
      } else {
        throw new Error(result.error || "Something went wrong");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative" style={{ backgroundColor: '#FAF8F5' }}>
      {/* Header */}
      <section className="content-container pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-6" style={{ color: '#2563EB' }}>
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
            Contact Us
          </h1>
          <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: '#656565' }}>
            Ready to scale? Our collective is here to help you build performance-first digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="content-container pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Side */}
          <div className="space-y-6">
            <div className="p-8 md:p-10 rounded-2xl border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
              <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email Us", value: "info@webkaro.in" },
                  { icon: Phone, label: "Call Us", value: "+91 70489 03201", sub: "Mon-Fri: 10AM - 7PM" },
                  { icon: MapPin, label: "Our Location", value: "Sovia Vihar 3rd Pusta Delhi, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border" style={{ backgroundColor: '#F4F7F1', borderColor: 'rgba(0,0,0,0.06)' }}>
                      <item.icon className="w-5 h-5" style={{ color: '#2563EB' }} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-semibold mb-1" style={{ color: '#888888' }}>{item.label}</h4>
                      <p className="text-sm" style={{ color: '#1B1B1B' }}>{item.value}</p>
                      {item.sub && <p className="text-xs mt-0.5" style={{ color: '#888888' }}>{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-2xl border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
              <h4 className="text-base font-semibold mb-3" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                Book a Strategy Call
              </h4>
              <p className="text-xs leading-relaxed mb-6" style={{ color: '#888888' }}>
                Prefer a face-to-face conversation? Schedule a 15-minute strategy call with one of our collective leads.
              </p>
              <Link href="#" className="inline-flex items-center gap-2 text-xs font-semibold transition-colors duration-300" style={{ color: '#2563EB' }}>
                Schedule on Calendly <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Form Side */}
          <div>
            {isSuccess ? (
              <div className="p-10 md:p-16 rounded-3xl border text-center h-full flex flex-col justify-center items-center" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#F4F7F1' }}>
                  <CheckCircle2 className="w-8 h-8" style={{ color: '#2563EB' }} />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
                  Message Sent!
                </h3>
                <p className="text-sm leading-relaxed max-w-sm mx-auto mb-8" style={{ color: '#888888' }}>
                  Our collective has received your request. One of our experts will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-8 py-3.5 rounded-2xl text-white text-sm font-semibold transition-all duration-300 hover:translate-y-[-1px]"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl border space-y-6" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.06)' }}>
                {/* Honeypot: invisible to humans, bots fill it in. */}
                <input type="text" name="website" autoComplete="off" tabIndex={-1} aria-hidden="true" className="hidden" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Full Name</label>
                    <input required name="name" type="text" placeholder="John Doe" maxLength={150} className="w-full h-12 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }} />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Email Address</label>
                    <input required name="email" type="email" placeholder="john@example.com" maxLength={254} className="w-full h-12 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }} />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Phone (optional)</label>
                  <input name="phone" type="tel" placeholder="+91 98765 43210" maxLength={30} className="w-full h-12 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }} />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Project Type</label>
                  <select name="project_type" className="w-full h-12 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none appearance-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }}>
                    <option value="web-dev">Web Development</option>
                    <option value="saas">SaaS MVP</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="integration">API Integration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Your Message</label>
                  <textarea required name="message" rows={5} placeholder="Tell us about your project goals..." maxLength={5000} className="w-full p-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none resize-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }}></textarea>
                </div>

                {error && (
                  <p role="alert" className="text-sm font-medium" style={{ color: '#991B1B' }}>
                    {error}
                  </p>
                )}

                <TurnstileWidget
                  onVerify={(token) => setTurnstileToken(token)}
                  onConfigured={(ok) => setCaptchaConfigured(ok)}
                  resetSignal={captchaReset}
                />

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full h-12 rounded-2xl text-white text-sm font-semibold transition-all duration-300 hover:translate-y-[-1px] disabled:opacity-50"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="w-4 h-4 inline-block ml-2" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

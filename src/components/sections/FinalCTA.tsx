"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, Globe, MapPin, Send, ArrowRight, CheckCircle2, Facebook } from "lucide-react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { theme } = useTheme();

  const benefits = [
    "Free consultation with senior engineers",
    "Custom proposal within 24 hours",
    "No commitment required",
    "Transparent pricing & timeline",
  ];

  const contactInfo = [
    { icon: Phone, label: "+91 70489 03201", href: "tel:+917048903201" },
    { icon: Mail, label: "info@webkaro.in", href: "mailto:info@webkaro.in" },
    { icon: Globe, label: "webkaro.in", href: "https://www.webkaro.in" },
    { icon: MapPin, label: "Delhi, India", href: "https://maps.app.goo.gl/M3aJuqSq4LnDk8YFA" },
    { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/webkaroin?rdid=vfxCLBpCfatrQE44&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DffZdE9FX%23" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", { duration: 4000, position: 'top-right' });
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number", { duration: 4000, position: 'top-right' });
      return;
    }
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA", { duration: 4000, position: 'top-right' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New Consultation Request from Webkaro",
          from_name: "Webkaro Studio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Thank you! We'll contact you within 24 hours.", {
          duration: 5000, position: 'top-right',
              style: { backgroundColor: '#2563EB', color: '#fff' }
        });
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
        setRecaptchaToken(null);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.", { duration: 4000, position: 'top-right' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="content-container py-20 md:py-32 lg:py-40">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-6" style={{ color: '#6E8E59' }} />
            <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Message received
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#656565' }}>
              We&apos;ll get back to you within 24 hours. In the meantime, feel free to explore our case studies.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#FAF8F5' }}>
      <div className="content-container py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: '#2563EB' }}>
              Get in Touch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)', color: '#1B1B1B' }}>
              Let&apos;s build something that lasts.
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-10" style={{ color: '#656565' }}>
              Tell us about your project. We&apos;ll reply with a tailored proposal and timeline—no templates, no hard sells.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: '#6E8E59' }} />
                  <span className="text-sm" style={{ color: '#656565' }}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="flex items-center gap-3 text-sm transition-colors duration-300 hover:text-[#6E8E59]"
                  style={{ color: '#888888' }}
                >
                  <item.icon className="w-4 h-4" style={{ color: '#6E8E59' }} />
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl border" style={{ 
              backgroundColor: '#FFFFFF',
              borderColor: 'rgba(0,0,0,0.06)',
              boxShadow: '0 8px 24px -8px rgba(0,0,0,0.06), 0 16px 48px -16px rgba(0,0,0,0.08)'
            }}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full h-14 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(0,0,0,0.06)',
                      color: '#1B1B1B'
                    }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full h-14 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(0,0,0,0.06)',
                      color: '#1B1B1B'
                    }}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="98765 43210"
                    className="w-full h-14 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FAF8F5',
                      borderColor: 'rgba(0,0,0,0.06)',
                      color: '#1B1B1B'
                    }}
                    required
                  />
                </div>
                <div className="flex justify-center pt-2">
                  <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={(token: string | null) => setRecaptchaToken(token)}
                    theme={theme === "dark" ? "dark" : "light"}
                  />
                </div>
                <MagnetizeButton
                  type="submit"
                  disabled={isSubmitting}
                  particleCount={12}
                  className="w-full h-14 rounded-2xl text-base font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      Get a Free Quote
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </MagnetizeButton>
                <p className="text-center text-[10px] leading-relaxed pt-2" style={{ color: '#888888' }}>
                  By clicking above, you agree to our Terms of Use and Privacy Policy.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Star, Phone, Mail, Globe, MapPin, Send } from "lucide-react";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useTheme } from "next-themes";
import { MagnetizeButton } from "@/components/ui/magnetize-button";

export default function FinalCTA() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address", {
        duration: 4000,
        position: 'top-right',
      });
      return;
    }
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit Indian mobile number", {
        duration: 4000,
        position: 'top-right',
      });
      return;
    }
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA", {
        duration: 4000,
        position: 'top-right',
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          ...formData,
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: "New Consultation Request from Webkaro",
          from_name: "Webkaro Studio",
        })
      });

      const result = await response.json();

      if (result.success) {
        toast.success("✓ Thank you! We'll contact you within 24 hours", {
          duration: 5000,
          position: 'top-right',
          style: {
            background: '#10B981',
            color: '#fff',
          }
        });
        setFormData({ name: "", email: "", phone: "" });
        setRecaptchaToken(null);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("❌ Something went wrong. Please try again", {
        duration: 4000,
        position: 'top-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-background transition-colors duration-500 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1000px] h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-60 dark:opacity-80" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left Column: Info & Testimonial */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-7xl font-black text-foreground tracking-tighter font-outfit uppercase leading-[1.1]">
            Get a Free <span className="text-primary italic">Consultation.</span>
          </h2>

          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-muted-foreground font-medium font-outfit">
              Discuss your project with our <span className="text-foreground dark:text-white underline decoration-primary decoration-2 underline-offset-8">startup experts.</span>
            </p>
            <p className="text-sm md:text-base text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed italic">
              Our team of engineering specialists has helped 100+ brands boost their digital traffic and sales through high-performance solutions.
            </p>
          </div>



          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 opacity-80 dark:opacity-60">

            {/* Phone */}
            <a
              href="tel:+917048903201"
              className="flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +91 70489 03201
            </a>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJvkXwPhTZZdSDTrRrvMcvWTxSfztXNVGffnJCllGGJgncZznPQkcDvglhQKkNKPsDrnCJB"
              className="flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              info@webkaro.in
            </a>

            {/* Website */}
            <a
              href="https://webkaro.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors"
            >
              <Globe className="w-4 h-4 text-primary" />
              webkaro.in
            </a>

            {/* Location */}
            <a
              href="https://maps.app.goo.gl/M3aJuqSq4LnDk8YFA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[10px] font-black uppercase text-foreground dark:text-white tracking-widest hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              Sovia Vihar 3rd Pusta Delhi, India
            </a>

          </div>

          {/* Country Flags Row */}
          <div className="flex flex-wrap gap-4 mt-12">
            {[
              "https://flagcdn.com/in.svg",
              "https://flagcdn.com/us.svg",
              "https://flagcdn.com/gb.svg",
              "https://flagcdn.com/ca.svg",
              "https://flagcdn.com/au.svg",
            ].map((flag, idx) => (
              <img
                key={idx}
                src={flag}
                alt={`Global clients from ${flag.split('/').pop()?.split('.')[0].toUpperCase() || 'Webkaro trusted regions'}`}
                className="h-5 md:h-6 w-auto rounded-sm 
                   opacity-30 grayscale saturate-0 
                   hover:opacity-100 hover:grayscale-0 hover:saturate-100 
                   transition-all duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="relative z-10 mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-14 rounded-[3rem] border-white/5 bg-white/[0.03] shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
              <div className="relative group">
                <label htmlFor="name-input" className="absolute left-8 top-3 text-[10px] font-black uppercase text-foreground/60 dark:text-white/40 tracking-widest cursor-pointer group-focus-within:text-primary transition-colors">Your Name</label>
                <input
                  id="name-input"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full h-16 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl px-8 pt-5 text-foreground dark:text-white font-bold focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-outfit shadow-sm"
                  aria-label="Your full name"
                  required
                />
              </div>
              <div className="relative group">
                <label htmlFor="email-input-footer" className="absolute left-8 top-3 text-[10px] font-black uppercase text-foreground/60 dark:text-white/40 tracking-widest cursor-pointer group-focus-within:text-primary transition-colors">Your Email</label>
                <input
                  id="email-input-footer"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full h-16 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl px-8 pt-5 text-foreground dark:text-white font-bold focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-outfit shadow-sm"
                  aria-label="Your email address"
                  required
                />
              </div>
              <div className="relative group">
                <label htmlFor="phone-input" className="absolute left-8 top-3 text-[10px] font-black uppercase text-foreground/60 dark:text-white/40 tracking-widest cursor-pointer group-focus-within:text-primary transition-colors">Phone Number</label>
                <input
                  id="phone-input"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="98765 43210"
                  className="w-full h-16 bg-background dark:bg-white/5 border border-border dark:border-white/10 rounded-2xl px-8 pt-5 text-foreground dark:text-white font-bold focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all font-outfit shadow-sm"
                  aria-label="Your 10-digit mobile number"
                  required
                />
              </div>
              <div className="flex justify-center scale-[0.8] sm:scale-90 md:scale-100 origin-center">
                <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={(token: string | null) => setRecaptchaToken(token)}
                  theme={theme === "dark" ? "dark" : "light"}
                />
              </div>
              <MagnetizeButton
                type="submit"
                disabled={isSubmitting}
                particleCount={16}
                className="w-full h-16 rounded-2xl font-black text-lg md:text-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Get a Free Quote</span>
                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </MagnetizeButton>
              <p className="text-center text-muted-foreground/30 text-[10px] md:text-xs font-bold leading-relaxed">
                By clicking the button above, you agree to our Terms of Use and Privacy Policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

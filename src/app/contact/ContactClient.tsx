"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-44 pb-24">
      {/* Header */}
      <section className="px-6 mb-24 text-center">
        <div className="max-w-7xl mx-auto">
          <p className="text-primary text-sm font-bold uppercase tracking-[0.3em] mb-4">
            Get in Touch
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-8 font-outfit">
            Let's Start Your <br />
            <span className="text-gradient">Next Project.</span>
          </h1>
          <p className="text-foreground/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to scale? Our collective is here to help you build
            performance-first digital experiences.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="glass p-10 rounded-[3rem] border-border dark:border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-8 font-outfit">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Email Us</h4>
                    <p className="text-foreground/60 text-sm">info@webkaro.in</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Call Us</h4>
                    <p className="text-foreground/60 text-sm">+91 70489 03201</p>
                    <p className="text-foreground/60 text-sm">Mon-Fri: 10AM - 7PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold mb-1">Our Location</h4>
                    <p className="text-foreground/60 text-sm">Sovia Vihar 3rd Pusta Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem] border-border dark:border-accent/20 bg-gradient-to-br from-accent/5 to-transparent">
              <h4 className="text-xl font-bold text-foreground mb-4 font-outfit">Book a Strategy Call</h4>
              <p className="text-foreground/60 text-sm leading-relaxed mb-8">
                Prefer a face-to-face conversation? Schedule a 15-minute strategy call with
                one of our collective leads.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all"
              >
                Schedule on Calendly <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative">
            {isSuccess ? (
              <div className="glass p-12 md:p-20 rounded-[4rem] text-center border-green-500/20 h-full flex flex-col justify-center items-center">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4 font-outfit">Message Sent!</h3>
                <p className="text-foreground/60 text-lg leading-relaxed max-w-sm mx-auto">
                  Our collective has received your request. One of our experts will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-10 px-10 py-5 bg-primary text-white rounded-full font-bold hover:scale-105 transition-transform shadow-xl shadow-primary/20"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass p-10 md:p-16 rounded-[4rem] border-border dark:border-primary/20 space-y-8 bg-gradient-to-br from-background/50 to-transparent shadow-premium"
              >
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 text-left">
                    <label className="text-foreground/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest pl-2">Full Name</label>
                    <input
                      required
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-primary/5 dark:bg-black/40 border border-border dark:border-white/10 rounded-2xl px-6 py-5 text-foreground dark:text-white focus:border-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-4 text-left">
                    <label className="text-foreground/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest pl-2">Email Address</label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-primary/5 dark:bg-black/40 border border-border dark:border-white/10 rounded-2xl px-6 py-5 text-foreground dark:text-white focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-4 text-left">
                  <label className="text-foreground/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest pl-2">Project Type</label>
                  <select
                    name="project_type"
                    className="w-full bg-primary/5 dark:bg-black/40 border border-border dark:border-white/10 rounded-2xl px-6 py-5 text-foreground dark:text-white focus:border-primary outline-none transition-all appearance-none"
                  >
                    <option value="web-dev">Web Development</option>
                    <option value="saas">SaaS MVP</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="integration">API Integration</option>
                  </select>
                </div>

                <div className="space-y-4 text-left">
                  <label className="text-foreground/60 dark:text-white/60 text-xs font-bold uppercase tracking-widest pl-2">Your Message</label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project goals..."
                    className="w-full bg-primary/5 dark:bg-black/40 border border-border dark:border-white/10 rounded-2xl px-6 py-5 text-foreground dark:text-white focus:border-primary outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full py-6 bg-primary text-white rounded-[2rem] font-black text-lg shadow-2xl shadow-primary/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="w-5 h-5" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

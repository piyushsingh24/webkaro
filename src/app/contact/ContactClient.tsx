"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
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
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Full Name</label>
                    <input required name="name" type="text" placeholder="John Doe" className="w-full h-12 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }} />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-semibold mb-2" style={{ color: '#888888' }}>Email Address</label>
                    <input required name="email" type="email" placeholder="john@example.com" className="w-full h-12 px-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }} />
                  </div>
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
                  <textarea required name="message" rows={5} placeholder="Tell us about your project goals..." className="w-full p-5 rounded-2xl border text-sm transition-all duration-300 focus:outline-none resize-none" style={{ backgroundColor: '#FAF8F5', borderColor: 'rgba(0,0,0,0.06)', color: '#1B1B1B' }}></textarea>
                </div>

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

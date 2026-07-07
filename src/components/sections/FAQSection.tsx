"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Why do you use Next.js for everything?",
    answer: "Next.js provides the best balance of developer velocity and end-user performance. With features like Server Components, edge caching, and built-in image optimization, it is objectively the fastest stack for real-world business applications today."
  },
  {
    question: "Do I get ownership of the source code?",
    answer: "Absolutely. Once the project is delivered and paid for, you have 100% intellectual property ownership of the source code. We hand over the GitHub repository and all related assets."
  },
  {
    question: "How do you handle maintenance after launch?",
    answer: "We offer maintenance packages starting at ₹5,000/month. This includes 24/7 monitoring, regular dependency updates, security patches, and a dedicated monthly hour for minor tweaks."
  },
  {
    question: "Can you help with AWS/Vercel deployment?",
    answer: "Yes. DevOps and cloud orchestration are part of our core offering. We set up automated CI/CD pipelines so your site updates automatically whenever we push code to the repository."
  },
  {
    question: "Do you sign NDAs for startup ideas?",
    answer: "Yes, we regularly sign NDAs with founders. We take project confidentiality and data security very seriously."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding relative">
      <div className="content-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="lg:sticky lg:top-32">
            <h2 className="h2 mb-8">Got Questions?</h2>
            <p className="text-white/60 text-lg mb-12 max-w-md leading-relaxed">
              We believe in total transparency. If your question isn&apos;t covered here, feel free to reach out via WhatsApp or email.
            </p>
            
            <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/20">
                <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Urgent Query?</p>
                <p className="text-white/80 font-medium mb-6">Our lead engineer usually replies within 2 hours on WhatsApp.</p>
                <a href="#" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-xs hover:gap-4 transition-all">
                    Chat Now On WhatsApp →
                </a>
            </div>
          </div>

          <Accordion>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <AccordionItem title={faq.question}>
                  {faq.answer}
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

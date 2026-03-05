import { faqs } from "@/data/faq";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return faqs.map((faq) => ({
    slug: faq.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const faq = faqs.find((f) => f.slug === slug);

  if (!faq) return { title: "FAQ Not Found" };

  return {
    title: `${faq.question} | Webkaro FAQ`,
    description: faq.answer,
  };
}

export default async function FAQDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const faq = faqs.find((f) => f.slug === slug);

  if (!faq) {
    notFound();
  }

  // Find other FAQs for the sidebar/bottom
  const otherFaqs = faqs.filter((f) => f.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />

      <div className="container max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-12 animate-fade-in">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground truncate max-w-[200px]">{faq.question}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-primary text-[10px] md:text-xs font-black uppercase tracking-widest hover:gap-3 transition-all mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> Back to all questions
            </Link>

            <h1 className="h1 mb-8 leading-[1.2] text-foreground font-outfit">
              {faq.question}<span className="text-primary">.</span>
            </h1>

            <div className="max-w-none">
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl">
                <p className="text-lg md:text-xl text-foreground font-medium mb-8 leading-relaxed opacity-90">
                  {faq.answer}
                </p>
                <div className="h-px w-full bg-border/50 my-8" />
                <div className="text-muted-foreground leading-relaxed text-base md:text-lg space-y-6 whitespace-pre-line font-outfit">
                  {faq.details}
                </div>
              </div>
            </div>

            {/* Mobile/Tablet: Other questions move here */}
            <div className="lg:hidden mt-16">
              <h3 className="text-xl font-bold mb-6 font-outfit">Related Questions</h3>
              <div className="space-y-4">
                {otherFaqs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/faq/${item.slug}`}
                    className="block p-6 bg-card hover:bg-primary/5 border border-border hover:border-primary/20 rounded-2xl transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm md:text-base group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-32 h-fit">
            <div className="space-y-8">
              {/* Help Card */}
              <div className="bg-primary p-8 rounded-3xl text-primary-foreground shadow-premium relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <MessageCircle className="w-10 h-10 mb-6" />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4 font-outfit leading-tight">
                  Still have <br /> questions?
                </h3>
                <p className="text-primary-foreground/80 mb-8 text-sm leading-relaxed">
                  Our engineering experts are ready to help you with your specific technical requirements.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-4 bg-white text-primary font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white/90 transition-all active:scale-95 shadow-lg"
                >
                  Contact Us
                </Link>
              </div>

              {/* Other Questions */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground px-2">
                  More Questions
                </h4>
                {otherFaqs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/faq/${item.slug}`}
                    className="flex flex-col gap-2 p-5 bg-card/30 hover:bg-card border border-border/50 hover:border-primary/30 rounded-2xl transition-all group"
                  >
                    <span className="text-sm font-bold leading-tight group-hover:text-primary transition-colors">
                      {item.question}
                    </span>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

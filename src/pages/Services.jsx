import { Link, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../data/services";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card";
import SEO from "../components/SEO";

const Services = () => {
  const location = useLocation();

  return (
    <div className="w-full overflow-x-hidden">
      <SEO
        title="Services - Web Design, Development & Branding"
        description="Explore our range of digital services including custom web development, UI/UX design, branding, and SEO. Tailored solutions for your business growth."
        keywords="web design services, custom web development, branding agency, SEO services, digital marketing"
        canonical="/services"
        location={location.pathname}
      />

      {/* HERO */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-xs sm:text-sm tracking-wide rounded-full bg-white/10 backdrop-blur">
              WHAT I DO
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Services That{" "}
              <span className="text-[#4DFFF3]">Drive Results</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200">
              End-to-end web solutions crafted for startups, founders, and
              growing businesses.
            </p>
          </div>
        </div>

        {/* RESPONSIVE GLOW (FIXED) */}
        <div
          className="
            absolute -top-40 left-1/2 -translate-x-1/2
            w-[260px] h-[260px]
            sm:w-[420px] sm:h-[420px]
            lg:w-[600px] lg:h-[600px]
            bg-[#1C7ED6]/20
            blur-[120px]
            pointer-events-none
          "
        />
      </section>

      {/* SERVICES GRID */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 bg-[#020617] text-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.08}>
                <Card className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,126,214,0.25)]">

                  {/* Icon */}
                  <div className="mb-5 sm:mb-6">
                    <service.icon className="text-4xl sm:text-5xl text-[#4DFFF3]" />
                  </div>

                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-xs sm:text-sm font-semibold text-slate-400 mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-300"
                        >
                          <span className="text-[#1C7ED6] mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing + CTA */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-xs sm:text-sm text-slate-400">
                        Starting from
                      </span>
                      <span className="text-lg sm:text-xl font-bold text-[#4DFFF3]">
                        {service.pricingHint}
                      </span>
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C7ED6] px-5 py-3 text-sm sm:text-base font-medium transition-all hover:bg-[#2563EB]"
                    >
                      Learn More <FaArrowRight />
                    </Link>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-28 bg-gradient-to-br from-[#0F172A] to-[#020617] text-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mb-10">
              Let’s discuss your project and build a solution that actually
              matters.
            </p>

            <Link
              to="/get-quote"
              className="inline-flex items-center gap-2 rounded-xl bg-[#4DFFF3] text-[#020617] px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all hover:scale-105"
            >
              Get a Free Consultation <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

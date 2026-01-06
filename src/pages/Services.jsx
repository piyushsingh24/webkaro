import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { services } from "../data/services";
import AnimatedSection from "../components/ui/AnimatedSection";
import Card from "../components/ui/Card";

const Services = () => {
  return (
    <div>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide rounded-full bg-white/10 backdrop-blur">
              WHAT I DO
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Services That <span className="text-[#4DFFF3]">Drive Results</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300">
              End-to-end web solutions crafted for startups, founders, and
              growing businesses.
            </p>
          </div>
        </div>

        {/* soft glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1C7ED6]/20 blur-[120px]" />
      </section>

      {/* SERVICES GRID */}
      <section className="py-28 bg-[#020617] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 0.08}>
                <Card className="group h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(28,126,214,0.25)]">
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <service.icon className="text-5xl text-[#4DFFF3]" />
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-slate-400 mb-3">
                      Key Features
                    </p>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-slate-300"
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
                      <span className="text-sm text-slate-400">
                        Starting from
                      </span>
                      <span className="text-xl font-bold text-[#4DFFF3]">
                        {service.pricingHint}
                      </span>
                    </div>

                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1C7ED6] px-6 py-3 font-medium transition-all hover:bg-[#2563EB]"
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
      <section className="py-28 bg-gradient-to-br from-[#0F172A] to-[#020617] text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg text-slate-300 mb-10">
              Let’s discuss your project and build a solution that actually
              Matter.
            </p>

            <Link
              to="/get-quote"
              className="影视 inline-flex items-center gap-2 rounded-xl bg-[#4DFFF3] text-[#020617] px-8 py-4 font-semibold transition-all hover:scale-105"
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

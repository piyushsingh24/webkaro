import { Link } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import AnimatedSection from "../components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div >
      {/* HERO */}
      <section className="section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-sm tracking-wide rounded-full bg-white/10 backdrop-blur">
              PORTFOLIO
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Work That <span className="text-[#4DFFF3]">Speaks</span> for Itself
            </h1>

            <p className="text-lg md:text-xl text-slate-300">
              Real projects. Measurable impact. Designed to convert and scale.
            </p>
          </div>
        </div>

        {/* Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#1C7ED6]/20 blur-[120px]" />
      </section>

      {/* GRID */}
      <section className="py-28 bg-[#020617] text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolio.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <Link to={`/portfolio/${project.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="group relative overflow-hidden rounded-2xl aspect-[4/3] border border-white/10 bg-white/5 backdrop-blur-xl"
                  >
                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1C7ED6]/30 to-[#4DFFF3]/10 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <span className="text-xs uppercase tracking-wider text-[#4DFFF3] mb-2">
                        {project.category}
                      </span>

                      <h3 className="text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-4">
                        {project.shortDescription}
                      </p>

                      <div className="flex items-center gap-2 text-sm font-semibold text-[#4DFFF3] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <FaArrowRight />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

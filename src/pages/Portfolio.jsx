import { Link, useLocation } from "react-router-dom";
import { portfolio } from "../data/portfolio";
import AnimatedSection from "../components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import SEO from "../components/SEO";

const Portfolio = () => {
  const location = useLocation();
  const cardVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.03,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full overflow-x-hidden">
      <SEO
        title="Portfolio - Our Latest Web Projects"
        description="Browse our portfolio of successful web design and development projects."
        keywords="web design portfolio, development case studies, webkaro projects"
        canonical="/portfolio"
        location={location.pathname}
      />

      {/* HERO */}
      <section className="relative overflow-hidden section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom relative z-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-4 px-4 py-1 text-xs tracking-wide rounded-full bg-white/10 backdrop-blur">
              PORTFOLIO
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Work That <span className="text-[#4DFFF3]">Speaks</span> for Itself
            </h1>

            <p className="text-lg text-slate-200">
              Real projects. Measurable impact. Designed to convert and scale.
            </p>
          </div>
        </div>

        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] lg:w-[650px] h-[300px] sm:h-[500px] lg:h-[650px] bg-[#1C7ED6]/20 blur-[140px]" />
      </section>

      {/* GRID */}
      <section className="py-20 bg-[#020617] text-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.08}>
                <motion.div
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-black border border-white/10 shadow-xl cursor-pointer focus-within:ring-2 focus-within:ring-[#4DFFF3]"
                >
                  {/* Clickable layer */}
                  <Link
                    to={`/portfolio/${project.id}`}
                    aria-label={`View case study for ${project.title}`}
                    className="absolute inset-0 z-10"
                  />

                  {/* Thumbnail */}
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="absolute inset-0 w-full h-full"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Base overlay (always on for readability) */}
                  <div className="absolute inset-0 bg-black/55" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                    <span className="text-xs uppercase tracking-wider text-[#4DFFF3] mb-2">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-bold mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-200 mb-4 opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      {project.shortDescription}
                    </p>

                    <Link
                      to={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DFFF3] opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Case Study <FaArrowRight />
                    </Link>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

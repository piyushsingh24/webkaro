import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { getFeaturedProjects } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';
import { motion } from 'framer-motion';

const PortfolioPreview = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="section-padding bg-main transition-colors duration-300">
      <div className="container-custom">

        {/* Heading */}
        <SectionHeading
          subtitle="Recent Work"
          title="Projects That Made an Impact"
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Link
                to={`/portfolio/${project.id}`}
                aria-label={`View case study for ${project.title}`}
                className="group block"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-black shadow-xl"
                >
                  {/* Thumbnail */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    width="1200"
                    height="900"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Base overlay (always visible) */}
                  <div className="absolute inset-0 bg-black/55" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 text-white">

                    {/* Category */}
                    <span className="text-xs uppercase tracking-wider text-primary-300 mb-1">
                      {project.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-bold leading-snug mb-2">
                      {project.title}
                    </h3>

                    {/* Short outcome (always visible) */}
                    <p className="text-sm text-slate-200 line-clamp-2">
                      {project.shortDescription}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-4 inline-flex items-center gap-2 text-primary-300 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      View Case Study <FaArrowRight />
                    </div>

                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust + CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-slate-400 mb-4">
            Trusted by startups & growing businesses • Real results, real impact
          </p>

          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-lg hover:gap-3 transition-all"
          >
            View All Case Studies <FaArrowRight />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default PortfolioPreview;

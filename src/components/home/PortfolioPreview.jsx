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
        <SectionHeading
          subtitle="Recent Work"
          title="Projects That Made an Impact"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <Link to={`/portfolio/${project.id}`}>
                <motion.div
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] bg-gradient-to-br from-primary-600 to-primary-800"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Placeholder Image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-800 opacity-90" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                    <span className="text-sm font-semibold text-primary-300 mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      {project.title}
                    </h3>
                    <p className="text-secondary-100 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 mb-3">
                      {project.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-primary-300 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Case Study <FaArrowRight />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-lg hover:gap-3 transition-all"
          >
            View All Projects <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;

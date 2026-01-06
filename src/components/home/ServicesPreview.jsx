import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/services';
import Card from '../ui/Card';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-section-bg transition-colors duration-300">
      <div className="container-custom">
        <SectionHeading
          subtitle="What I Do"
          title="Services That Drive Results"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <Card className="h-full flex flex-col transition-colors duration-300">
                <div className="mb-4">
                  <service.icon className="text-5xl text-primary-600 dark:text-cyan" />
                </div>
                <h3 className="text-2xl font-bold text-primary-text mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-text mb-6 flex-grow">
                  {service.shortDescription}
                </p>
                <Link
                  to={`/services/${service.id}`}
                  className="text-primary-600 dark:text-cyan font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
                >
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </Card>
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
            to="/services"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold text-lg hover:gap-3 transition-all"
          >
            View All Services <FaArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;

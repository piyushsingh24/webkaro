import { motion } from 'framer-motion';
import { FaSearch, FaPaintBrush, FaCode, FaVial, FaRocket, FaHeadset } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: FaSearch,
      title: 'Discovery',
      description: 'We discuss your goals, requirements, and vision. I ask questions to understand your business and users.'
    },
    {
      icon: FaPaintBrush,
      title: 'Design',
      description: 'I create wireframes and designs that align with your brand and optimize for conversions.'
    },
    {
      icon: FaCode,
      title: 'Develop',
      description: 'Clean, scalable code built with modern technologies. Regular updates keep you in the loop.'
    },
    {
      icon: FaVial,
      title: 'Test',
      description: 'Rigorous testing across devices and browsers to ensure everything works perfectly.'
    },
    {
      icon: FaRocket,
      title: 'Launch',
      description: 'Smooth deployment to your preferred platform with proper monitoring and analytics setup.'
    },
    {
      icon: FaHeadset,
      title: 'Support',
      description: 'Post-launch support to fix any issues and help you get the most from your new website.'
    },
  ];

  return (
    <section className="section-padding border bg-section-bg">
      <div className="container-custom">
        <SectionHeading
          subtitle="How I Work"
          title="A Proven Process for Success"
        />

        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200" />

            {steps.map((step, index) => (
              <AnimatedSection
                key={step.title}
                delay={index * 0.15}
                className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-md">
                    {step.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="text-2xl text-white" />
                  </motion.div>
                </div>

                <div className="w-1/2" />
              </AnimatedSection>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                      <step.icon className="text-xl text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

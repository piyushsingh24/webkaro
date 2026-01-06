import { FaCheck, FaComments, FaClock, FaCode, FaHandshake } from 'react-icons/fa';
import SectionHeading from '../ui/SectionHeading';
import AnimatedSection from '../ui/AnimatedSection';

const WhyTrustMe = () => {
  const reasons = [
    {
      icon: FaComments,
      title: 'Direct Communication',
      description:
        'Work directly with me, not a middleman. Clear, honest communication throughout the project.',
    },
    {
      icon: FaHandshake,
      title: 'No Middlemen',
      description:
        'Solo developer means your budget goes into building, not overhead. Better value for your investment.',
    },
    {
      icon: FaCode,
      title: 'Clean, Scalable Code',
      description:
        "Production-ready code that's maintainable, documented, and built to scale with your business.",
    },
    {
      icon: FaClock,
      title: 'On-Time Delivery',
      description:
        'I respect your timeline. Clear milestones, regular updates, and delivery when promised.',
    },
  ];

  return (
    <section className="section-padding bg-main overflow-x-hidden">
      <div className="container-custom max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <SectionHeading
          subtitle="Why Choose Me"
          title="The Solo Developer Advantage"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={reason.title}
              delay={index * 0.1}
              animation="slideRight"
            >
              {/* Prevent animation overflow */}
              <div className="w-full overflow-hidden">
                <div className="flex gap-4 sm:gap-5 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 dark:bg-navy rounded-lg flex items-center justify-center border border-border-color">
                      <reason.icon className="text-lg sm:text-2xl text-primary-600 dark:text-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-primary-text mb-1 sm:mb-2 flex items-center gap-2 flex-wrap">
                      <FaCheck className="text-green-500 text-base sm:text-lg" />
                      {reason.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-text leading-relaxed break-words">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Quote */}
        <AnimatedSection delay={0.5} className="mt-10 sm:mt-12 text-center">
          <div className="bg-section-bg rounded-2xl p-5 sm:p-8 max-w-3xl mx-auto border border-border-color">
            <p className="text-base sm:text-lg text-primary-text italic leading-relaxed">
              "As a solo developer, I'm personally invested in your success. Your project isn't just another ticket in a queue—it's a partnership where I bring my full expertise and attention to help you achieve your goals."
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhyTrustMe;

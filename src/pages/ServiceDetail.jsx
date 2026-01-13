import { useParams, Link, useLocation } from 'react-router-dom';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { getServiceById } from '../data/services';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const location = useLocation();
  const { serviceId } = useParams();
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center px-4">
        <div className="text-center border border-border-color p-6 rounded-xl max-w-sm">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Service Not Found
          </h1>
          <Link to="/services" className="text-primary-600 hover:underline">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-x-hidden ">
      <SEO
        title={service.title}
        description={service.description}
        keywords={service.techStack.join(', ')}
        canonical={`/services/${serviceId}`}
        location={location.pathname}
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": service.title,
          "description": service.description,
          "provider": {
            "@type": "Organization",
            "name": "Webkaro",
            "url": "https://webkaro.in"
          },
          "offers": {
            "@type": "Offer",
            "price": service.pricingHint.replace(/[^0-9]/g, ''),
            "priceCurrency": "INR"
          }
        }}
      />
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-800 text-white">
        <div className="container-custom px-4 sm:px-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-secondary-100 hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft /> Back to Services
          </Link>

          <div className="max-w-4xl">
            <service.icon className="text-4xl sm:text-5xl md:text-6xl mb-6 opacity-90" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-secondary-100 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-12 bg-gray-100">
        <div className="container-custom px-4 sm:px-6 pb-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Main */}
            <div className="lg:col-span-2 space-y-14 ">
              {/* Who It's For */}
              <AnimatedSection>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                  Who It’s For
                </h2>
                <ul className="space-y-4">
                  {service.whoItsFor.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700 text-base sm:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Features */}
              <AnimatedSection delay={0.2}>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                  What’s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex gap-3">
                      <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* Tech Stack */}
              <AnimatedSection delay={0.3}>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                  Technologies & Tools
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              {/* Deliverables */}
              <AnimatedSection delay={0.4}>
                <h2 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-6">
                  Deliverables
                </h2>
                <ul className="space-y-4">
                  {service.deliverables.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <FaCheck className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24">
                <div className="bg-secondary-50 rounded-2xl p-6 sm:p-8 border border-secondary-100">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-6">
                    Get Started
                  </h3>

                  <div className="space-y-5 mb-8">
                    <div>
                      <p className="text-sm text-secondary-600 mb-1">
                        Starting Price
                      </p>
                      <p className="text-3xl font-bold text-primary-600">
                        {service.pricingHint}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-secondary-600 mb-1">
                        Timeline
                      </p>
                      <p className="text-lg font-semibold text-secondary-900">
                        {service.timeline}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button to="/get-quote" variant="primary" className="w-full">
                      Get a Quote
                    </Button>
                    <Button to="/contact" variant="secondary" className="w-full">
                      Book a Call
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-secondary-200 text-center">
                    <p className="text-sm text-secondary-600 leading-relaxed">
                      ✓ Free consultation<br />
                      ✓ No obligation<br />
                      ✓ Quick response
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

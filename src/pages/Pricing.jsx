import { FaCheck, FaTimes } from 'react-icons/fa';
import { pricingPlans, addOns } from '../data/pricing';
import SectionHeading from '../components/ui/SectionHeading';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

const Pricing = () => {
  return (
    <div >
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              No hidden fees. No surprises. Just honest pricing for quality work.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding container-custom">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={plan.id} delay={index * 0.1}>
                <div
                  className={`relative rounded-2xl p-8 h-full flex flex-col border 
                  ${
                    plan.popular
                      ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-[1.04] border-primary-500'
                      : 'bg-gray-300 text-secondary-900 border-secondary-200 '
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent-500 text-black px-5 py-1.5 rounded-full text-sm font-semibold shadow-md bg-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-4xl font-extrabold">
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.popular ? 'text-white/80' : 'text-secondary-600'
                        }`}
                      >
                        {plan.priceSubtext}
                      </span>
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        plan.popular ? 'text-white/85' : 'text-secondary-700'
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-1">Ideal for</p>
                    <p
                      className={`text-sm ${
                        plan.popular ? 'text-white/80' : 'text-secondary-600'
                      }`}
                    >
                      {plan.idealFor}
                    </p>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6">
                    <p
                      className={`text-sm font-medium ${
                        plan.popular ? 'text-white/90' : 'text-secondary-700'
                      }`}
                    >
                      ⏱ Timeline: {plan.timeline}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <FaCheck
                          className={`mt-1 ${
                            plan.popular ? 'text-green-300' : 'text-green-600'
                          }`}
                        />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}

                    {plan.notIncluded.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-secondary-400">
                        <FaTimes className="mt-1 text-red-400" />
                        <span className="line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    to="/get-quote"
                    variant={!plan.popular ? 'primary' : ""}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gray-300 text-gray-950 hover:outline-blue-400 hover:bg-gray-900 hover:text-white '
                        : ''
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-padding  bg-section-bg border-t-2">
        <div className="container-custom max-w-4xl">
          <SectionHeading
            subtitle="Extend Your Package"
            title="Available Add-ons"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <AnimatedSection key={addon.name} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-secondary-200 hover:shadow-md transition">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {addon.name}
                    </h3>
                    <span className="text-primary-600 font-bold">
                      {addon.price}
                    </span>
                  </div>
                  <p className="text-sm text-secondary-600">
                    {addon.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-custom">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-secondary-300 mb-8">
            Every project is unique. Let’s build something tailored to your goals.
          </p>
          <Button to="/get-quote" variant="primary" size="lg">
            Get a Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

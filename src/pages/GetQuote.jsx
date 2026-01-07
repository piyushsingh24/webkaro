import { useState } from 'react';
import { FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { sendQuoteForm } from '../utils/web3forms';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const GetQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const totalSteps = 4;

  const projectTypes = [
    'Web Development',
    'UI/UX Design',
    'SaaS MVP',
    'E-commerce',
    'API Integration',
    'Maintenance & Support',
    'Other'
  ];

  const budgetRanges = [
    'Under $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Not sure yet'
  ];

  const timelines = [
    'ASAP (1-2 weeks)',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    const result = await sendQuoteForm(formData);

    if (result.success) {
      setStatus({
        type: 'success',
        message: 'Quote request sent successfully! I\'ll review your project and get back to you within 24 hours.'
      });
      setCurrentStep(totalSteps + 1);
    } else {
      setStatus({
        type: 'error',
        message: 'Failed to send request. Please try again or email me directly at info@webkaro.in'
      });
    }

    setLoading(false);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== '';
      case 2:
        return formData.budget !== '';
      case 3:
        return formData.timeline !== '';
      case 4:
        return formData.name && formData.email;
      default:
        return false;
    }
  };

  return (
    <div className="pt-24 min-h-screen bg-secondary-50 ">
      <SEO
        title="Get a Free Quote - Webkaro"
        description="Request a free quote for your web design or development project. Detailed proposals tailored to your business goals."
        keywords="free web design quote, project estimate, web development proposal, webkaro quote"
      />
      <div className="container-custom py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
              Get a Free Quote
            </h1>
            <p className="text-lg text-secondary-600">
              Tell me about your project and I'll provide a detailed proposal
            </p>
          </div>

          {/* Progress Bar */}
          {currentStep <= totalSteps && (
            <div className="mb-12">
              <div className="flex justify-between mb-2">
                {[...Array(totalSteps)].map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 h-2 rounded-full mx-1 ${i + 1 <= currentStep ? 'bg-primary-600' : 'bg-secondary-200'
                      }`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-secondary-600">
                Step {currentStep} of {totalSteps}
              </p>
            </div>
          )}

          {/* Form Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    What type of project do you need?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => handleChange('projectType', type)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${formData.projectType === type
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-secondary-200 hover:border-primary-300'
                          }`}
                      >
                        <span className="font-semibold text-secondary-900">{type}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    What's your budget range?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {budgetRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => handleChange('budget', range)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${formData.budget === range
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-secondary-200 hover:border-primary-300'
                          }`}
                      >
                        <span className="font-semibold text-secondary-900">{range}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    What's your timeline?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {timelines.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleChange('timeline', time)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${formData.timeline === time
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-secondary-200 hover:border-primary-300'
                          }`}
                      >
                        <span className="font-semibold text-secondary-900">{time}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    Your contact information
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6 text-black">
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      placeholder="Your name"
                    />

                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      placeholder="your@email.com"
                    />

                    <Input
                      label="Phone (Optional)"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+1 (234) 567-890"
                    />

                    <Textarea
                      label="Project Description"
                      name="description"
                      value={formData.description}
                      onChange={(e) => handleChange('description', e.target.value)}
                      rows={6}
                      className="w-full text-black p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell me more about your project, goals, and any specific requirements..."
                    />

                    {status.message && (
                      <div
                        className={`p-4 rounded-lg ${status.type === 'success'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                          }`}
                      >
                        {status.message}
                      </div>
                    )}
                  </form>
                </motion.div>
              )}

              {currentStep > totalSteps && status.type === 'success' && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                    Thank You!
                  </h2>
                  <p className="text-lg text-secondary-600 mb-8">
                    I've received your quote request and will get back to you within 24 hours with a detailed proposal.
                  </p>
                  <Button to="/" variant="primary">
                    Back to Home
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            {currentStep <= totalSteps && (
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handleBack}
                  variant="primary"
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : '' }
                >
                  <FaArrowLeft /> Back
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    variant="primary"
                    disabled={!canProceed()}
                  >
                    Next <FaArrowRight />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    variant="primary"
                    disabled={!canProceed() || loading}
                  >
                    {loading ? 'Sending...' : 'Submit Quote Request'}
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Summary */}
          {currentStep > 1 && currentStep <= totalSteps && (
            <div className="mt-8 bg-white rounded-xl p-6">
              <h3 className="font-semibold text-secondary-900 mb-4">Your Selections:</h3>
              <div className="space-y-2 text-sm text-secondary-600">
                {formData.projectType && <p>• Project Type: <span className="font-semibold">{formData.projectType}</span></p>}
                {formData.budget && <p>• Budget: <span className="font-semibold">{formData.budget}</span></p>}
                {formData.timeline && <p>• Timeline: <span className="font-semibold">{formData.timeline}</span></p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetQuote;

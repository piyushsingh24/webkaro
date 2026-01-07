import { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import { sendContactForm } from '../utils/web3forms';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  });

  const countryCodes = [
    { code: '+91', label: 'India' },
    { code: '+1', label: 'USA' },
    { code: '+44', label: 'UK' },
    { code: '+61', label: 'Australia' },
    { code: '+971', label: 'UAE' },
    { code: '+49', label: 'Germany' },
    { code: '+33', label: 'France' },
    { code: '+81', label: 'Japan' },
    { code: '+86', label: 'China' }
  ];

  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus({ type: '', message: '' });

    // Safety fallback (prevents undefined ever)
    const safeFormData = {
      ...formData,
      countryCode: formData.countryCode || '+91',
      phone: formData.phone || ''
    };

    const result = await sendContactForm(safeFormData);

    setStatus(
      result.success
        ? { type: 'success', message: 'Message sent successfully! I’ll get back to you soon.' }
        : { type: 'error', message: 'Failed to send message. Please try again.' }
    );

    if (result.success) {
      setFormData({
        name: '',
        email: '',
        countryCode: '+91',
        phone: '',
        message: ''
      });
    }

    setLoading(false);
  };

  return (
    <div>
      <SEO
        title="Contact Us - Get in Touch with Webkaro"
        description="Have a project in mind? Contact Webkaro today for a free consultation. We're here to help you build your digital future."
        keywords="contact webkaro, web design inquiry, hire web developer, digital agency contact"
      />

      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            Let’s Talk
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have a project in mind? Let’s build something impactful together.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding bg-custom">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Form */}
            <AnimatedSection>
              <div className="bg-secondary-50 border border-secondary-200 rounded-2xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 text-black">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <div className="flex gap-3">
                    {/* Country Code */}
                    <div className="w-1/3">
                      <label className="block text-sm font-medium mb-1">
                        Country Code
                      </label>
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-secondary-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      >
                        {countryCodes.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label} ({c.code})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Phone */}
                    <div className="w-2/3">
                      <Input
                        label="Mobile Number"
                        name="phone"
                        type="tel"
                        placeholder="Enter mobile number"
                        pattern="[0-9]{6,15}"
                        title="Enter a valid phone number"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <Textarea
                    label="Message"
                    placeholder="Enter your message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {status.message && (
                    <div
                      className={`flex items-center gap-2 p-4 rounded-lg text-sm ${
                        status.type === 'success'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-red-50 text-red-700'
                      }`}
                    >
                      {status.type === 'success' && <FaCheckCircle />}
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-white">
                  Get in Touch
                </h2>
                <p className="text-gray-200 text-xl">
                  Prefer direct communication? Reach me here.
                </p>

                <ContactCard
                  icon={<FaEnvelope />}
                  title="Email"
                  value="piyushsingh2706@gmail.com"
                  note="Response within 24 hours"
                  link="mailto:piyushsingh2706@gmail.com"
                />

                <ContactCard
                  icon={<FaWhatsapp className="text-green-500" />}
                  title="WhatsApp"
                  value="+91 88511 51976"
                  note="Quick replies"
                  link="https://wa.me/918851151976"
                />

                <ContactCard
                  icon={<FaMapMarkerAlt />}
                  title="Location"
                  value="Remote • India"
                  note="Working globally"
                />

                <div className="bg-primary-50 border border-primary-100 rounded-xl p-6">
                  <h3 className="font-semibold text-secondary-900 mb-2">
                    Prefer a Video Call?
                  </h3>
                  <p className="text-secondary-600 mb-4">
                    Book a free 30-minute consultation.
                  </p>
                  <Button to="/get-quote" variant="primary" className="w-full">
                    Book a Call
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, value, note, link }) => {
  const Wrapper = link ? 'a' : 'div';
  return (
    <Wrapper
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 p-5 bg-secondary-50 border border-secondary-200 rounded-xl hover:shadow-md transition"
    >
      <div className="text-2xl text-primary-600 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-secondary-900">{title}</h3>
        <p className="text-secondary-700">{value}</p>
        <p className="text-sm text-secondary-500">{note}</p>
      </div>
    </Wrapper>
  );
};

export default Contact;

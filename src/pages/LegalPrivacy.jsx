import SEO from '../components/SEO';

const LegalPrivacy = () => {
  return (
    <div >
      <SEO
        title="Privacy Policy - Webkaro"
        description="Learn about how we handle your data and protect your privacy."
        keywords="privacy policy, data protection, webkaro privacy"
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700">
            <p className="text-sm text-secondary-500">Last updated: January 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Introduction</h2>
              <p>
                This Privacy Policy describes how WebKaro ("we", "us", or "our") collects, uses, and shares your personal information when you visit or use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Project details and requirements you share through forms</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide quotes</li>
                <li>Communicate with you about projects and services</li>
                <li>Improve our website and services</li>
                <li>Send you updates and marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                Email: info@webkaro.in
                <br />
                Phone: +91 8851151976
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPrivacy;

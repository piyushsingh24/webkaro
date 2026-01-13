import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const LegalPrivacy = () => {
  const location = useLocation();

  return (
    <div>
      <SEO
        title="Privacy Policy - WebKaro"
        description="Learn how WebKaro collects, uses, and protects your personal data. We never sell or misuse your information."
        keywords="privacy policy, data protection, webkaro privacy, personal data security"
        canonical="/privacy"
        location={location.pathname}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-sm text-secondary-500 mb-6">
            Last Updated: January 14, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-10 text-secondary-700">

            {/* Privacy Promise */}
            <section>
              <h2>Our Privacy Promise to You</h2>
              <p>
                At WebKaro, we value your trust above all else. We understand that
                your personal information is private, and we are committed to
                keeping it that way.
              </p>
              <p>
                We promise that we will never sell, rent, or trade your email
                list or personal data to anyone. Your information is used solely
                to provide you with the best web services and customer support.
              </p>
            </section>

            {/* 1 */}
            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to WebKaro ("we", "us", or "our"). We operate the website
                <strong> webkaro.in </strong> and provide professional Web
                Development, App Development, and Digital Marketing services.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, and protect
                your personal data. By using our website, you agree to the
                practices described in this policy.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2>2. Information We Collect</h2>

              <h3>A. Information You Provide to Us</h3>
              <p>When you contact us or hire our services, we may collect:</p>
              <ul>
                <li>
                  <strong>Identity Data:</strong> Name, Company Name
                </li>
                <li>
                  <strong>Contact Data:</strong> Email address, Phone number
                </li>
                <li>
                  <strong>Project Data:</strong> Website requirements, design
                  preferences, and budget
                </li>
                <li>
                  <strong>Payment Information:</strong> We do not store card or
                  banking details. Payments are processed securely via third-
                  party gateways such as Razorpay, Stripe, or PayPal.
                </li>
              </ul>

              <h3>B. Information Collected Automatically</h3>
              <ul>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type,
                  device type, operating system
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited and time spent on
                  the website
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2>3. How We Use Your Information</h2>
              <ul>
                <li>
                  <strong>Service Delivery:</strong> To build websites, apps,
                  and manage SEO or marketing campaigns
                </li>
                <li>
                  <strong>Communication:</strong> To send invoices, updates,
                  and respond to queries
                </li>
                <li>
                  <strong>Website Improvement:</strong> To analyze usage and
                  improve performance
                </li>
                <li>
                  <strong>Security:</strong> To prevent fraud and cyber threats
                </li>
                <li>
                  <strong>Marketing (Optional):</strong> Occasional service
                  updates (unsubscribe anytime)
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2>4. How We Share Your Information</h2>
              <p>
                We are strictly against data misuse. Your information is shared
                only in the following cases:
              </p>
              <ul>
                <li>
                  <strong>Trusted Service Providers:</strong> Hosting (AWS),
                  analytics (Google Analytics), or payment processors under
                  strict confidentiality
                </li>
                <li>
                  <strong>Legal Compliance:</strong> When required by law or
                  valid legal process
                </li>
              </ul>
              <p>
                We do <strong>not</strong> share your data with advertisers or
                marketing agencies.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2>5. Cookies & Tracking</h2>
              <ul>
                <li>
                  <strong>Essential Cookies:</strong> Required for website
                  functionality
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> Help us understand visitor
                  behavior
                </li>
                <li>
                  <strong>Control:</strong> You can disable cookies via browser
                  settings
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2>6. Data Security</h2>
              <p>
                We use industry-standard security measures, including SSL
                encryption (HTTPS), to protect your data. While no system is
                completely secure, we take all reasonable steps to safeguard
                your information.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2>7. International Data Transfers</h2>
              <p>
                WebKaro operates from India. If you access our website from
                outside India (USA, UK, EU), your data will be processed in
                India. By using our services, you consent to this transfer.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2>8. Your Rights</h2>
              <ul>
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data ("Right to be Forgotten")</li>
                <li>Opt out of marketing communications</li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not
                responsible for their privacy practices and encourage you to
                review their policies separately.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2>10. Contact Us</h2>
              <p>
                <strong>WebKaro</strong>
                <br />
                Email: info@webkaro.in
                <br />
                Phone: +91 8851151976
                <br />
                Phone: +91 7048903201
                <br />
                Address: India
              </p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPrivacy;

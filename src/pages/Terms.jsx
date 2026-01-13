import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";

const Terms = () => {
  const location = useLocation();

  return (
    <div>
      <SEO
        title="Terms of Service & Client Agreement - WebKaro"
        description="Read WebKaro’s official Terms of Service and Client Agreement including payment terms, project scope, liability, and legal policies."
        keywords="WebKaro terms, terms of service, client agreement, web development terms, legal agreement"
        canonical="/terms"
        location={location.pathname}
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Terms of Service & Client Agreement
          </h1>

          <p className="text-sm text-secondary-500 mb-8">
            Last Updated: January 14, 2026
          </p>

          <div className="prose prose-lg max-w-none space-y-10 text-secondary-700">

            {/* 1 */}
            <section>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing the website of WebKaro ("Company", "We", "Us") or
                engaging our services (Web Development, App Design, SEO, Digital
                Marketing), you ("Client", "You") acknowledge that you have read,
                understood, and agreed to be bound by these Terms and Conditions.
              </p>
              <p>
                If you do not agree with any part of these terms, you must not use
                our services.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2>2. Project Scope & Definitions</h2>
              <ul>
                <li>
                  <strong>The Service:</strong> WebKaro agrees to provide services
                  outlined in the Project Proposal, Quotation, or Invoice.
                </li>
                <li>
                  <strong>Scope Creep:</strong> Any feature or functionality not
                  explicitly listed is considered out of scope.
                </li>
                <li>
                  <strong>Additional Charges:</strong> Extra features or changes
                  requested after project start will be billed separately. We
                  reserve the right to decline changes that disrupt timelines.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2>3. Payment Terms & Schedule (Strict Policy)</h2>
              <ul>
                <li>
                  <strong>Advance Payment:</strong> 50% non-refundable advance is
                  required to begin work.
                </li>
                <li>
                  <strong>Final Balance:</strong> Remaining 50% must be paid
                  before deployment or source code delivery.
                </li>
                <li>
                  <strong>Late Fees:</strong> 5% of total project value per week
                  after 7 days of due date.
                </li>
                <li>
                  <strong>Currency:</strong> All payments are in INR unless
                  otherwise quoted.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2>4. Client Responsibilities & Anti-Ghosting Policy</h2>
              <ul>
                <li>
                  <strong>Content Delivery:</strong> Client must provide all
                  required assets within 10 days of project start.
                </li>
                <li>
                  <strong>Dormant Projects:</strong> No response for 30 days marks
                  the project as dormant.
                </li>
                <li>
                  <strong>Re-initiation Fee:</strong> 20% of project value to
                  restart dormant projects.
                </li>
                <li>
                  <strong>Copyright:</strong> Client confirms ownership of all
                  provided content.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2>5. Design, Revisions & Auto-Acceptance</h2>
              <ul>
                <li>2 rounds of revisions included during design phase.</li>
                <li>Testing period of 5 business days after delivery.</li>
                <li>
                  Auto-acceptance applies if no feedback is received within 7
                  days.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2>6. Technical Disclaimers</h2>
              <ul>
                <li>
                  Supports modern browsers updated within the last 2 years.
                </li>
                <li>Fully responsive for mobile and tablet devices.</li>
                <li>
                  Not responsible for third-party hosting or API failures.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2>7. Search Engine Optimization (SEO)</h2>
              <ul>
                <li>No ranking or traffic guarantees.</li>
                <li>
                  Not liable for ranking drops due to algorithm updates or
                  competitors.
                </li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2>8. Intellectual Property & Credit</h2>
              <ul>
                <li>Client owns final website after full payment.</li>
                <li>
                  WebKaro retains ownership of internal tools and libraries.
                </li>
                <li>
                  Footer credit may be displayed.
                  <br />
                  Removal fee: ₹5,000 / $100.
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2>9. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of sensitive
                information and data.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2>10. Termination & Cancellation</h2>
              <ul>
                <li>Client may terminate at any time (advance non-refundable).</li>
                <li>
                  WebKaro may terminate due to non-payment or uncooperative
                  behavior.
                </li>
              </ul>
            </section>

            {/* 11 */}
            <section>
              <h2>11. Limitation of Liability</h2>
              <p>
                Total liability shall not exceed the amount paid for the service.
                WebKaro is not liable for indirect or consequential damages.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2>12. Indemnification</h2>
              <p>
                You agree to indemnify and hold WebKaro harmless from any claims
                arising from misuse or violation of these terms.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2>13. Dispute Resolution</h2>
              <p>
                Both parties agree to attempt amicable resolution for at least 30
                days before legal action.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2>14. Governing Law & Jurisdiction</h2>
              <p>
                These terms are governed by the laws of India. Jurisdiction lies
                exclusively in Delhi, India.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2>15. Contact Information</h2>
              <p>
                <strong>WebKaro</strong>
                <br />
                Email: info@webkaro.in
                <br />
                Phone: +91 8851151976 / +91 7048903201
                <br />
                Location: India
              </p>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

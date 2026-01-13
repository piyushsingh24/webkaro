import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';

const Terms = () => {
  const location = useLocation();
  return (
    <div >
      <SEO
        title="Terms & Conditions - Webkaro"
        description="Read our terms and conditions for using our services and website."
        keywords="terms and conditions, legal agreement, webkaro terms"
        canonical="/terms"
        location={location.pathname}
      />
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-8">
            Terms & Conditions
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-secondary-700">
            <p className="text-sm text-secondary-500">Last updated: January 2026</p>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Services</h2>
              <p>
                Webkaro provides web development, design, and related services. All services are subject to availability and may be modified or discontinued at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Project Agreements</h2>
              <p>
                Specific project terms, deliverables, timelines, and pricing will be outlined in individual project agreements or proposals. These terms supplement but do not replace these general Terms & Conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment schedules will be specified in project agreements</li>
                <li>Typical structure: 50% upfront, 50% upon completion</li>
                <li>Late payments may incur additional fees</li>
                <li>All prices are in Indian Rupees (INR) unless otherwise specified</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Intellectual Property</h2>
              <p>
                Upon full payment, clients receive full ownership of the final deliverables. We retain the right to showcase completed work in our portfolio unless otherwise agreed in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Revisions & Changes</h2>
              <p>
                Project agreements will specify the number of included revisions. Additional revisions or scope changes may incur additional fees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Warranties & Disclaimers</h2>
              <p>
                We strive to deliver high-quality work but cannot guarantee specific business results. Services are provided "as is" without warranties of any kind, express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for the specific service. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Termination</h2>
              <p>
                Either party may terminate a project agreement with written notice. Termination terms and refund policies will be specified in individual project agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-secondary-900 mt-8 mb-4">Contact</h2>
              <p>
                For questions about these terms, contact us at:
                <br />
                Email: info@webkaro.in
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;

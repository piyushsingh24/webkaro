import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaStar } from 'react-icons/fa';
import { getProjectById } from '../data/portfolio';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';

const CaseStudy = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-primary-600 hover:underline">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-800 text-white">
        <div className="container-custom">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-secondary-100 hover:text-white mb-8 transition-colors"
          >
            <FaArrowLeft /> Back to Portfolio
          </Link>
          <div className="max-w-4xl">
            <span className="text-primary-300 font-semibold mb-4 block">
              {project.category} • {project.year}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-secondary-100">
              {project.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(project.metrics).map(([key, value], index) => (
              <AnimatedSection key={key} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {value}
                  </div>
                  <div className="text-secondary-600 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Problem, Solution, Results */}
      <section className="py-12 bg-secondary-50">
        <div className="container-custom max-w-5xl">
          <div className="space-y-16">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">The Challenge</h2>
              <p className="text-lg text-secondary-700 leading-relaxed">
                {project.problem}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">The Solution</h2>
              <p className="text-lg text-secondary-700 leading-relaxed mb-6">
                {project.solution}
              </p>
              <div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white text-primary-700 rounded-lg font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">The Results</h2>
              <ul className="space-y-3">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-lg text-secondary-700">{result}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="py-12 bg-white ">
          <div className="container-custom max-w-4xl">
            <AnimatedSection>
              <div className="bg-secondary-50 rounded-2xl p-8 md:p-12">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-xl text-secondary-700 italic mb-6">
                  "{project.testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-secondary-900">{project.testimonial.author}</p>
                  <p className="text-secondary-600">{project.testimonial.role}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-secondary-100 mb-8">
            Let's build something amazing together.
          </p>
          <Button to="/get-quote" variant="primary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
            Get a Free Quote
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;

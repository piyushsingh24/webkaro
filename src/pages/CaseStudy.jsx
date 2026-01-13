import { useParams, Link, Navigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCheck, FaStar } from "react-icons/fa";
import { getProjectById } from "../data/portfolio";
import AnimatedSection from "../components/ui/AnimatedSection";
import Button from "../components/ui/Button";
import SEO from "../components/SEO";

const CaseStudy = () => {
  const location = useLocation();
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <main className="overflow-hidden">
      <SEO
        title={`${project.title} – Case Study`}
        description={project.shortDescription}
        keywords={`${project.category}, ${project.techStack.join(", ")}`}
        canonical={`/portfolio/${projectId}`}
        location={location.pathname}
        ogImage={project.thumbnail}
        schema={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.shortDescription,
          "image": `https://webkaro.in${project.thumbnail}`,
          "author": {
            "@type": "Organization",
            "name": "Webkaro"
          },
          "datePublished": project.year
        }}
      />

      {/* HERO */}
      <section className="relative section-padding text-white">
        {/* Background image */}
        <img
          src={project.thumbnail}
          alt={`${project.title} cover`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        <div className="container-custom relative z-10">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-secondary-200 hover:text-white transition mb-8"
            aria-label="Back to portfolio"
          >
            <FaArrowLeft /> Back to Portfolio
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block mb-4 text-primary-300 font-semibold tracking-wide">
              {project.category} • {project.year}
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-secondary-200 mb-8">
              {project.shortDescription}
            </p>

            <Link
              to={project.LiveLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-primary-300 font-semibold"
            >
              View Live Project <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(project.metrics).map(([key, value], index) => (
              <AnimatedSection key={key} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-extrabold text-primary-600 mb-2">
                    {value}
                  </div>
                  <p className="text-sm uppercase tracking-wide text-secondary-600">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY / THUMBNAILS
      {project.images?.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="container-custom">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-secondary-900 mb-8">
                Project Screenshots
              </h2>
            </AnimatedSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((img, index) => (
                <AnimatedSection key={img} delay={index * 0.1}>
                  <div className="overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )} */}

      {/* CONTENT */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-5xl space-y-20">
          {/* Challenge */}
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              The Challenge
            </h2>
            <p className="text-lg text-secondary-700 leading-relaxed">
              {project.problem}
            </p>
          </AnimatedSection>

          {/* Solution */}
          <AnimatedSection delay={0.15}>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              The Solution
            </h2>
            <p className="text-lg text-secondary-700 leading-relaxed mb-8">
              {project.solution}
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary-50 rounded-lg shadow-sm text-primary-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Results */}
          <AnimatedSection delay={0.25}>
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              The Results
            </h2>
            <ul className="space-y-4">
              {project.results.map((result, index) => (
                <li key={index} className="flex gap-3">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-lg text-secondary-700">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {project.testimonial && (
        <section className="py-16 bg-secondary-50">
          <div className="container-custom max-w-4xl">
            <AnimatedSection>
              <div className="rounded-2xl bg-white p-8 md:p-12 shadow-lg">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                <blockquote className="text-xl italic text-secondary-700 mb-6">
                  “{project.testimonial.text}”
                </blockquote>

                <div>
                  <p className="font-bold text-secondary-900">
                    {project.testimonial.author}
                  </p>
                  <p className="text-secondary-600">
                    {project.testimonial.role}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-secondary-900 text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Have a Similar Project in Mind?
          </h2>

          <p className="text-lg text-secondary-200 mb-10">
            Let’s turn your idea into a high-converting digital product.
          </p>

          <Button
            to="/get-quote"
            size="lg"
            className="bg-white text-primary-600 hover:bg-primary-50"
          >
            Get a Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;

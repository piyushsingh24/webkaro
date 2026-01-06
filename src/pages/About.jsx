import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaTrophy, FaCalendar } from "react-icons/fa";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";
import Button from "../components/ui/Button";

const About = () => {
  const stats = [
    { icon: FaTrophy, value: "20+", label: "Projects Delivered" },
    { icon: FaUsers, value: "100%", label: "Client Satisfaction" },
    { icon: FaCalendar, value: "1.5+", label: "Years Experience" },
    { icon: FaCheckCircle, value: "100%", label: "On-Time Delivery" },
  ];

  const values = [
    {
      title: "Quality Over Quantity",
      description:
        "I take on a limited number of projects to ensure each one gets my full attention and expertise.",
    },
    {
      title: "Transparent Communication",
      description:
        "Regular updates, honest timelines, and clear explanations. No jargon, no surprises.",
    },
    {
      title: "Long-term Partnership",
      description:
        "I'm not just building a website — I'm invested in your long-term success and growth.",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves fast. I stay current with the latest tools and best practices.",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className=" section-padding bg-gradient-to-br from-amber-400 via-primary-700 to-secondary-900 text-white">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              Hi, I'm Your Developer
            </h1>
            <p className="text-lg md:text-2xl text-white/80 leading-relaxed">
              A solo developer crafting modern web experiences that help businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition">
                  <stat.icon className="text-4xl text-primary-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeading subtitle="My Story" title="Why I Started This Agency" />

            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <AnimatedSection>
                <p>
                  I began my journey as a developer working with agencies and fast-growing startups.
                  While I loved building products, I noticed a recurring problem — many businesses
                  lacked a strong digital identity. In a competitive market, a clear and powerful
                  online presence isn’t optional; it’s essential for growth and visibility.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p>
                  Going solo allowed me to work closely with clients, build genuine connections,
                  remove unnecessary friction, and focus on trust-driven collaboration.
                  I intentionally work with only 2–3 clients at a time, ensuring every project
                  receives complete attention until a fully polished, scalable solution is delivered.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p>
                  Today, my mission is simple — to give every business a strong digital identity
                  and a platform that fuels growth and profitability. I help startups and growing
                  companies design, build, and scale modern web applications with confidence,
                  clarity, and long-term vision.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.4}>
                <p>
                  As a Solo developer , It's help to reduced the cost of your whole Web Application 
                </p>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-18 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeading subtitle="My Values" title="What Drives My Work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border bg-gray-900  text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <SectionHeading subtitle="My Philosophy" title="How I Approach Every Project" />

            <AnimatedSection>
              <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl">
                <p className="text-xl leading-relaxed text-gray-100 mb-6">
                  “Great software is built through collaboration. My role isn’t just to write
                  code — it’s to understand your business and build solutions that matter.”
                </p>
                <p className="text-gray-400">
                  Every project is a partnership. Your success is my success.
                </p>
              </div>
            </AnimatedSection>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Button to="/contact" variant="primary" size="lg">
                Let’s Work Together
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

export interface FAQ {
  id: string;
  slug: string;
  question: string;
  answer: string;
  details: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    slug: "development-process",
    question: "What is your development process?",
    answer:
      "We follow a structured, transparent, and agile-driven development process that moves from idea validation to architecture planning, iterative development, and performance-tested deployment.",
    details:
      "Our process begins with an in-depth **Discovery Phase**, where we understand your business goals, target audience, revenue model, and technical constraints. We then move into **Strategy & System Architecture**, where we define database structure, API flows, scalability planning, and technology stack decisions. Development happens in **Agile Sprints**, typically 1–2 weeks long, with clear milestones and demo reviews. Every feature goes through **Code Review, QA Testing, Performance Optimization, and Security Checks** before deployment. Post-launch, we monitor real-world performance and refine where necessary. Our goal is not just to ship — but to ship something stable, scalable, and maintainable.",
  },

  {
    id: "2",
    slug: "mvp-for-startups",
    question: "Do you build MVPs for startups?",
    answer:
      "Yes. Building fast, scalable, investor-ready MVPs is one of our core strengths. We help founders validate ideas quickly without compromising long-term scalability.",
    details:
      "We specialize in helping startups move from idea to launch efficiently. Instead of overbuilding, we focus on **Core Value Features** that directly validate your business hypothesis. Our MVPs are production-ready, meaning the architecture is built in a way that supports future scaling. We assist in **Feature Prioritization, UX Planning, API Design, Database Structuring, and Deployment Strategy**. Typical MVP timelines range from 6–10 weeks depending on scope. After launch, we help you analyze user feedback, track product metrics, and plan Version 2 intelligently.",
  },

  {
    id: "3",
    slug: "technology-stack",
    question: "Which technologies do you use?",
    answer:
      "We use a modern, performance-focused tech stack including Next.js, TypeScript, Tailwind CSS, Node.js, and scalable cloud infrastructure like AWS and Vercel.",
    details:
      "For frontend development, we rely on **Next.js** for SEO and server-side rendering, **TypeScript** for maintainable and error-resistant code, **Tailwind CSS** for scalable UI systems, and animation tools like **GSAP or Framer Motion** for premium interactions. On the backend, we work with **Node.js**, **Express**, and databases such as **MongoDB or PostgreSQL** depending on relational needs. For infrastructure, we deploy on **Vercel, AWS, or dedicated cloud servers**, implementing CI/CD pipelines, environment management, and secure authentication systems. Our stack choices are always aligned with your product's long-term growth and performance needs.",
  },

  {
    id: "4",
    slug: "maintenance-support",
    question: "How do you handle maintenance?",
    answer:
      "We provide structured maintenance and long-term support plans to ensure your application remains secure, fast, and up-to-date after launch.",
    details:
      "Product launch is only the beginning. Our maintenance services include **Security Updates, Dependency Upgrades, Performance Monitoring, Server Health Checks, and Bug Resolution**. We offer different support tiers depending on your scale and traffic requirements. We also provide **Feature Enhancement Cycles**, ensuring your product evolves based on user feedback and market changes. Our proactive monitoring system helps detect issues before they impact users.",
  },

  {
    id: "5",
    slug: "project-cost",
    question: "How much does a custom project cost?",
    answer:
      "Project pricing depends on complexity, feature scope, integrations, and timeline. We provide detailed custom proposals after a discovery discussion.",
    details:
      "The cost of development depends on multiple factors including **Number of Features, Third-Party Integrations, UI Complexity, Backend Architecture, Scalability Requirements, and Deployment Environment**. For clearly defined projects, we prefer a **Fixed-Fee Model** with milestone-based payments. For evolving or research-driven builds, we recommend a **Time & Materials Model** for flexibility. Our projects typically start from $5k and scale upward depending on scope. We ensure transparent breakdowns so you understand exactly where your investment goes.",
  },

  {
    id: "6",
    slug: "building-timeline",
    question: "How long does it take to build a website?",
    answer:
      "Timelines vary based on complexity. Marketing websites typically take 3–5 weeks, while SaaS or custom platforms can range from 2–6 months.",
    details:
      "A **Standard Corporate Website** with design, content integration, and CMS setup generally takes 3–5 weeks. **E-commerce Platforms** with payment gateways, dashboards, and order systems may take 8–12 weeks. Complex **SaaS Platforms** with custom backend logic, authentication systems, real-time features, and dashboards can take 3–6 months. We provide a structured roadmap with milestone checkpoints so expectations are clear from day one.",
  },

  {
    id: "7",
    slug: "seo-marketing",
    question: "Do you provide SEO and marketing services?",
    answer:
      "Yes. Every website we build follows technical SEO best practices, and we also offer advanced SEO and performance marketing services.",
    details:
      "Our websites are built with **Semantic HTML, Meta Optimization, Sitemap Generation, Schema Markup, and Fast Core Web Vitals Performance** by default. Beyond technical SEO, we offer **Keyword Research, On-Page Optimization, Content Strategy, and Link-Building Plans**. We also help set up **Google Ads, Meta Ads, Conversion Tracking, and Analytics Dashboards** to monitor ROI and campaign performance effectively.",
  },

  {
    id: "8",
    slug: "mobile-responsive",
    question: "Is my website mobile-friendly?",
    answer:
      "Yes. We design every project using a Mobile-First approach to ensure flawless responsiveness across all screen sizes.",
    details:
      "We prioritize mobile performance because over 60% of traffic today comes from mobile devices. Our Mobile-First strategy ensures layouts, typography, and interactions are optimized for small screens before scaling up. We test across multiple screen resolutions and devices to ensure consistent performance. We also optimize touch interactions, loading speed, and accessibility for improved user experience.",
  },

  {
    id: "9",
    slug: "content-updates",
    question: "Can I update the content myself?",
    answer:
      "Yes. We integrate intuitive CMS systems that allow you to manage content, blogs, images, and pages without any technical knowledge.",
    details:
      "We use modern **Headless CMS solutions** like Sanity, Contentful, or custom-built dashboards depending on your needs. You will be able to update blog posts, modify landing page content, upload media, and manage metadata without writing code. We also provide training documentation or video walkthroughs to ensure you feel confident managing your platform independently.",
  },

  {
    id: "10",
    slug: "nda-policy",
    question: "Do you sign NDAs?",
    answer:
      "Absolutely. We respect intellectual property and are happy to sign NDAs before discussing confidential project details.",
    details:
      "We understand that many ideas involve sensitive business logic, proprietary data, or investor-backed innovations. We have standard NDA agreements ready, or we can review and sign your legal documentation. Data security, privacy, and confidentiality are core values in our workflow. Your idea remains protected throughout the entire collaboration process.",
  },
];

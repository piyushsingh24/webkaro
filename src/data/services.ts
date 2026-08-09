export interface TechStackItem {
  name: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface CaseStudy {
  project: string;
  challenge: string;
  solution: string;
  results: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  price: string;
  pricingHint: string;
  timeline: string;
  features: string[];
  deliverables: string[];
  color: string;
  glow: string;
  category: "Website Design" | "Custom Software" | "Growth";
  seoTitle?: string;
  seoDescription?: string;
  techStackDetails?: TechStackItem[];
  processSteps?: ProcessStep[];
  caseStudy?: CaseStudy;
  faqs?: FAQ[];
  whyChoosePoints?: string[];
}

export const services: Service[] = [
  // --- Website Design ---
  {
    id: "static-website-design",
    title: "Business Websites",
    shortDescription: "Blazing fast, secure, and SEO-friendly static websites for your business.",
    description: "Our static website design service focuses on speed, security, and exceptional user experience.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "1–2 weeks",
    features: [
      "Ultra-fast global loading speeds",
      "Highest security standards (No database to hack)",
      "SEO-ready semantic HTML structure",
      "Mobile-first responsive design",
      "Minimal maintenance and hosting costs",
      "Advanced caching & CDN integration"
    ],
    deliverables: [
      "Fully responsive static website",
      "Optimized images and assets",
      "Google Search Console & Analytics setup",
      "Sitemap and Robots.txt generation",
      "1 month of post-launch technical support",
      "Source code repository access"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Website Design"
  },
  {
    id: "landing-page-development",
    title: "Landing Pages",
    shortDescription: "High-converting, focused landing pages for your marketing campaigns.",
    description: "Maximize your ad spend with precision-engineered landing pages.",
    icon: "Zap",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "1 week",
    features: [
      "Psychologically optimized Conversion Flows",
      "Structural A/B Testing ready architecture",
      "Sub-second Load Times for low bounce rates",
      "High-impact Visual Storytelling",
      "Dynamic Keyword Insertion (DKI) support",
      "Form integration with CRM/Email platforms"
    ],
    deliverables: [
      "Single-purpose, high-conversion Page",
      "Optimization for Google Ads/FB Ads quality score",
      "Form backend & Lead notification system",
      "Retargeting pixel & Tracking setup",
      "Speed optimization report",
      "Copywriting suggestions & improvements"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Website Design"
  },
  {
    id: "corporate-website-design",
    title: "Corporate",
    shortDescription: "Professional digital presence tailored for established businesses.",
    description: "Build unmatched authority and trust with a premium corporate website.",
    icon: "ShieldCheck",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "3–5 weeks",
    features: [
      "Sophisticated Brand Integration & UI/UX",
      "Strategic Lead Magnets & Call-to-Actions",
      "Regulatory & Legal Compliance (GDPR/Accessibility)",
      "High Availability & Enterprise-grade infrastructure",
      "Multi-language (Internationalization) support",
      "Newsroom & Investor Relations sections"
    ],
    deliverables: [
      "Professional Corporate Platform",
      "Brand Identity & Style Guide documentation",
      "Lead generation & CRM integration",
      "Legal documents (Privacy Policy, Terms)",
      "Dedicated Project Manager",
      "Priority maintenance & Cloud monitoring"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Website Design"
  },
  {
    id: "website-redesign",
    title: "Portfolio",
    shortDescription: "Give your legacy website a modern, high-performance makeover.",
    description: "Don't let an outdated website drive your customers to competitors.",
    icon: "Palette",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "2–4 weeks",
    features: [
      "Modern UI/UX Audit & Transformation",
      "Technical Debt Reduction & Refactoring",
      "100% Mobile & Core Web Vitals optimization",
      "Seamless Legacy Data & Traffic migration",
      "Brand refresh & color palette modernization",
      "Improved Conversion Rate Architecture"
    ],
    deliverables: [
      "Modernized, high-performance website",
      "Before/After performance comparison report",
      "301 Redirect strategy to preserve SEO",
      "Updated asset library (Icons, Graphics)",
      "New feature integration (Chatbots, etc.)",
      "2 months of monitoring for migration issues"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Website Design",
    seoTitle: "Website Redesign Company in India | Webkaro",
    seoDescription: "Modernize your legacy website. We redesign existing sites for speed, UX, and conversions. 301-safe migration included."
  },
  {
    id: "ecommerce-website-design",
    title: "Ecommerce",
    shortDescription: "Scalable online stores built for high conversion and seamless shopping.",
    description: "Transform your business into a 24/7 sales machine.",
    icon: "Rocket",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "4–6 weeks",
    features: [
      "Multi-Gateway Payment Integration (Razorpay, Stripe, etc.)",
      "Real-time Inventory & Catalog Management",
      "Customer Order Tracking & Notification system",
      "Discount Engine & Coupon management",
      "Product Reviews & Rating system",
      "Advanced Search & Recommendation filters"
    ],
    deliverables: [
      "Full-featured Online Storefront",
      "Merchant Dashboard for Order Management",
      "Seamless Payment & Shipping integration",
      "SEO-optimized product structures",
      "Marketing tools & Analytics integration",
      "Lifetime support for security patches"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Website Design"
  },
  {
    id: "dynamic-website-design",
    title: "Dynamic Websites",
    shortDescription: "Interactive and database-driven websites with custom functionality.",
    description: "Dynamic websites empower you to take full control of your digital presence.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "3–4 weeks",
    features: [
      "Custom Admin Dashboard for content management",
      "Secure User Authentication & Profile management",
      "Real-time data updates via WebSockets",
      "Scalable database architecture (SQL/NoSQL)",
      "Interactive forms and user engagement tools",
      "API integration for third-party services"
    ],
    deliverables: [
      "Dynamic web application with CMS",
      "Custom Administrative Control Panel",
      "User manual and training session",
      "Database schema documentation",
      "Integration with Email/SMS gateways",
      "3 months of database & system maintenance"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Website Design"
  },

  // --- Custom Software ---
  {
    id: "crm-development",
    title: "CRM Systems",
    shortDescription: "Manage your customer relationships with custom CRM software.",
    description: "Own your sales process and customer data.",
    icon: "ShieldCheck",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "8–16 weeks",
    features: [
      "Dynamic Lead Tracking & Qualification",
      "Visual Sales Pipeline & Moveable stages",
      "Integrated Email & Communication history",
      "Advanced Visual Reporting & Analytics",
      "Automated Tasks & REMINDERS for sales",
      "Custom Third-party Tool integrations"
    ],
    deliverables: [
      "Bespoke Customer Relationship Management",
      "Sales & Management Dashboards",
      "Data Migration from legacy systems",
      "Integrated Communication Engine",
      "Onboarding & Team training",
      "Continuous system improvements"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "custom-web-development",
    title: "Bespoke Software",
    shortDescription: "Bespoke web applications tailored specifically to your business needs.",
    description: "When standard solutions fail, we invent.",
    icon: "Plug",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "8–16 weeks",
    features: [
      "Unique technical architecture from scratch",
      "Bespoke business logic implementation",
      "Custom Third-party Sync & Integrations",
      "Complex Data Processing & Automation",
      "Enterprise-grade Security & Scalability",
      "Micro-interactions & Custom UI elements"
    ],
    deliverables: [
      "Completely bespoke Web Application",
      "Full API & Architecture documentation",
      "Custom Automated Testing suite",
      "Deployment in highly available environment",
      "Dedicated development & support team",
      "IP Ownership & Source code handover"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "mern-development",
    title: "MVP Engines",
    shortDescription: "Modern, end-to-end JavaScript applications for fast market entry.",
    icon: "Rocket",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "8–12 weeks",
    features: [
      "Full JavaScript Stack (Consistency across layers)",
      "NoSQL Flexibility with MongoDB",
      "Blazing fast React-based frontend",
      "Scalable Node.js/Express backend services",
      "Real-time functionality with Socket.io",
      "Easy Cloud Deployment (Vercel/AWS/Render)"
    ],
    deliverables: [
      "Production-ready MERN Application",
      "Optimized NoSQL Database architecture",
      "State management implementation (Redux/Zustand)",
      "Continuous Integration/Deployment setup",
      "Full API documentation",
      "Performance & Load testing report"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software",
    seoTitle: "MERN Stack Development Company India | Webkaro",
    seoDescription: "Full-stack MERN development company in India. MongoDB, Express, React, Node.js. Scalable apps, fast MVP delivery.",
    description: "The MERN stack — MongoDB, Express.js, React, and Node.js — is the gold standard for modern startups and interactive applications. We build end-to-end JavaScript applications that scale from MVP to millions of users.",
    whyChoosePoints: [
      "Full JavaScript consistency from database to UI — reduces context switching and bugs",
      "Massive npm ecosystem with 1M+ reusable packages — faster delivery",
      "Real-time capabilities built-in (Socket.io, WebSockets) for chat, collaboration, live dashboards",
      "Single-language hiring — easier to scale your team with JavaScript developers",
      "Battle-tested by Netflix, Uber, PayPal, and Airbnb in production",
    ],
    techStackDetails: [
      {
        name: "MongoDB",
        description: "NoSQL document database that scales horizontally. Schema flexibility lets you iterate quickly without expensive migrations. Includes Atlas cloud hosting, replica sets, and sharding for production workloads.",
      },
      {
        name: "Express.js",
        description: "Minimalist Node.js web framework for building REST APIs and server-side rendering. Middleware ecosystem for auth, rate-limiting, logging, and input validation. Powers the backend API layer with JWT and session support.",
      },
      {
        name: "React",
        description: "Component-based frontend library with virtual DOM. Hooks for state management (useState, useEffect, useContext). State management via Redux Toolkit, Zustand, or React Query. Component libraries: Tailwind CSS, Framer Motion, Radix UI.",
      },
      {
        name: "Node.js",
        description: "Server-side JavaScript runtime built on V8. Event-driven, non-blocking I/O for high concurrency. Used for API servers, real-time WebSocket servers, and backend microservices. Deployed on Vercel, AWS, or Render.",
      },
      {
        name: "Additional Tools",
        description: "TypeScript for type safety across the stack. GraphQL for flexible API queries. Socket.io for real-time bidirectional communication. Redis for caching and pub/sub. Docker for containerized deployment. Jest for testing.",
      },
    ],
    processSteps: [
      {
        step: "Week 1–2",
        title: "Requirements & Architecture",
        description: "Define project scope, database schema, API endpoints, and system architecture. Choose third-party integrations. Set up version control and CI/CD pipeline.",
      },
      {
        step: "Week 3–6",
        title: "Frontend Development",
        description: "Build React components, implement state management, integrate UI/UX designs. Set up routing, authentication flow, and responsive layouts.",
      },
      {
        step: "Week 7–10",
        title: "Backend Development",
        description: "Design MongoDB schemas, build Express REST/GraphQL APIs, implement authentication & authorization. Add real-time features with Socket.io.",
      },
      {
        step: "Week 11–12",
        title: "Testing & Deployment",
        description: "Write unit/integration tests, perform load testing, optimize performance. Deploy to Vercel/AWS/Render with CI/CD automation.",
      },
      {
        step: "Week 13+",
        title: "Post-Launch Support",
        description: "Monitor performance, fix bugs, gather feedback, and iterate. Ongoing maintenance and scaling support.",
      },
    ],
    caseStudy: {
      project: "EdTech Analytics Dashboard",
      challenge: "A Delhi-based edtech startup needed a real-time analytics dashboard to track 10,000+ student activities across multiple schools, with sub-second query response times.",
      solution: "Built a MERN application with MongoDB aggregation pipelines for analytics, Redis caching for hot queries, Socket.io for live updates, and React with Chart.js for visualizations. Deployed on AWS with auto-scaling.",
      results: "Achieved 40ms average API response time, supported 10K concurrent users, reduced query latency by 70%, and enabled real-time insights for 500+ educators.",
    },
    faqs: [
      {
        question: "What is a MERN stack development company in India?",
        answer: "A MERN stack development company in India specializes in building full-stack web applications using MongoDB (database), Express.js (backend framework), React (frontend library), and Node.js (server runtime). We're based in Delhi and serve startups and enterprises across India and globally.",
      },
      {
        question: "What can a MERN stack web development company in India build for me?",
        answer: "MERN stack companies can build real-time dashboards, SaaS applications, e-commerce platforms, social media apps, marketplaces, chat applications, booking systems, and enterprise admin panels — anything requiring a dynamic, data-driven frontend and a scalable backend.",
      },
      {
        question: "How much does MERN stack development cost in India?",
        answer: "A basic MVP on the MERN stack costs between ₹12–25 lakhs in India. Complex applications with real-time features, advanced authentication, and third-party integrations range from ₹25–60 lakhs. Enterprise-grade platforms can cost ₹60+ lakhs.",
      },
      {
        question: "How long does it take to build a MERN stack application?",
        answer: "A simple MVP takes 8–12 weeks on the MERN stack. A full-featured application with real-time capabilities takes 4–6 months. Complex enterprise platforms may take 6–12 months from concept to launch.",
      },
      {
        question: "Why choose a MERN stack development company in India over hiring freelancers?",
        answer: "An established MERN company provides full project accountability, dedicated team support, code quality standards, deployment assistance, security audits, and ongoing maintenance. Freelancers often lack scalability, documentation, and long-term support.",
      },
    ],
  },
  {
    id: "fullstack-development",
    title: "Full Stack Platforms",
    shortDescription: "One-stop solution for front-to-back development and architecture.",
    description: "We handle everything from the first pixel to the last byte.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "10–20 weeks",
    features: [
      "End-to-End Technical Ownership",
      "Holistic Application & Cloud Architecture",
      "Unified & Modern Tech Stack selection",
      "Single Point of Communication & Accountability",
      "Seamless Design-to-Code translation",
      "Full Security & Performance optimization"
    ],
    deliverables: [
      "Complete, Turnkey Digital Product",
      "Architecture Blueprints & Diagrams",
      "Comprehensive QA & Bug-free guarantee",
      "DevOps & Infrastructure automation",
      "Admin & User documentation",
      "Post-launch evolutionary support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "cms-development",
    title: "CMS Solutions",
    shortDescription: "User-friendly content management systems for complete control.",
    description: "Don't be held hostage by technical complexity.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "3–6 weeks",
    features: [
      "Custom Field & Content type modeling",
      "Granular RBAC & Workflow management",
      "Powerful Media Library & CDN integration",
      "Headless & Multi-platform delivery",
      "Rich Text & Layout builders",
      "Revision History & content recovery"
    ],
    deliverables: [
      "Tailored Content Management System",
      "Editorial training & User guides",
      "Custom Content API for frontends",
      "Performance-tuned media management",
      "Integration with Marketing tools",
      "Ongoing CMS security updates"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "api-development",
    title: "API & Integrations",
    shortDescription: "Secure and performant REST & GraphQL APIs for your data.",
    description: "The backbone of your digital ecosystem.",
    icon: "Plug",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "3–6 weeks",
    features: [
      "RESTful & GraphQL API Architectures",
      "Comprehensive Swagger/OpenAPI Documentation",
      "Advanced Rate Limiting & Security Hardening",
      "Robust OAuth2 & JWT Authentication",
      "Highly scalable & stateless design",
      "Detailed Logging & Monitoring integration"
    ],
    deliverables: [
      "High-performance API Server",
      "Live Documentation & Playground (Postman)",
      "Security Audit & Integration keys",
      "Deployment in Clustered environment",
      "System integration & test reports",
      "Developer-centric technical support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },

  // --- Growth ---
  {
    id: "performance",
    title: "SEO Performance",
    shortDescription: "Make your existing app 2x-5x faster with expert tuning.",
    description: "Slow applications lose users and revenue.",
    icon: "Zap",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "2 weeks",
    features: [
      "Significant Payload & Bundle reduction",
      "Deep Database Query & Index tuning",
      "Advanced Caching (Redis/Edge) strategies",
      "Perfect Lighthouse & Core Web Vitals audit",
      "Server-side execution time reduction",
      "Asset & Media compression pipelines"
    ],
    deliverables: [
      "Highly Optimized Web Application",
      "Comprehensive Performance Audit Report",
      "Infrastructure rightsizing recommendations",
      "Monitoring & Alerting tools setup",
      "Ongoing Performance monitoring",
      "Code-level optimization patches"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Growth"
  },
  {
    id: "cloud-migration",
    title: "Infrastructure",
    shortDescription: "Move your legacy infrastructure to AWS, GCP, or Azure with zero downtime.",
    description: "Modernize your infrastructure for the future.",
    icon: "Cloud",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "4–8 weeks",
    features: [
      "Zero-downtime Migration Strategy",
      "Expert AWS/GCP/Azure Infrastructure setup",
      "Advanced Data Validation & verification",
      "Cloud Cost Optimization & rightsizing",
      "Disaster Recovery & Backup planning",
      "Secure VPC & Network configuration"
    ],
    deliverables: [
      "Migrated Cloud Infrastructure",
      "Post-migration Performance Report",
      "Cloud Governance & Security Policy",
      "Staff training on Cloud Management",
      "Automated Backup & DR system",
      "3 months of Post-migration monitoring"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Growth"
  },
  {
    id: "aws-deployment",
    title: "DevOps & Scale",
    shortDescription: "Expert AWS infrastructure setup for scale and reliability.",
    description: "Harness the power of the world's leading cloud provider.",
    icon: "Cloud",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "2–4 weeks",
    features: [
      "Elastic Load Balancing & Auto-scaling",
      "Highly available RDS/PostgreSQL databases",
      "Serverless (Lambda) performance tuning",
      "CloudWatch monitoring & alerting systems",
      "IAM-based security & permissions",
      "CloudFront CDN global edge delivery"
    ],
    deliverables: [
      "Ready-to-scale AWS Environment",
      "Infrastructure-as-Code (Terraform/CDK)",
      "Security & Cost Dashboard setup",
      "Deployment pipeline automation",
      "Incident Response documentation",
      "Monthly AWS optimization checkups"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Growth"
  },
  {
    id: "ci-cd",
    title: "CI/CD Pipelines",
    shortDescription: "Automated deployment pipelines for faster shipping.",
    description: "Ship code with total confidence.",
    icon: "Zap",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "1–2 weeks",
    features: [
      "Automated GitHub Actions/GitLab CI",
      "Parallel Testing & Static analysis",
      "Staging & Preview Environments for review",
      "Zero-downtime Blue/Green deployments",
      "Automated Security & Vulnerability scans",
      "One-click or fully automated Rollsouts"
    ],
    deliverables: [
      "Automated Deployment Pipelines",
      "CI/CD workflow documentation",
      "Integrated Dashboard for build status",
      "Slack/Discord notification alerts",
      "Infrastructure-as-Code scripts",
      "Pipeline maintenance training"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Growth"
  },
  {
    id: "server-management",
    title: "Server Management",
    shortDescription: "Expert server administration and 24/7 infrastructure monitoring.",
    description: "Stop worrying about your servers.",
    icon: "ShieldCheck",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "Ongoing",
    features: [
      "24/7 Real-time Performance Monitoring",
      "Hardened Linux Security & Patching",
      "Automated Daily Backups & Recovery",
      "Intrusion Detection & Prevention (IDS/IPS)",
      "SSL/TLS Management & Monitoring",
      "Log rotation & system health cleanups"
    ],
    deliverables: [
      "Fully Managed Server Infrastructure",
      "Monthly Security & Health Reports",
      "Custom Monitoring Dashboards (Grafana)",
      "Emergency Response documentation",
      "Incident Alerting & Root Cause analysis",
      "Dedicated Technical Account Manager"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Growth"
  },
  {
    id: "nextjs-development",
    title: "Next.js Engineering",
    shortDescription: "SEO-perfect, ultra-fast web apps using the latest Next.js features.",
    description: "Experience the cutting-edge of web engineering.",
    icon: "Zap",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "4–8 weeks",
    features: [
      "Server-side Rendering & Static Generation",
      "Optimized Routing & Image handling",
      "Edge Computing & Serverless execution",
      "Exceptional Core Web Vitals (lighthouse 100s)",
      "Incremental Static Regeneration (ISR)",
      "Advanced SEO & Metadata API management"
    ],
    deliverables: [
      "Enterprise-grade Next.js Application",
      "Serverless Backend & API routes",
      "Highly optimized Frontend assets",
      "Vercel/AWS Amplify deployment setup",
      "Performance & SEO benchmark report",
      "Next-gen maintenance & support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "react-development",
    title: "React Frontend",
    shortDescription: "Dynamic, reusable, and blazing fast frontend components.",
    description: "We build highly interactive and specialized user interfaces using React.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "3–6 weeks",
    features: [
      "Modular, Reusable Component Architecture",
      "Highly Optimized Hooks & State Logic",
      "Fast Refresh & Dynamic User Experiences",
      "Advanced State Management (Context/Redux)",
      "Rich Animations & Interactivity",
      "Large-scale Application Performance tuning"
    ],
    deliverables: [
      "Interactive React UI/UX System",
      "Component Library & Style Guide",
      "State & Logic documentation",
      "Automated Frontend testing suite",
      "Modern Tooling & Build setup",
      "Expert React consultancy & support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "laravel-development",
    title: "Laravel Backend",
    shortDescription: "Elegant and powerful backend solutions using the PHP Laravel framework.",
    description: "Leverage the power of the 'PHP Framework for Web Artisans'.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "4–8 weeks",
    features: [
      "Secure & Modular MVC Architecture",
      "Robust Authentication & Authorization system",
      "Database Migrations & Real-time Broadcasting",
      "Integrated Testing & Debugging tools",
      "High-performance caching with Redis/Memcached",
      "Elegant Eloquent ORM for data management"
    ],
    deliverables: [
      "Clean, maintainable Laravel Backend",
      "RESTful/GraphQL API for dynamic apps",
      "Automated unit & integration tests",
      "Server-side performance tuning",
      "Comprehensive Database schema",
      "Expert Laravel technical support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "php-development",
    title: "PHP Solutions",
    shortDescription: "Reliable and cost-effective PHP solutions for websites and apps.",
    description: "Solid, time-tested PHP development for a wide range of applications.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "3–6 weeks",
    features: [
      "Solid core PHP & OOP-based development",
      "Highly cost-effective & server-agnostic",
      "Broad platform & server support",
      "Database-driven dynamic content",
      "Easy maintenance & legacy integration",
      "Robust security against common vulnerabilities"
    ],
    deliverables: [
      "Reliable PHP web application",
      "Database integration (MySQL/PostgreSQL)",
      "Secure contact & data processing forms",
      "Hosting & Server setup guidance",
      "Complete Source Code documentation",
      "Essential security hardening"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "nodejs-development",
    title: "Node.js Backend",
    shortDescription: "Fast, event-driven backend services for modern applications.",
    description: "Scale your application to handle massive concurrency.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "4–8 weeks",
    features: [
      "High-concurrency Event-driven design",
      "Real-time communication with WebSockets",
      "Advanced Performance & Memory tuning",
      "Scalable Redis Caching & Queue management",
      "Secure & Modular API architecture",
      "Microservice-ready structural design"
    ],
    deliverables: [
      "High-performance Node.js Backend",
      "Comprehensive API documentation",
      "Docker/Kubernetes ready build",
      "Security Audit & Scanning report",
      "Load balancer & Clustering setup",
      "Expert technical support & updates"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "microservices",
    title: "Microservices",
    shortDescription: "Decoupled and scalable system architecture for large scale apps.",
    description: "Break free from the monolithic cage.",
    icon: "Plug",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "12–24 weeks",
    features: [
      "Decoupled & Independent Service design",
      "Resilient Service Mesh (Istio/Linkerd)",
      "Containerization (Docker) & Orchestration",
      "API Gateway & Load Switching management",
      "Distributed Logging & Observability",
      "Inter-service Communication (gRPC/RabbitMQ)"
    ],
    deliverables: [
      "Decoupled Microservices Ecosystem",
      "Kubernetes Deployment & YAMLs",
      "Service Registry & Discovery system",
      "CI/CD Orchestration pipelines",
      "Architecture & Maintenance guide",
      "Dedicated SRE technical support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "portal-development",
    title: "Enterprise Portals",
    shortDescription: "Custom enterprise portals for seamless user interaction.",
    description: "We build secure, large-scale portals.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "6–12 weeks",
    features: [
      "Granular RBAC (Role-Based Access Control)",
      "Real-time Data Visualizations & BI Dashboards",
      "Document Management & Collaboration tools",
      "Audit Logging & Activity tracking",
      "Whitelabeling & Branding customized for clients",
      "Secure File Sharing & Communication modules"
    ],
    deliverables: [
      "Scalable Enterprise Portal Software",
      "Dedicated Admin & User Interfaces",
      "API documentation for integrations",
      "Security Audit & Pentesting report",
      "Deployment on private/hybrid cloud",
      "6 months of premium technical support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "news-portal",
    title: "News & Media",
    shortDescription: "High-traffic news and media platforms with easy CMS.",
    description: "Launch a competitive news organization.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "4–8 weeks",
    features: [
      "Optimized Ad Management (DFP/AdSense/Custom)",
      "Live Breaking News Notifications (Browser/App)",
      "Multi-stage Editorial & Approval Workflows",
      "High-concurrency caching for viral traffic",
      "Social Media auto-posting & engagement tools",
      "Multimedia (Video/Podcast) integration"
    ],
    deliverables: [
      "Scalable News & Media Platform",
      "Journalist & Editor Dashboard",
      "Monetization & Ad tracking setup",
      "Newsletter & Push Notification system",
      "Google News & RSS feed integration",
      "Performance monitoring for peak traffic"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "job-portal",
    title: "Job Portal",
    shortDescription: "Connect talent with opportunities through custom job boards.",
    description: "Create a powerful ecosystem for recruitment.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "6–10 weeks",
    features: [
      "Advanced Job Posting & Featured listings",
      "Resume Builder & Smart parsing technology",
      "Applicant Tracking System (ATS) with stages",
      "Employer Dashboard for recruitment management",
      "Skill-based Matching & Email alerts",
      "Secure Video Interview & Chat integration"
    ],
    deliverables: [
      "Full-stack Recruitment Platform",
      "Dedicated Portals for Job Seekers & Employers",
      "Integrated Email/SMS notification engine",
      "Premium billing & subscription system",
      "Data privacy & compliance (GDPR) setup",
      "Ongoing technical & database support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "matrimonial-portal",
    title: "Matrimonial Portal",
    shortDescription: "Secure and feature-rich matrimonial platforms for connecting people.",
    description: "Build a trusted and safe digital match-making environment.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "8–12 weeks",
    features: [
      "Rigorous Profile Verification & Moderation",
      "Advanced AI-driven Matchmaking Algorithms",
      "Secure One-to-One messaging/calling",
      "Granular Privacy & Visibility controls",
      "Premium Membership & Billing plans",
      "Multimedia Profile (Photo/Video) management"
    ],
    deliverables: [
      "Feature-rich Matrimonial Platform",
      "Admin Moderation & Approval Panel",
      "Member billing & subscription system",
      "Automated matching engine logic",
      "Data protection & Privacy setup",
      "Launch strategy & technical support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "b2b-portal",
    title: "B2B Portal",
    shortDescription: "Bulk order management and business-to-business networking portals.",
    description: "Revolutionize your wholesale operations.",
    icon: "Laptop",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "8–14 weeks",
    features: [
      "Dynamic wholesale & Tier-based Pricing",
      "Integrated Vendor & Distributor management",
      "Comprehensive Tax Compliance & Invoicing",
      "High-volume Bulk Order & Fulfillment logic",
      "Credit Management & Ledger tracking",
      "External ERP & Inventory sync capabilities"
    ],
    deliverables: [
      "Enterprise B2B Commerce Platform",
      "Self-service Customer/Vendor Portals",
      "Integrated Invoicing & Payment system",
      "Supply chain tracking & dashboards",
      "Migration support for legacy data",
      "6 months of premium technical support"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
  {
    id: "travel-portal",
    title: "Travel Portal",
    shortDescription: "Booking engines and travel management systems for agencies.",
    description: "Launch a worldwide travel brand.",
    icon: "Globe",
    price: "5K to 10K",
    pricingHint: "5K to 10K",
    timeline: "6–12 weeks",
    features: [
      "Real-time GDS (Amadeus/Sabre) integration",
      "Advanced Flight/Hotel Booking Engines",
      "Custom Tour Package builders & itineraries",
      "Multi-Gateway Payment & Currency support",
      "Automated E-Ticket & Voucher generation",
      "B2B Agent & B2C customer interfaces"
    ],
    deliverables: [
      "Global Travel Booking Platform",
      "Agent & Inventory Management System",
      "API connectivity for third-party feeds",
      "Financial reporting & commission management",
      "Mobile-responsive booking flow",
      "Post-launch API maintenance"
    ],
    color: "from-stone-200/60 to-stone-100/60",
    glow: "bg-stone-200/40",
    category: "Custom Software"
  },
];

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);

export const serviceCategories = [
  { name: "Website Design", description: "Crafting digital experiences that leave lasting impressions" },
  { name: "Custom Software", description: "Bespoke engineering for complex business challenges" },
  { name: "Growth", description: "Infrastructure and optimization to scale your product" },
] as const;

export type ServiceCategory = typeof serviceCategories[number]["name"];

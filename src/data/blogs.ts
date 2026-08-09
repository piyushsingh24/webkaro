export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  readTime: string;
}

export const blogs: BlogPost[] = [
  {
    id: "high-performance-nextjs",
    title: "How We Build High-Performance Next.js Applications That Scale",
    excerpt: "Building for performance isn't just about speed; it's about architecture. Learn our internal framework for Next.js 16.",
    category: "Engineering",
    author: "Webkaro Collective",
    date: "Oct 12, 2024",
    slug: "high-performance-nextjs",
    readTime: "8 min read",
    content: "Content about Next.js performance, App Router, and server components..."
  },
  {
    id: "startup-mvp-framework",
    title: "From Idea to MVP: Our Startup Development Framework",
    excerpt: "Launching a startup is hard. Our framework ensures you launch fast with the right features and rock-solid architecture.",
    category: "Startup Strategy",
    author: "Webkaro Collective",
    date: "Oct 05, 2024",
    slug: "startup-mvp-framework",
    readTime: "10 min read",
    content: "Content about MVP development cycles, feature prioritization, and validation..."
  },
  {
    id: "designing-for-conversions",
    title: "Designing for Conversions: UI Decisions That Increase Revenue",
    excerpt: "Stop designing just for looks. Start designing for results. Here's our guide to conversion-focused UI design.",
    category: "UI/UX Design",
    author: "Webkaro Collective",
    date: "Sep 28, 2024",
    slug: "designing-for-conversions",
    readTime: "6 min read",
    content: "Content about UX psychology, color theory for conversions, and GSAP micro-interactions..."
  },
  {
    id: "scalability-architecture",
    title: "Structuring Full-Stack Applications for Long-Term Scalability",
    excerpt: "Avoid technical debt from day one. Our architectural guide to building maintainable full-stack systems.",
    category: "Software Architecture",
    author: "Webkaro Collective",
    date: "Sep 20, 2024",
    slug: "scalability-architecture",
    readTime: "12 min read",
    content: "Content about folder structure, separation of concerns, and choosing the right database..."
  },
  {
    id: "core-web-vitals-explained",
    title: "Optimizing Web Performance: Core Web Vitals Explained",
    excerpt: "Everything you need to know about LCP, FID, and CLS, and how to reach perfect scores.",
    category: "Performance",
    author: "Webkaro Collective",
    date: "Sep 15, 2024",
    slug: "core-web-vitals-explained",
    readTime: "7 min read",
    content: "Detailed guide on Lighthouse scores and optimization techniques..."
  },
  {
    id: "community-driven-development",
    title: "Why Community-Driven Development Outperforms Traditional Agencies",
    excerpt: "Learn why our collective model delivers better talent and more innovative products.",
    category: "Industry Trends",
    author: "Webkaro Collective",
    date: "Sep 10, 2024",
    slug: "community-driven-development",
    readTime: "5 min read",
    content: "Benefits of a collaborative collective model over traditional hierarchies..."
  },
  {
    id: "choose-mern-company-india",
    title: "How to Choose the Right MERN Stack Development Company in India",
    excerpt: "Not all MERN stack companies are created equal. Here's the 10-point checklist Indian startups use to pick a development partner that delivers.",
    category: "Engineering",
    author: "Webkaro Collective",
    date: "Aug 09, 2025",
    slug: "choose-mern-development-company-india",
    readTime: "9 min read",
    content: "Guide on evaluating MERN stack development companies in India: portfolio review, tech stack depth, communication, pricing models, and red flags to avoid..."
  },
  {
    id: "mern-vs-mean-vs-pern",
    title: "MERN vs MEAN vs PERN: Which JavaScript Stack is Best for Your Startup in 2026?",
    excerpt: "MongoDB, Express, React, Node.js vs. Angular, vs. PostgreSQL. A detailed comparison to help Indian startups pick the right stack for their product.",
    category: "Engineering",
    author: "Webkaro Collective",
    date: "Aug 02, 2025",
    slug: "mern-vs-mean-vs-pern-stack-comparison",
    readTime: "12 min read",
    content: "Detailed comparison of MERN, MEAN, and PERN stacks: pros, cons, use cases, performance, hiring market, and cost implications for Indian startups..."
  },
  {
    id: "real-time-mern-apps",
    title: "Building Real-Time Web Apps with MERN: A Step-by-Step Guide for Indian Startups",
    excerpt: "From WebSockets to Redis pub/sub — learn how to architect and deploy real-time features on the MERN stack with production-best practices.",
    category: "Engineering",
    author: "Webkaro Collective",
    date: "Jul 25, 2025",
    slug: "building-real-time-web-apps-mern",
    readTime: "15 min read",
    content: "Step-by-step guide to building real-time features with MERN: Socket.io setup, Redis pub/sub, scaling websockets, handling disconnects, and deployment on AWS..."
  },
  {
    id: "mern-project-ideas-india",
    title: "Top 10 MERN Stack Project Ideas for Indian Developers in 2026",
    excerpt: "From portfolio apps to SaaS dashboards — build your skills and portfolio with these practical MERN stack project ideas tailored for the Indian market.",
    category: "Engineering",
    author: "Webkaro Collective",
    date: "Jul 18, 2025",
    slug: "mern-stack-project-ideas-india",
    readTime: "8 min read",
    content: "10 practical MERN stack project ideas for Indian developers: difficulty levels, features to implement, deployment tips, and learning paths..."
  },
  {
    id: "mern-app-cost-india",
    title: "How Much Does a MERN Stack Web Application Cost in India?",
    excerpt: "From ₹12 lakhs for an MVP to ₹60+ lakhs for enterprise — here's the real breakdown of MERN stack development costs in India.",
    category: "Startup Strategy",
    author: "Webkaro Collective",
    date: "Jul 10, 2025",
    slug: "mern-stack-development-cost-india",
    readTime: "11 min read",
    content: "Complete cost breakdown for MERN stack development in India: team composition, hourly rates by experience level, feature-based pricing, and hidden costs..."
  }
];

export const getBlogBySlug = (slug: string) => blogs.find(b => b.slug === slug);

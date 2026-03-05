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
  }
];

export const getBlogBySlug = (slug: string) => blogs.find(b => b.slug === slug);

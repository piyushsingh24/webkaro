module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/error.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/error.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/services/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/loading.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/data/services.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getServiceById",
    ()=>getServiceById,
    "services",
    ()=>services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/laptop.js [app-rsc] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud.js [app-rsc] (ecmascript) <export default as Cloud>");
;
const services = [
    // --- Website Solutions ---
    {
        id: "static-website-design",
        title: "Static Website Design",
        shortDescription: "Blazing fast, secure, and SEO-friendly static websites for your business.",
        description: "Our static website design service focuses on speed, security, and exceptional user experience. We use modern static site generators and edge delivery networks to ensure your site loads instantly globally. These websites are nearly impossible to hack and require virtually zero maintenance, making them ideal for high-performance corporate portfolios, professional landing pages, and content-driven sites.",
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
        color: "from-blue-500/20 to-cyan-500/20",
        glow: "bg-blue-500/10"
    },
    {
        id: "dynamic-website-design",
        title: "Dynamic Website Design",
        shortDescription: "Interactive and database-driven websites with custom functionality.",
        description: "Dynamic websites empower you to take full control of your digital presence. We build interactive platforms with powerful content management systems (CMS) that allow you to update news, blogs, services, and media without any technical knowledge. Our solutions are built to scale, ensuring your website grows as your business grows.",
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
        color: "from-purple-500/20 to-pink-500/20",
        glow: "bg-purple-500/10"
    },
    {
        id: "ecommerce-website-design",
        title: "E-Commerce Website Design",
        shortDescription: "Scalable online stores built for high conversion and seamless shopping.",
        description: "Transform your business into a 24/7 sales machine. We engineer high-conversion E-commerce platforms that focus on the customer journey. From intuitive product discovery to seamless checkout and secure payment processing, every element is designed to maximize your ROI and minimize abandoned carts.",
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
        color: "from-orange-500/20 to-red-500/20",
        glow: "bg-orange-500/10"
    },
    {
        id: "corporate-website-design",
        title: "Corporate Website Design",
        shortDescription: "Professional digital presence tailored for established businesses.",
        description: "Build unmatched authority and trust with a premium corporate website. We specialize in creating sophisticated digital identities for established organizations. Our focus is on brand consistency, lead generation, and showcasing your company's values, team, and success stories with high-quality visual storytelling.",
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
        color: "from-indigo-500/20 to-blue-500/20",
        glow: "bg-indigo-500/10"
    },
    {
        id: "website-redesign",
        title: "Website Redesign",
        shortDescription: "Give your legacy website a modern, high-performance makeover.",
        description: "Don't let an outdated website drive your customers to competitors. Our redesign service breathes new life into your digital presence. We modernize your UI/UX, migrate your data to faster tech stacks, and optimize performance to meet modern web standards, ensuring your brand stays relevant and effective.",
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
        color: "from-emerald-500/20 to-green-500/20",
        glow: "bg-emerald-500/10"
    },
    {
        id: "landing-page-development",
        title: "Landing Page Development",
        shortDescription: "High-converting, focused landing pages for your marketing campaigns.",
        description: "Maximize your ad spend with precision-engineered landing pages. We build laser-focused pages designed for a single goal: conversion. By combining psychological triggers, blazing fast speeds, and clear call-to-actions, we turn your marketing traffic into qualified leads or paying customers.",
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
        color: "from-amber-500/20 to-yellow-500/20",
        glow: "bg-amber-500/10"
    },
    // --- Portal Solutions ---
    {
        id: "portal-development",
        title: "Portal Development",
        shortDescription: "Custom enterprise portals for seamless user interaction.",
        description: "We build secure, large-scale portals that act as the digital bridge between your organization and its stakeholders. Whether it's a customer support portal, a partner management system, or an internal operations dashboard, we ensure a seamless flow of information with enterprise-grade security.",
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
        color: "from-blue-600/20 to-blue-400/20",
        glow: "bg-blue-600/10"
    },
    {
        id: "news-portal",
        title: "News Portal Development",
        shortDescription: "High-traffic news and media platforms with easy CMS.",
        description: "Launch a competitive news organization with a robust, high-traffic media platform. We optimize for millions of impressions, providing an easy-to-use editorial workflow for your journalists and a lightning-fast experience for your readers, with built-in monetization and engagement features.",
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
        color: "from-red-600/20 to-red-400/20",
        glow: "bg-red-600/10"
    },
    {
        id: "job-portal",
        title: "Job Portal Development",
        shortDescription: "Connect talent with opportunities through custom job boards.",
        description: "Create a powerful ecosystem for recruitment. Our job portals provide seamless experiences for both employers and job seekers, with advanced resume matching, automated application tracking, and secure communication tools to streamline the entire hiring process.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
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
        color: "from-emerald-600/20 to-emerald-400/20",
        glow: "bg-emerald-600/10"
    },
    // --- Web Development ---
    {
        id: "custom-web-development",
        title: "Custom Web Development",
        shortDescription: "Bespoke web applications tailored specifically to your business needs.",
        description: "When standard solutions fail, we invent. Our custom development service is for businesses that have unique vision or disruptive workflows. We build highly specialized, secure, and scalable applications from scratch, using the most appropriate technologies for your specific goals.",
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
        color: "from-zinc-500/20 to-zinc-400/20",
        glow: "bg-zinc-500/10"
    },
    {
        id: "laravel-development",
        title: "Laravel Web Development",
        shortDescription: "Elegant and powerful backend solutions using the PHP Laravel framework.",
        description: "Leverage the power of the 'PHP Framework for Web Artisans'. We build robust, secure, and highly maintainable backends using Laravel. Our solutions follow modern MVC patterns and best practices, ensuring your application is fast, stable, and ready for future expansion.",
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
        color: "from-red-500/20 to-orange-500/20",
        glow: "bg-red-500/10"
    },
    {
        id: "php-development",
        title: "PHP Web Development",
        shortDescription: "Reliable and cost-effective PHP solutions for websites and apps.",
        description: "Solid, time-tested PHP development for a wide range of applications. Whether you need legacy support, custom extensions, or a new build on a budget, we provide high-performance and reliable PHP engineering that powers over 70% of the web today.",
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
        color: "from-indigo-600/20 to-indigo-400/20",
        glow: "bg-indigo-600/10"
    },
    {
        id: "mern-development",
        title: "MERN Stack Development",
        shortDescription: "Modern, end-to-end JavaScript applications using Mongo, Express, React, Node.",
        description: "The gold standard for modern startups and interactive apps. We build cohesive, ultra-fast, and highly scalable applications using a unified JavaScript ecosystem. The MERN stack allows for rapid development, real-time features, and a seamless developer-to-production pipeline.",
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
        color: "from-green-500/20 to-cyan-500/20",
        glow: "bg-green-500/10"
    },
    {
        id: "fullstack-development",
        title: "Full Stack Development",
        shortDescription: "One-stop solution for front-to-back development and architecture.",
        description: "We handle everything from the first pixel to the last byte. Our full-stack service provides a unified development partner who understands how every layer of your application interacts. We ensure seamless communication between UI, APIs, databases, and infrastructure.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"],
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
        color: "from-sky-500/20 to-blue-500/20",
        glow: "bg-sky-500/10"
    },
    // --- Modern Stack ---
    {
        id: "nextjs-development",
        title: "Next.js Development",
        shortDescription: "SEO-perfect, ultra-fast web apps using the latest Next.js 15+ features.",
        description: "Experience the cutting-edge of web engineering. We leverage Next.js features like Server Components, Streaming, and PPR (Partial Prerendering) to deliver websites that are not just fast, but provide the absolute best SEO and user experience available today.",
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
        color: "from-zinc-800/20 to-zinc-600/20",
        glow: "bg-zinc-800/10"
    },
    {
        id: "react-development",
        title: "React Development",
        shortDescription: "Dynamic, reusable, and blazing fast frontend components.",
        description: "We build highly interactive and specialized user interfaces using React. Our focus is on component modularity, state management efficiency, and smooth, meaningful animations that enhance user engagement and provide a premium app-like feel on the web.",
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
        color: "from-sky-400/20 to-blue-400/20",
        glow: "bg-sky-400/10"
    },
    {
        id: "api-development",
        title: "API Development",
        shortDescription: "Secure and performant REST & GraphQL APIs for your data.",
        description: "The backbone of your digital ecosystem. We build reliable, secure, and performant APIs that connect your frontends, mobile apps, and third-party systems seamlessly. We focus on security (JWT/OAuth2), clear documentation, and ultra-fast response times.",
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
        color: "from-amber-600/20 to-orange-600/20",
        glow: "bg-amber-600/10"
    },
    // --- Cloud & DevOps ---
    {
        id: "cloud-migration",
        title: "Cloud Migration",
        shortDescription: "Move your legacy infrastructure to AWS, GCP, or Azure with zero downtime.",
        description: "Modernize your infrastructure for the future. We specialize in moving complex, on-premise, or shared-hosting systems to the cloud. We ensure 100% data integrity, zero downtime for your users, and a more cost-effective, scalable cloud environment.",
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
        color: "from-blue-600/20 to-indigo-600/20",
        glow: "bg-blue-600/10"
    },
    {
        id: "aws-deployment",
        title: "AWS Deployment",
        shortDescription: "Expert AWS infrastructure setup for scale and reliability.",
        description: "Harness the power of the world's leading cloud provider. We set up, manage, and optimize your AWS environment using best-in-class services like EC2, S3, RDS, and Lambda, ensuring your application can scale from zero to millions of users automatically.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
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
        color: "from-orange-500/20 to-yellow-500/20",
        glow: "bg-orange-500/10"
    },
    {
        id: "performance",
        title: "Performance Optimization",
        shortDescription: "Make your existing app 2x-5x faster with expert tuning.",
        description: "Slow applications lose users and revenue. We perform deep forensic analysis of your code, database queries, and infrastructure to eliminate bottlenecks and reach sub-second load times, significantly improving your SEO and conversion rates.",
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
        color: "from-pink-500/20 to-rose-500/20",
        glow: "bg-pink-500/10"
    },
    {
        id: "matrimonial-portal",
        title: "Matrimonial Portal",
        shortDescription: "Secure and feature-rich matrimonial platforms for connecting people.",
        description: "Build a trusted and safe digital match-making environment. Our matrimonial portals focus on profile verification, sophisticated matching algorithms, and advanced privacy controls, providing a premium experience that builds lifelong connections.",
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
        color: "from-rose-500/20 to-pink-500/20",
        glow: "bg-rose-500/10"
    },
    {
        id: "b2b-portal",
        title: "B2B Portal Development",
        shortDescription: "Bulk order management and business-to-business networking portals.",
        description: "Revolutionize your wholesale operations. Our B2B portals streamline complex business-to-business workflows, including tiered pricing, credit management, bulk order processing, and vendor-distributor communication in one unified, secure hub.",
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
        color: "from-slate-700/20 to-slate-500/20",
        glow: "bg-slate-700/10"
    },
    {
        id: "travel-portal",
        title: "Travel Portal",
        shortDescription: "Booking engines and travel management systems for agencies.",
        description: "Launch a worldwide travel brand. We build integrated travel booking engines with real-time connectivity to global distribution systems (GDS). From flights and hotels to custom tour packages, our portals handle complex booking logic with ease.",
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
            "Financial reporting & কমিশন management",
            "Mobile-responsive booking flow",
            "Post-launch API maintenance"
        ],
        color: "from-sky-600/20 to-cyan-600/20",
        glow: "bg-sky-600/10"
    },
    {
        id: "cms-development",
        title: "CMS Web Development",
        shortDescription: "User-friendly content management systems for complete control.",
        description: "Don't be held hostage by technical complexity. We build custom CMS solutions or implement Headless systems like Strapi/Sanity that give your team complete freedom to create, edit, and publish content across all your digital channels without writing code.",
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
        color: "from-teal-500/20 to-emerald-500/20",
        glow: "bg-teal-500/10"
    },
    {
        id: "crm-development",
        title: "CRM Development",
        shortDescription: "Manage your customer relationships with custom CRM software.",
        description: "Own your sales process and customer data. We build custom CRM systems that fit your unique sales pipeline perfectly. From lead tracking and automated follow-ups to visual analytics, we give your team the tools they need to close more deals.",
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
        color: "from-indigo-700/20 to-indigo-500/20",
        glow: "bg-indigo-700/10"
    },
    {
        id: "nodejs-development",
        title: "Node.js Backend",
        shortDescription: "Fast, event-driven backend services for modern applications.",
        description: "Scale your application to handle massive concurrency. We build asynchronous, non-blocking Node.js backends that excel at real-time, data-intensive applications. Our focus is on clean architecture, performance tuning, and highly secure API layers.",
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
        color: "from-green-600/20 to-green-400/20",
        glow: "bg-green-600/10"
    },
    {
        id: "microservices",
        title: "Microservices Architecture",
        shortDescription: "Decoupled and scalable system architecture for large scale apps.",
        description: "Break free from the monolithic cage. We transition your applications to a microservices architecture, allowing your different business modules to scale, deploy, and evolve independently, improving maintainability and system resilience.",
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
        color: "from-violet-600/20 to-purple-600/20",
        glow: "bg-violet-600/10"
    },
    {
        id: "ci-cd",
        title: "CI/CD Setup",
        shortDescription: "Automated deployment pipelines for faster shipping.",
        description: "Ship code with total confidence. We automate your entire testing and deployment lifecycle using best-in-class CI/CD tools, ensuring every change is automatically verified and deployed to your users several times a day with zero human error.",
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
        color: "from-orange-600/20 to-amber-600/20",
        glow: "bg-orange-600/10"
    },
    {
        id: "server-management",
        title: "Server Management",
        shortDescription: "Expert server administration and 24/7 infrastructure monitoring.",
        description: "Stop worrying about your servers. We provide professional server administration, 24/7 monitoring, security hardening, and regular patching for your Linux infrastructure, ensuring your applications remain online, secure, and performant around the clock.",
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
        color: "from-zinc-700/20 to-zinc-500/20",
        glow: "bg-zinc-700/10"
    }
];
const getServiceById = (id)=>services.find((s)=>s.id === id);
}),
"[project]/src/components/ui/service-icon.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceIcon",
    ()=>ServiceIcon
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServiceIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServiceIcon() from the server but ServiceIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/service-icon.tsx <module evaluation>", "ServiceIcon");
}),
"[project]/src/components/ui/service-icon.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ServiceIcon",
    ()=>ServiceIcon
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ServiceIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ServiceIcon() from the server but ServiceIcon is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/service-icon.tsx", "ServiceIcon");
}),
"[project]/src/components/ui/service-icon.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$service$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/service-icon.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$service$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/service-icon.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$service$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServiceDetailPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-rsc] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-rsc] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$service$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/service-icon.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function generateStaticParams() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].map((s)=>({
            slug: s.id
        }));
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceById"])(slug);
    if (!service) return {
        title: "Service Not Found"
    };
    return {
        title: `${service.title} | WebKaro`,
        description: service.shortDescription
    };
}
async function ServiceDetailPage({ params }) {
    const { slug } = await params;
    const service = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceById"])(slug);
    if (!service) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    /* Other services for the "Explore more" strip */ const others = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["services"].filter((s)=>s.id !== service.id).slice(0, 3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pt-36 md:pt-44 pb-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 mb-20 md:mb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/services",
                            className: "inline-flex items-center gap-2 text-sm text-foreground/50 hover:text-primary transition-colors mb-10 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "w-4 h-4 transition-transform group-hover:-translate-x-1"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                "All Services"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-6 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.color} border border-primary/20`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$service$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServiceIcon"], {
                                        name: service.icon,
                                        className: "w-8 h-8 text-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-primary text-xs font-bold uppercase tracking-[0.3em] mb-2",
                                            children: "WebKaro Service"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-4xl md:text-6xl font-black text-foreground font-outfit leading-tight",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-foreground/65 text-lg md:text-xl max-w-3xl leading-relaxed",
                            children: service.description
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/25 text-primary font-bold text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        service.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground/5 border border-border text-foreground/70 font-semibold text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        service.timeline
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 mb-20 md:mb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-black text-foreground font-outfit mb-8 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary text-base",
                                                    children: "01"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, this),
                                            "Key Features"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: service.features.map((feature, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4 p-5 rounded-2xl border border-border bg-card dark:bg-white/[0.01] hover:border-primary/20 transition-all group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-4 h-4 text-primary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                            lineNumber: 105,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/75 font-medium text-sm leading-relaxed",
                                                        children: feature
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-3xl font-black text-foreground font-outfit mb-8 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary text-base",
                                                    children: "02"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this),
                                            "Deliverables"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: service.deliverables.map((deliverable, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-4 p-5 rounded-2xl border border-border bg-card dark:bg-white/[0.01] hover:border-primary/20 transition-all group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                            className: "w-4 h-4 text-primary/70"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                            lineNumber: 130,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-foreground/75 font-medium text-sm leading-relaxed",
                                                        children: deliverable
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 123,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 mb-20 md:mb-28",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative overflow-hidden rounded-3xl p-10 md:p-14 bg-gradient-to-br ${service.color} border border-primary/20`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 147,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl md:text-4xl font-black text-foreground font-outfit mb-4",
                                        children: "Ready to get started?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-foreground/70 text-base md:text-lg max-w-xl mb-8",
                                        children: "Let's discuss your project requirements. Book a free 30-min consultation and we'll put together a tailored proposal."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 152,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/contact",
                                                className: "inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 hover:scale-105 transition-all",
                                                children: [
                                                    "Book Free Consultation ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 42
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/services",
                                                className: "inline-flex items-center gap-2 px-7 py-3.5 border border-border rounded-xl font-semibold text-foreground/70 hover:border-primary/50 hover:text-primary transition-all text-sm",
                                                children: "Browse All Services"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/[slug]/page.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "px-6 mb-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-black text-foreground font-outfit mb-8",
                            children: "Explore More Services"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-5",
                            children: others.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/services/${s.id}`,
                                    className: "group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card dark:bg-white/[0.02] hover:border-primary/50 hover:-translate-y-1 transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-12 h-12 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br ${s.color}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$service$2d$icon$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ServiceIcon"], {
                                                name: s.icon,
                                                className: "w-6 h-6 text-primary/70"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-sm text-foreground group-hover:text-primary transition-colors",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-foreground/50 mt-0.5",
                                                    children: s.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "w-4 h-4 text-foreground/30 group-hover:text-primary ml-auto transition-colors"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/[slug]/page.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/[slug]/page.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FinalCTA, {}, void 0, false, {
                fileName: "[project]/src/app/services/[slug]/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/[slug]/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/services/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__04ccf9e2._.js.map
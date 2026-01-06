import { FaCode, FaPaintBrush, FaRocket, FaPlug, FaTools } from 'react-icons/fa';

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom, scalable web applications built with modern technologies.',
    icon: FaCode,
    description: 'we build high-performance web applications using React, Node.js, and modern frameworks. From landing pages to complex SaaS platforms, I deliver clean, maintainable code that scales with your business.',
    whoItsFor: [
      'Startups needing an MVP',
      'Businesses upgrading legacy systems',
      'Founders with a product vision',
      'Companies needing custom solutions'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS' , 'Many More...'],
    deliverables: [
      'Fully responsive web application',
      'Clean, documented codebase',
      'Deployment on your preferred platform',
      'Basic SEO optimization',
      '30 days of fully support'
    ],
    pricingHint: 'Starting from ₹15k',
    timeline: '3-6 weeks',
    features: [
      'Modern UI/UX architecture',
      'RESTful API development',
      'Database design & integration',
      'Authentication & authorization',
      'Payment gateway integration',
      'Admin dashboard',
      'Responsive design',
      'Performance optimization'
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    shortDescription: 'Beautiful, conversion-focused interfaces that users love.',
    icon: FaPaintBrush,
    description: 'I design intuitive, beautiful user interfaces that not only look great but convert visitors into customers. Every design decision is backed by UX principles and user psychology.',
    whoItsFor: [
      'Startups launching new products',
      'Businesses rebranding',
      'Apps needing better user experience',
      'Companies wanting higher conversions'
    ],
    techStack: ['Figma', 'Canva', 'Tailwind CSS', 'Framer Motion', 'React'],
    deliverables: [
      'Complete UI design in Figma',
      'Interactive prototypes',
      'Design system & style guide',
      'Responsive layouts (mobile, tablet, desktop)',
      'Developer handoff documentation'
    ],
    pricingHint: 'Starting from  9K',
    timeline: '2-4 weeks',
    features: [
      'User research & personas',
      'Wireframing & prototyping',
      'Visual design',
      'Design system creation',
      'Micro-interactions',
      'Accessibility compliance',
      'Usability testing',
      'Conversion optimization'
    ]
  },
  {
    id: 'saas-mvp',
    title: 'SaaS MVP Development',
    shortDescription: 'Launch your SaaS idea fast with a production-ready MVP.',
    icon: FaRocket,
    description: 'We help founders validate their SaaS ideas by building production-ready MVPs in weeks, not months. Focus on core features, launch fast, and iterate based on real user feedback.',
    whoItsFor: [
      'First-time founders',
      'Entrepreneurs validating ideas',
      'Startups seeking funding',
      'Product managers testing concepts'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS/Vercel','PostgreSql','Tailwind CSS','Redis' ,'WebServer' ,'Many More...'],
    deliverables: [
      'Core feature implementation',
      'User authentication system',
      'Payment integration (Stripe , Razorpay , Paytm)',
      'Admin dashboard',
      'Deployment & hosting setup',
      '60 days of support & iterations'
    ],
    pricingHint: 'Starting from  ₹29K',
    timeline: '6-10 weeks',
    features: [
      'User authentication & authorization',
      'Subscription management',
      'Payment processing',
      'Email notifications',
      'Analytics integration',
      'Admin panel',
      'API development',
      'Database architecture'
    ]
  },
  {
    id: 'api-integration',
    title: 'API Integration',
    shortDescription: 'Connect your systems seamlessly with third-party services.',
    icon: FaPlug,
    description: 'We integrate third-party APIs and build custom APIs to connect your systems. From payment gateways to CRM integrations, we ensure smooth data flow across your tech stack.',
    whoItsFor: [
      'Businesses automating workflows',
      'Apps needing payment processing',
      'Companies using multiple tools',
      'Platforms requiring data sync'
    ],
    techStack: ['Payment Integration','ChatBot', 'GraphQL', 'Webhooks', 'OAuth','Analytics','Many More...'],
    deliverables: [
      'API integration implementation',
      'Error handling & logging',
      'Documentation',
      'Testing & validation',
      'Monitoring setup'
    ],
    pricingHint: 'Starting ₹15k/integration',
    timeline: '1-3 weeks',
    features: [
      'Payment gateway integration (Stripe, PayPal)',
      'CRM integration (Salesforce, HubSpot)',
      'Email service integration',
      'Social media APIs',
      'Custom API development',
      'Webhook implementation',
      'Data synchronization',
      'API documentation'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Support',
    shortDescription: 'Keep your website running smoothly with ongoing support.',
    icon: FaTools,
    description: 'We provide ongoing maintenance, updates, and support to keep your web application secure, fast, and bug-free. Focus on your business while we handle the technical details.',
    whoItsFor: [
      'Businesses with existing websites',
      'Companies needing regular updates',
      'Apps requiring monitoring',
      'Teams without in-house developers'
    ],
    techStack: ["Managing your entire Web Application and System and Improve the performance of your application"],
    deliverables: [
      'Monthly security updates',
      'Bug fixes & improvements',
      'Performance monitoring',
      'Backup management',
      'Priority support',
      'Monthly reports'
    ],
    pricingHint: 'Contact for Detailed',
    timeline: 'Ongoing',
    features: [
      'Security patches & updates',
      'Bug fixes',
      'Performance optimization',
      'Database maintenance',
      'Backup & recovery',
      'Uptime monitoring',
      'Content updates',
      'Technical support'
    ]
  }
];

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

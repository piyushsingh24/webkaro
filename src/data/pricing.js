export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹14999',
    priceSubtext: 'One-time payment',
    description: 'Perfect for small businesses and startups launching their first website.',
    idealFor: 'Small businesses, personal brands, simple landing pages',
    timeline: '2-3 weeks',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      'Social media integration',
      'Google Analytics setup',
      'Mobile-friendly design',
      '30 days of support',
      'Deployment included'
    ],
    notIncluded: [
      'Custom animations',
      'Backend development',
      'E-commerce features',
      'CMS integration'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹34450',
    priceSubtext: 'One-time payment',
    description: 'For growing businesses that need more features and functionality.',
    idealFor: 'Growing businesses, service providers, content-heavy sites',
    timeline: '4-6 weeks',
    features: [
      'Up to 15 pages',
      'Custom design & animations',
      'Advanced SEO optimization',
      'CMS integration (Contentful/Strapi)',
      'Blog functionality',
      'Newsletter integration',
      'Performance optimization',
      'Analytics & tracking',
      '60 days of support',
      'Deployment & hosting setup',
      'Training session included'
    ],
    notIncluded: [
      'E-commerce features',
      'User authentication',
      'Payment processing'
    ],
    popular: true,
    cta: 'Most Popular'
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '₹50000',
    priceSubtext: 'Custom quote',
    description: 'Full-featured web applications with custom functionality and integrations.',
    idealFor: 'SaaS products, e-commerce, complex web applications',
    timeline: '8-12 weeks',
    features: [
      'Unlimited pages',
      'Custom web application',
      'Full-stack development',
      'User authentication & authorization',
      'Payment gateway integration',
      'Database design & setup',
      'API development',
      'Admin dashboard',
      'Third-party integrations',
      'Advanced animations',
      'Performance optimization',
      'Security best practices',
      '90 days of support',
      'Deployment & DevOps',
      'Documentation & training',
      'Priority support'
    ],
    notIncluded: [],
    popular: false,
    cta: 'Contact for Quote'
  }
];

export const addOns = [
  {
    name: 'Additional Page',
    price: '₹2000+',
    description: 'Add extra pages to any plan'
  },
  {
    name: 'E-commerce Setup',
    price: '₹5999+',
    description: 'Add shopping cart and payment processing'
  },
  {
    name: 'CMS Integration ( Admin Panel)',
    price: '₹10000+',
    description: 'Content management system setup'
  },
  {
    name: 'API Integration',
    price: '₹3999+',
    description: 'Per integration (Stripe, Mailchimp, etc.)'
  },
  {
    name: 'Monthly Maintenance',
    price: '₹2500/mo',
    description: 'Ongoing updates, backups, and support'
  },
  {
    name: 'SEO Package',
    price: '₹15,000+',
    description: 'Advanced SEO optimization and setup'
  }
];

export const getPlanById = (id) => {
  return pricingPlans.find(plan => plan.id === id);
};

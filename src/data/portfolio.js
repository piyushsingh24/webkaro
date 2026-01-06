export const portfolio = [
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Development',
    client: 'Fashion Startup',
    year: '2024',
    featured: true,
    thumbnail: '/portfolio/ecommerce-thumb.jpg',
    images: [
      '/portfolio/ecommerce-1.jpg',
      '/portfolio/ecommerce-2.jpg',
      '/portfolio/ecommerce-3.jpg'
    ],
    shortDescription: 'High-performance e-commerce platform with seamless checkout.',
    problem:
      'The client faced scalability issues during flash sales and poor mobile conversion rates.',
    solution:
      'Developed a Next.js-based e-commerce platform with SSR, Redis caching, Stripe payments, and optimized APIs.',
    results: [
      '300% increase in mobile conversions',
      '2.5s average page load time',
      '99.9% uptime during flash sales',
      '45% reduction in cart abandonment'
    ],
    techStack: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
    metrics: {
      pageSpeed: '95/100',
      uptime: '99.9%',
      conversionIncrease: '+300%',
      loadTime: '2.5s'
    },
    testimonial: {
      text: 'The platform exceeded our expectations. Sales tripled in the first month!',
      author: 'Sarah Chen',
      role: 'Founder'
    },
    link: '#'
  },

  {
    id: 'sports-infra-website',
    title: 'Sports Infrastructure Website',
    category: 'Web Development',
    client: 'Infrastructure Development Company',
    year: '2024',
    featured: true,
    thumbnail: '/portfolio/sports-thumb.jpg',
    images: [
      '/portfolio/sports-1.jpg',
      '/portfolio/sports-2.jpg'
    ],
    shortDescription: 'World-class sports infrastructure showcase website.',
    problem:
      'The company lacked a modern digital presence to showcase large-scale infrastructure projects.',
    solution:
      'Designed a responsive, SEO-optimized website highlighting projects, capabilities, and global standards.',
    results: [
      'Improved brand credibility',
      'Higher investor engagement',
      'Faster page loads',
      'Professional global presence'
    ],
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Vercel' , "Hostinger" , "google Analytics"],
    metrics: {
      launchTime: '6 weeks',
      performance: '90+ Lighthouse score'
    },
    testimonial: {
      text: 'A clean and professional website that truly represents our vision.',
      author: 'Client Representative',
      role: 'Director'
    },
    link: '#'
  },

  {
    id: 'hotel-booking-system',
    title: 'Hotel Booking System',
    category: 'Web Development',
    client: 'Tour & Travel Agency',
    year: '2025',
    featured: true,
    thumbnail: '/portfolio/hotel-thumb.jpg',
    images: [
      '/portfolio/booking-1.jpg',
      '/portfolio/booking-2.jpg'
    ],
    shortDescription: 'End-to-end hotel booking and management system.',
    problem:
      'Manual booking caused revenue loss and frequent scheduling errors.',
    solution:
      'Built a booking platform with availability management, payments, and automated notifications.',
    results: [
      '80% online bookings',
      '60% fewer booking conflicts',
      '37% revenue increase'
    ],
    techStack: ['React', 'Node.js', 'Twilio' , 'Django', 'PostgreSQL', 'vercel' , 'Render'],
    metrics: {
      onlineBookings: '80%',
      revenueGrowth: '37%'
    },
    testimonial: {
      text: 'Our booking process is now smooth and automated.',
      author: 'Sparsh',
      role: 'Business Owner'
    },
    link: '#'
  },

  /* ====== PROJECTS FROM YOUR RESUME ====== */

  {
    id: 'camcon-mentorship-platform',
    title: 'CAMCON – College Mentorship Platform',
    category: 'Full Stack Development',
    client: 'EdTech Platform',
    year: '2025',
    featured: true,
    thumbnail: '/portfolio/camcon-thumb.jpg',
    images: [
      '/portfolio/camcon-1.jpg',
      '/portfolio/camcon-2.jpg'
    ],
    shortDescription:
      'Mentorship platform connecting college seniors with juniors.',
    problem:
      'Students lacked access to verified mentors for career and academic guidance.',
    solution:
      'Built a MERN-based platform with role-based dashboards, real-time chat, video calls, and secure payments.',
    results: [
      'Real-time mentoring sessions',
      'Secure payment workflow',
      'Scalable role-based access'
    ],
    techStack: [
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.io',
      'WebRTC',
      'Stripe',
      'vercel',
      'Render',
      'Many More..'
    ],
    metrics: {
      users: 'Growing',
      realtime: 'Chat & Video Enabled'
    },
    testimonial: {
      text: 'CAMCON bridges the gap between juniors and seniors effectively.',
      author: 'Internal Feedback',
      role: 'Beta User'
    },
    link: '#'
  },

  {
    id: 'medisync-healthcare-app',
    title: 'MediSync – Healthcare Solution',
    category: 'Full Stack Development',
    client: 'Healthcare Sector',
    year: '2025',
    featured: true,
    thumbnail: '/portfolio/medisync-thumb.jpg',
    images: [
      './portfolio/medisync-1.jpg',
      '/portfolio/medisync-2.jpg'
    ],
    shortDescription:
      'Healthcare platform to reduce medicine wastage.',
    problem:
      'Near-expiry medicines were wasted while patients struggled with high costs.',
    solution:
      'Created a platform where medical stores list discounted near-expiry medicines.',
    results: [
      'Reduced medicine wastage',
      'Affordable healthcare access',
      'Better inventory utilization'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Paytm', 'AWS', 'Many More..'],
    metrics: {
      impact: 'Healthcare cost reduction'
    },
    testimonial: {
      text: 'A smart solution to a real healthcare problem.',
      author: 'Project Review',
      role: 'Evaluator'
    },
    link: '#'
  }
];

export const getFeaturedProjects = () =>
  portfolio.filter(project => project.featured);

export const getProjectById = id =>
  portfolio.find(project => project.id === id);

export const getProjectsByCategory = category =>
  portfolio.filter(project => project.category === category);

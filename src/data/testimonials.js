export const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Founder',
    company: 'Fashion Startup',
    avatar: '/avatars/avatar-1.jpg',
    rating: 5,
    text: 'Working with this developer was a game-changer for our business. The e-commerce platform they built is fast, beautiful, and our sales have tripled. Highly recommend!',
    project: 'E-Commerce Platform'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'CEO',
    company: 'Analytics Startup',
    avatar: '/avatars/avatar-2.jpg',
    rating: 5,
    text: 'We went from idea to funded startup in just 2 months. The MVP was exactly what we needed to validate our concept and secure seed funding. Incredible execution and communication throughout.',
    project: 'Analytics SaaS Platform'
  },
  {
    id: 3,
    name: 'Dr. Emily Watson',
    role: 'Medical Director',
    company: 'Healthcare Clinic',
    avatar: '/avatars/avatar-3.jpg',
    rating: 5,
    text: 'The booking system has transformed our practice. No-shows are down 60% and patients love the convenience. The developer understood our needs perfectly and delivered beyond expectations.',
    project: 'Appointment Booking System'
  },
  {
    id: 4,
    name: 'Alex Turner',
    role: 'Professional Photographer',
    company: 'Turner Photography',
    avatar: '/avatars/avatar-4.jpg',
    rating: 5,
    text: 'My portfolio has never looked better. The website is stunning, fast, and easy to update. Inquiries have increased by 500% since launch. Best investment I\'ve made in my business.',
    project: 'Creative Portfolio Website'
  },
  {
    id: 5,
    name: 'James Park',
    role: 'Product Manager',
    company: 'Tech Company',
    avatar: '/avatars/avatar-5.jpg',
    rating: 5,
    text: 'Professional, responsive, and delivered on time. The API integrations work flawlessly and the documentation is excellent. Will definitely work together again on future projects.',
    project: 'API Integration'
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Marketing Director',
    company: 'Digital Agency',
    avatar: '/avatars/avatar-6.jpg',
    rating: 5,
    text: 'The UI/UX redesign increased our conversion rate by 85%. The developer has a great eye for design and understands user psychology. Our clients are impressed with the new look.',
    project: 'Website Redesign'
  },
  {
    id: 7,
    name: 'David Kim',
    role: 'Founder',
    company: 'SaaS Startup',
    avatar: '/avatars/avatar-7.jpg',
    rating: 5,
    text: 'Clear communication, clean code, and delivered ahead of schedule. The ongoing maintenance service keeps our platform running smoothly. It\'s like having an in-house developer.',
    project: 'Maintenance & Support'
  },
  {
    id: 8,
    name: 'Rachel Green',
    role: 'Business Owner',
    company: 'Local Business',
    avatar: '/avatars/avatar-8.jpg',
    rating: 5,
    text: 'As a non-technical founder, I appreciated the patience and clear explanations. The website is exactly what I envisioned and has helped us reach more customers online.',
    project: 'Business Website'
  }
];

export const getFeaturedTestimonials = (count = 6) => {
  return testimonials.slice(0, count);
};

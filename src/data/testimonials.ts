export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  verified: boolean;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Amit Sharma",
    role: "Founder",
    company: "Forever Store",
    quote: "Webkaro transformed our slow WordPress site into a blazing fast Next.js machine. Sales went up 300% in a month.",
    verified: true,
    initials: "AS"
  },
  {
    id: "2",
    name: "Ritu Pathak",
    role: "Director",
    company: "Eco-School",
    quote: "The level of engineering detail they provided for our EdTech portal was unmatched. Truly an extension of our team.",
    verified: true,
    initials: "RP"
  },
  {
    id: "3",
    name: "Vikram Mehta",
    role: "CEO",
    company: "Adventure Travels",
    quote: "Moving to a Next.js stack reduced our bounce rate by 45%. The performance optimization is world-class.",
    verified: true,
    initials: "VM"
  },
  {
    id: "4",
    name: "Sanya Gupta",
    role: "Product Head",
    company: "SaaS Analytics",
    quote: "Fast, reliable, and technically superior. Webkaro is the only agency in Delhi we trust with our core infrastructure.",
    verified: true,
    initials: "SG"
  },
  {
    id: "5",
    name: "Rajesh Khanna",
    role: "Director",
    company: "Grand View Hotels",
    quote: "Their MERN stack expertise helped us automate 80% of our manual check-in processes. Exceptional ROI.",
    verified: true,
    initials: "RK"
  },
  {
    id: "6",
    name: "Karan Johar",
    role: "Startup Founder",
    company: "QuickShip",
    quote: "They built our entire MVP in just 4 weeks without compromising on security or scale. Highly recommend.",
    verified: true,
    initials: "KJ"
  }
];

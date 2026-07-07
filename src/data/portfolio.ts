export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  metrics: {
    label: string;
    value: string;
  };
  link: string;
  image: string; // Placeholder or real path
}

export const portfolio: Project[] = [
  {
    id: "forever-store",
    title: "Forever Store",
    category: "E-Commerce",
    description: "High-performance D2C fashion store with sub-second checkout.",
    tech: ["Next.js", "Tailwind", "Stripe", "MongoDB"],
    metrics: { label: "Conversion Lift", value: "300%" },
    link: "https://forever-frontend-orcin.vercel.app/",
    image: "/projects/forever.png"
  },
  {
    id: "eco-school",
    title: "Eco-School Portal",
    category: "EdTech",
    description: "Centralized management system for students and faculty.",
    tech: ["React", "Express", "Node", "PostgreSQL"],
    metrics: { label: "No-Show Reduction", value: "60%" },
    link: "https://college-portfolio.webkaro.com",
    image: "/projects/eco-school.png"
  },
  {
    id: "adventure-travels",
    title: "Adventure Travels",
    category: "Booking",
    description: "Real-time travel booking engine with global GDS integration.",
    tech: ["Next.js", "AWS", "Socket.io"],
    metrics: { label: "Booking Speed", value: "0.4s" },
    link: "#",
    image: "/projects/travels.png"
  },
  {
    id: "grand-view-hotels",
    title: "Grand View Hotels",
    category: "SaaS",
    description: "Luxury property management system with automated workflows.",
    tech: ["MERN", "Redis", "Docker"],
    metrics: { label: "Ops Efficiency", value: "45%" },
    link: "#",
    image: "/projects/hotels.png"
  }
];

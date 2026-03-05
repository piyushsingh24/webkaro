import Link from "next/link";
import { Mail, Phone, Globe, MapPin, Twitter, Instagram, Linkedin, Github, Facebook, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Web Development", href: "/services" },
      { name: "Portal Solutions", href: "/services" },
      { name: "Cloud & DevOps", href: "/services" },
      { name: "Next.js Experts", href: "/services/nextjs-development" },
      { name: "MERN Stack", href: "/services/mern-development" },
    ],
    Projects: [
      { name: "Case Studies", href: "/projects" },
      { name: "Products", href: "/products" },
      { name: "Community", href: "/community" },
      { name: "Tech Stack", href: "/expertise" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/about#team" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blogs" },
      { name: "Contact", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Compliance", href: "/compliance" },
      { name: "Cookie Policy", href: "/privacy-policy#cookies" },
    ]
  };

  return (
    <footer className="relative bg-background pt-20 md:pt-24 pb-12 px-6 md:px-16 border-t border-border dark:border-white/5 overflow-hidden transition-colors duration-500">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 pointer-events-none opacity-50 dark:opacity-100" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-8 group">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="Webkaro Logo"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-foreground/70 dark:text-white/50 text-base md:text-lg leading-relaxed max-w-sm mb-10 font-outfit">
              A community-driven development collective engineering high-performance digital experiences for the modern web.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: "https://instagram.com/webkaro_" },
                { Icon: Facebook, href: "https://facebook.com/webkaro" },
                { Icon: MessageCircle, href: "https://wa.me/919310390980" },
                { Icon: MapPin, href: "https://www.google.com/maps/place/webkaro/@28.7235455,77.2484255,17z/data=!3m1!4b1!4m6!3m5!1s0x202f80d27a767a79:0xbc07ea82df5e5152!8m2!3d28.7235455!4d77.2484255!16s%2Fg%2F11yvy4dvh0?entry=ttu&g_ep=EgoyMDI2MDMwMi4wIKXMDSoASAFQAw%3D%3D" }
              ].map(({ Icon, href }, i) => (
                <Link key={i} href={href} target="_blank" className="w-10 h-10 rounded-xl bg-primary/5 dark:bg-white/5 border border-border dark:border-white/10 flex items-center justify-center text-foreground/40 dark:text-white/40 hover:text-white hover:bg-primary transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-6">
              <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-primary/80 dark:text-primary">{title}</h4>
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground/60 dark:text-white/50 hover:text-primary transition-colors text-sm font-bold uppercase tracking-wider">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Compliance Bar */}
        <div className="pt-12 border-t border-border dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 dark:text-white/20">
            © {currentYear} WebKaro Engineering Collective. All Rights Reserved.
          </div>
          <div className="flex gap-8">
            <Link href="/privacy-policy" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 dark:text-white/20 hover:text-primary transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 dark:text-white/20 hover:text-primary transition-colors">Terms</Link>
            <Link href="/compliance" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground/50 dark:text-white/20 hover:text-primary transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

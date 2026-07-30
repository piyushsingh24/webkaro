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
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#F6F3EE' }}>
      <div className="content-container pt-20 md:pt-28 pb-12">
        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-24">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: '#1B1B1B' }}>
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm transition-colors duration-300 hover:text-[#6E8E59]"
                      style={{ color: '#888888' }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Address & Social */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pt-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-32 h-10 flex items-center justify-center">
                <Image src="/logo.png" alt="Webkaro" fill className="object-contain" />
              </div>
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {[
              { Icon: Instagram, href: "https://instagram.com/webkaro_" },
              { Icon: Facebook, href: "https://facebook.com/webkaro" },
              { Icon: MessageCircle, href: "https://wa.me/917048903201" },
              { Icon: Linkedin, href: "https://linkedin.com/company/webkaro" },
              { Icon: Github, href: "https://github.com/webkaro" },
            ].map(({ Icon, href }, i) => (
              <Link
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:border-[#6E8E59] hover:text-[#6E8E59]"
                style={{ borderColor: 'rgba(0,0,0,0.08)', color: '#888888' }}
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 mt-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
          <p className="text-xs" style={{ color: '#888888' }}>
            &copy; {currentYear} WebKaro Engineering Collective. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="text-xs transition-colors duration-300 hover:text-[#6E8E59]" style={{ color: '#888888' }}>Privacy</Link>
            <Link href="/terms" className="text-xs transition-colors duration-300 hover:text-[#6E8E59]" style={{ color: '#888888' }}>Terms</Link>
            <Link href="/compliance" className="text-xs transition-colors duration-300 hover:text-[#6E8E59]" style={{ color: '#888888' }}>Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Link } from 'react-router-dom';
import { FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Pricing', path: '/pricing' },
    ],
    services: [
      { name: 'Web Development', path: '/services/web-development' },
      { name: 'UI/UX Design', path: '/services/ui-ux' },
      { name: 'SaaS MVP', path: '/services/saas-mvp' },
      { name: 'Maintenance', path: '/services/maintenance' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms & Conditions', path: '/terms' },
    ],
  };

  const socialLinks = [
    {
      id: "whatsapp",
      icon: FaWhatsapp,
      label: "WhatsApp",
      href: "https://wa.me/+918851151976",
    },
    {
      id: "instagram",
      icon: FaInstagram,
      label: "Instagram",
      href: "https://instagram.com/webkaro_/",
    },
    {
      id: "email",
      icon: FaEnvelope,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@webkaro.in",
    },
  ];

  return (
    <footer className="bg-navy text-white border-t border-border-color">
      <div className="container-custom px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="text-center sm:text-left">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Webkaro Logo" className="h-12 w-auto" />
              <span className="text-xl font-bold ">Web
                <span className="text-xl font-bold text-blue-600">karo</span>
              </span>
            </Link>
            <p className="text-secondary-300 mb-6 text-sm leading-relaxed">
              Building high-performance web experiences that convert. Your trusted partner for custom web development.
            </p>

            <div className="flex justify-center sm:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-secondary-300 hover:text-primary-500 transition-colors text-xl"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-300 hover:text-primary-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-secondary-300 text-sm">

              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary-500" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=info@webkaro.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-500 transition-colors"
                >
                  info@webkaro.in
                </a>
              </li>

              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaWhatsapp className="text-primary-500" />
                  <a
                    href="https://wa.me/918851151976"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition-colors"
                  >
                    +91 88511 51976
                  </a>
                </div>

                <div className="flex items-center gap-2 pl-6">
                  <a
                    href="https://wa.me/917048903201"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition-colors"
                  >
                    +91 70489 03201
                  </a>
                </div>
              </li>

              <li className="pt-2 text-xs text-secondary-400">
                3rd pusta Sonia Vihar Delhi 110094  • India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-secondary-400 text-xs">
              © {currentYear} Webkaro. All rights reserved.
            </p>

            <div className="flex gap-4">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-secondary-400 hover:text-primary-500 transition-colors text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

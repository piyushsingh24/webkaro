import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaCommentAlt, FaPlus, FaTimes } from "react-icons/fa";

const FloatingButtons = ({ onChatToggle }) => {
  const [isContactOpen, setIsContactOpen] = useState(true);

  const socialLinks = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/8851151976",
      color: "bg-green-500",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com/webkaro_/",
      color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
    },
    {
      id: "email",
      icon: <FaEnvelope />,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@webkaro.in",
      color: "bg-blue-500",
    }

  ];

  return (
    <div className="fixed bottom-2 left-3 z-[101] flex flex-col gap-4 justify-center align-center">
      {/* Contact Button & Social Links */}
      <div className="relative">
        <AnimatePresence>
          {isContactOpen && (
            <div className="absolute bottom-16 left-0 flex flex-col gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, x: -20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${link.color} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center text-xl`}
                  title={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsContactOpen(!isContactOpen)}
          className={`p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center text-2xl ${isContactOpen
            ? "bg-red-500 text-white rotate-45"
            : "bg-primary-600 dark:bg-cyan text-white dark:text-navy"
            }`}
          aria-label="Contact Menu"
        >
          {isContactOpen ? <FaTimes /> : <FaPlus />}
        </button>
      </div>

      {/* Chat Button (Gemini AI) */}
      <button
        onClick={onChatToggle}
        className="bg-white dark:bg-navy p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center text-2xl text-primary-600 dark:text-cyan border border-border-color"
        aria-label="Chat with AI"
      >
        <FaCommentAlt />
      </button>
    </div>
  );
};

export default FloatingButtons;

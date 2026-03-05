"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPlus, FaTimes, FaRobot } from "react-icons/fa";

interface FloatingButtonsProps {
  onChatToggle: () => void;
}

const FloatingButtons = ({ onChatToggle }: FloatingButtonsProps) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const socialLinks = [
    {
      id: "whatsapp",
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      href: "https://wa.me/+919310390980",
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
    <div className="fixed bottom-6 left-6 z-[101] flex flex-col gap-4">
      {/* Social Menu */}
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
                  className={`${link.color} text-white w-12 h-12 rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-xl backdrop-blur-sm border border-white/20`}
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
          className={`w-14 h-14 rounded-2xl shadow-2xl transition-all duration-500 flex items-center justify-center text-2xl border ${isContactOpen
            ? "bg-red-500 border-red-400 text-white rotate-45"
            : "bg-white dark:bg-zinc-900 border-border dark:border-white/10 text-primary"
            }`}
          aria-label="Contact Menu"
        >
          {isContactOpen ? <FaTimes /> : <FaPlus />}
        </button>
      </div>

      {/* Chat Button (Gemini AI) */}
      <button
        onClick={onChatToggle}
        className="bg-primary w-14 h-14 rounded-2xl shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center text-2xl text-white shadow-primary/20 border border-primary/20"
        aria-label="Chat with AI Assistant"
      >
        <FaRobot />
      </button>
    </div>
  );
};

export default FloatingButtons;

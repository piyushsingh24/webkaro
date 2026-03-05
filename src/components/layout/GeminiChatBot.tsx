"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane, FaExclamationCircle } from "react-icons/fa";

interface Message {
  role: "bot" | "user";
  content: string;
}

const GeminiChatBot = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hi 👋 Welcome to **Webkaro**. I'm your AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ================= SEND HANDLER ================= */
  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user" as const, content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role === "bot" ? "model" : "user",
            content: m.content
          }))
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Failed to get response");
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", content: data.text }
      ]);
    } catch (err: any) {
      console.error("Chat Error:", err);
      setError(err.message || "I'm having trouble connecting right now. Please try again or contact us via WhatsApp!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="
          fixed bottom-24 left-6 z-[200]
          w-[350px] md:w-[380px]
          max-h-[75vh]
          bg-white dark:bg-zinc-900 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]
          flex flex-col overflow-hidden border border-border/50 dark:border-white/10
          backdrop-blur-xl
        "
        >
          {/* HEADER */}
          <div className="bg-primary p-5 flex justify-between items-center flex-shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-600 opacity-50" />
            <div className="flex gap-3 items-center text-white relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                <FaRobot className="text-xl" />
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">Webkaro AI</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] opacity-80 font-medium">Always Online</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-white/80 hover:text-white hover:rotate-90 transition-all relative z-10 p-2"
            >
              <FaTimes size={18} />
            </button>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-5 bg-zinc-50/50 dark:bg-zinc-900/50 scrollbar-hide space-y-4">
            {messages.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: m.role === "user" ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-line shadow-sm ${m.role === "user"
                    ? "bg-primary text-white rounded-tr-none"
                    : "bg-white dark:bg-zinc-800 border border-border dark:border-white/5 text-foreground dark:text-zinc-200 rounded-tl-none font-medium"
                    }`}
                >
                  {m.content}
                </div>
              </motion.div>
            ))}

            {loading && (
              <div className="flex gap-2 items-center text-[10px] text-muted-foreground font-medium animate-pulse ml-1">
                <div className="w-1 h-1 bg-primary rounded-full" />
                Webkaro AI is typing...
              </div>
            )}

            {error && (
              <div className="flex gap-2 items-center p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-[11px] font-medium">
                <FaExclamationCircle />
                {error}
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* INPUT */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 border-t border-border/50 dark:border-white/5 bg-white dark:bg-zinc-900 flex gap-2 flex-shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-2xl px-5 py-3 bg-zinc-100 dark:bg-white/5 text-foreground dark:text-white outline-none border border-transparent focus:border-primary/30 transition-all text-sm font-medium"
              placeholder="Ask about Webkaro..."
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white p-3.5 rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaPaperPlane size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GeminiChatBot;

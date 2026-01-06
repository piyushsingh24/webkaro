import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

const GeminiChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 Welcome to Webkaro. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ================= BOT LOGIC ================= */
  const getBotReply = (userText) => {
    const text = userText.toLowerCase();
    const responses = [];

    if (text.match(/price|cost|budget|charges|pricing/)) {
      responses.push(
        `💰 Pricing:
• Starter – ₹14,999
• Growth – ₹34,450
• Premium – ₹50,000`
      );
    }

    if (text.match(/service|services|work|offer|provide/)) {
      responses.push(
        `🛠 Services:
• Web Development
• UI/UX Design
• SaaS MVPs
• API Integration
• Maintenance`
      );
    }

    if (text.match(/website|web site|app|ecommerce|shop|store/)) {
      responses.push(
        `🌐 We build fast, modern websites, web apps & ecommerce platforms.`
      );
    }

    if (text.match(/ui|ux|design|redesign|figma/)) {
      responses.push(
        `🎨 UI/UX:
Clean, premium and conversion-focused designs.`
      );
    }

    if (text.match(/startup|mvp|saas/)) {
      responses.push(
        `🚀 Startup & MVP:
We help founders launch scalable MVPs quickly.`
      );
    }

    if (text.match(/time|duration|delivery|how long/)) {
      responses.push(
        `⏱ Timeline:
• Websites: 7–10 days
• Business sites: 2–3 weeks
• SaaS/MVP: 4–6 weeks`
      );
    }

    if (text.match(/urgent|fast|asap|quick/)) {
      responses.push(
        `⚡ Fast delivery available depending on scope.`
      );
    }

    if (text.match(/contact|call|phone|whatsapp|email/)) {
      responses.push(
        `📞 Contact:
Email: info@webkaro.in
WhatsApp: +91 88511 51976`
      );
    }

    if (text.match(/location|office|where|based/)) {
      responses.push(
        `📍 Location:
Delhi, India (working remotely across India)`
      );
    }

    if (responses.length > 0) return responses.join("\n\n");

    return `Thanks for reaching out 👋  
Tell me:
• What you want to build  
• Budget range  
• Timeline`;
  };

  /* ================= SEND HANDLER ================= */
  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: getBotReply(input) }
      ]);
      setLoading(false);
    }, 600);
  };

  return (

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="
          fixed bottom-24 left-6 z-[200]
          w-[350px]
          max-h-[75vh]
          bg-white rounded-2xl shadow-xl
          flex flex-col overflow-hidden
        "
        >
          {/* HEADER */}
          <div className="bg-primary-600 p-4 flex justify-between items-center flex-shrink-0">
            <div className="flex gap-2 items-center text-black">
              <FaRobot />
              <div>
                <p className="font-bold text-sm">Webkaro Assistant</p>
                <p className="text-xs opacity-70">Online</p>
              </div>
            </div>

            {/* ❌ CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="hover:rotate-90 transition"
            >
              <FaTimes />
            </button>
          </div>

          {/* MESSAGES (ONLY THIS SCROLLS) */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 text-black">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex mb-3 ${m.role === "user" ? "justify-end" : "justify-start"
                  }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === "user"
                      ? "bg-primary-200"
                      : "bg-white border"
                    }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <p className="text-xs opacity-60">Typing...</p>
            )}

            <div ref={endRef} />
          </div>

          {/* INPUT (FIXED AT BOTTOM) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t flex gap-2 flex-shrink-0"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-full px-4 py-2 bg-gray-100 text-black outline-none"
              placeholder="Ask about Webkaro..."
            />
            <button className="bg-primary-600 p-3 rounded-full">
              <FaPaperPlane size={14} />
            </button>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GeminiChatBot;

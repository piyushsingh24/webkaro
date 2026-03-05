"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Optimized: Load heavy chatbot only when needed
const GeminiChatBot = dynamic(() => import("./GeminiChatBot"), {
  ssr: false,
});

const FloatingButtons = dynamic(() => import("./FloatingButtons"), {
  ssr: false,
});

export default function ChatBotToggle() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <FloatingButtons onChatToggle={() => setIsChatOpen(!isChatOpen)} />
      <GeminiChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}

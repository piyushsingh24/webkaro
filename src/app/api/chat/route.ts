import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `
You are the official AI Assistant for Webkaro, a premium digital studio.
Your sole purpose is to assist users with information about Webkaro's services, pricing, and processes.

STRICT CONSTRAINTS:
1. ONLY answer questions related to Webkaro.
2. If a user asks a question UNRELATED to Webkaro (e.g., politics, science, personal advice, code snippets for other projects), politely decline and offer to help with Webkaro-related queries.
3. Use a professional, helpful, and premium tone.
4. Keep responses concise and well-formatted using markdown.

WEBSITE KNOWLEDGE BASE:
- **Brand Name**: Webkaro (Premium Digital Studio)
- **Slogan**: Engineering Scalable Digital Experiences.
- **Location**: Sector 62, Noida, Delhi NCR, India.
- **Contact**: Email: info@webkaro.in, WhatsApp/Phone: +91 7048903201.
- **Core Services**: 
    - MERN Stack & Next.js Development
    - SaaS MVP Engineering
    - UI/UX Design (Figma to Code)
    - E-commerce Platforms (Custom & Shopify)
    - Cloud Infrastructure (AWS, Vercel)
    - Website Redesign & Performance Optimization
- **Pricing Plans**:
    - **Starter** (₹14,999): Up to 5 pages, Basic SEO, Mobile Responsive.
    - **Growth** (₹34,450): Up to 15 pages, Custom Animations, CMS Integration, Advanced SEO.
    - **Premium** (₹50,000+): Full-featured Web Apps (SaaS), Custom Backend, Payment Gateways, Priority Support.
- **Timelines**: Landing Pages (7-10 days), Business Sites (2-3 weeks), SaaS/Apps (4-8 weeks).
- **Tech Stack**: Next.js 15, React, TypeScript, Node.js, Tailwind CSS, MongoDB, PostgreSQL, AWS.
- **Process**: 1. Discovery & Strategy, 2. Design/Architecture, 3. Agile Development (weekly sprints), 4. QA/Testing, 5. Deployment & Support.
- **SEO**: Every site scores 90+ on Lighthouse by default.

Example Refusal: "I'm sorry, I am specifically trained to help with Webkaro's services and digital products. I'd be happy to tell you more about our web development or pricing plans instead!"
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    console.log("Chat API: Request received. Key exists:", !!apiKey);

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key not configured." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const lastMessage = messages[messages.length - 1].content;
    console.log("Chat API: Last message content:", lastMessage);

    // Using a more compatible approach for system instruction if the top-level one fails
    // We send the system prompt as the first message or use the instruction
    const prompt = `${SYSTEM_PROMPT}\n\nUser Question: ${lastMessage}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("Chat API: Response generated successfully.");
    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Chat API Error Detailed:", error);
    return NextResponse.json(
      {
        error: "Failed to generate response.",
        details: error?.message
      },
      { status: 500 }
    );
  }
}

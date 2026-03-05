import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// IMPORTANT for Gemini on Vercel
export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const tone =
      typeof body?.tone === "string" && body.tone.trim()
        ? body.tone.trim()
        : "professional and enthusiastic";

    const details =
      typeof body?.details === "string" && body.details.trim()
        ? body.details.trim()
        : "general web development and digital marketing work";

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error:
            "Gemini API key not configured. Please add GEMINI_API_KEY to your .env file.",
        },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Use latest alias to prevent future deprecation issues
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const prompt = `
You are a professional copywriter.

Write a short, authentic testimonial for a digital studio named "Webkaro".

STRICT RULES:
- Tone: "${tone}"
- Include these project details: "${details}"
- Length: 25–50 words
- Sound human and natural
- No quotation marks
- No extra commentary
- No introduction or conclusion
- Output only the testimonial text
`;

    const result = await model.generateContent(prompt);

    // SAFE extraction (works across SDK versions)
    const text =
      result?.response?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

    if (!text) {
      throw new Error("Empty response from Gemini");
    }

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("Gemini Route Error:", error);

    return NextResponse.json(
      {
        error: "Gemini API Error",
        message: error?.message || "Something went wrong.",
        suggestion:
          "If you receive a 404 error, ensure the Generative Language API is enabled in Google Cloud Console and the model name is valid.",
      },
      { status: 500 }
    );
  }
}
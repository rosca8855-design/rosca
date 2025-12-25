
import { GoogleGenAI } from "@google/genai";

export async function askGemini(prompt: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a helpful assistant for a community savings app called 'Circles'. You explain how Rotating Savings and Credit Associations (ROSCAs) work and provide advice on community-based finance. Keep answers short and friendly.",
      },
    });
    return response.text || "I'm sorry, I couldn't process that request right now.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
}

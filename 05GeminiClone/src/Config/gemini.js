import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

async function run(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const text =
      result.response?.candidates?.[0]?.content?.[0]?.text ||
      result.response?.candidates?.[0]?.text ||
      "No output";
    console.log("gemini:", text);
    return text;
  } catch (err) {
    console.error("Gemini error:", err);
    return null;
  }
}

export default run;

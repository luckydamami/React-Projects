import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCGBiqcZYtoWhvdTo4T8GPsYVY_sW6iOV8");

async function run(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  console.log(response.text());
}

export default run;

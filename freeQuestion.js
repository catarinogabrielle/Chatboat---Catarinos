import { initializeModel } from './model.js';

const model = await initializeModel("gemini-1.5-flash");

export async function freeQuestion(prompt) {
  const parts = [
    { text: "Você é o chatbot de uma empresa na area médica" },
    { text: `input: ${prompt}` },
    { text: "output: " },
  ];

  const request = { contents: [{ role: "user", parts }] };
  const result = await model.generateContent(request);
  const response = await result.response;
  const text = response.text();
  return text;
}
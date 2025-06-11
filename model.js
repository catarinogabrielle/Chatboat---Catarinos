import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyB-6aiH7pqNGk7C9QsjkUc8rcg95wEs5dU';

let genAI;
if (API_KEY) {
  genAI = new GoogleGenerativeAI(API_KEY);
} else {
  console.error("A variável de ambiente GEMINI_API_KEY não foi definida.");
}

export async function initializeModel(modelName) {
  if (!genAI) {
    throw new Error("GoogleGenerativeAI não foi inicializado. Verifique a chave da API.");
  }
  return genAI.getGenerativeModel({ model: modelName });
}
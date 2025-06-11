import { GoogleGenerativeAI } from '@google/generative-ai';

export async function initializeModel(model) {
  const apiKey = "AIzaSyB-6aiH7pqNGk7C9QsjkUc8rcg95wEs5dU";
  const genAI = new GoogleGenerativeAI(apiKey);
  const modelAI = genAI.getGenerativeModel({ model: model });
  return modelAI;
}
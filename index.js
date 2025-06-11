import { freeQuestion } from './freeQuestion.js';

const menuMessage1 = `Em que posso ajudar hoje?`;
const menuMessage2 = `Por favor, selecione uma das opções abaixo:
1. Meus pedidos
2. Carteira
3. Atualizar perfil
4. Tempo de entrega
5. Reembolso
6. Ganhar pontos
7. Métodos de pagamento
8. Fazer uma pergunta`;

const predefinedAnswers = {
  '1': 'Opção selecionada: Meus pedidos...',
  '2': 'Opção selecionada: Carteira...',
  '3': 'Opção selecionada: Atualizar perfil...',
  '4': 'Opção selecionada: Tempo de entrega...',
  '5': 'Opção selecionada: Reembolso...',
  '6': 'Opção selecionada: Ganhar pontos...',
  '7': 'Opção selecionada: Métodos de pagamento...'
};

export async function handleChatMessage(message, conversationStarted) {
  if (!conversationStarted) {
    return [menuMessage1, menuMessage2];
  }

  const userMessage = message.trim();

  if (predefinedAnswers[userMessage]) {
    return [predefinedAnswers[userMessage]];
  }

  if (userMessage === '8') {
    return ['Certo! Pode fazer sua pergunta que eu tentarei responder.'];
  }

  try {
    const aiReply = await freeQuestion(userMessage);
    return [aiReply];
  } catch (error) {
    console.error("Erro ao chamar freeQuestion:", error);
    return ["Desculpe, não consegui processar sua pergunta no momento."];
  }
}
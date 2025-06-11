// server.js do projeto chatbot-catarinos

import express from 'express';
import cors from 'cors';
import { handleChatMessage } from './index.js';

const app = express();

// IMPORTANTE: É AQUI QUE FAREMOS A CORREÇÃO
const allowedOrigins = [
    'https://chatbot-mocha.vercel.app', // <-- ADICIONE A URL DO SEU FRONT-END AQUI!
    'http://127.0.0.1:5500',             // Para testes locais
    'http://localhost:5500'              // Para testes locais
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não permitido pela política de CORS'));
    }
  }
}));

// O resto do seu server.js continua igual...
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor do Chatbot está no ar!');
});

app.post('/chat', async (req, res) => {
    // ...seu código aqui...
});

export default app;
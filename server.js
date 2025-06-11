import express from 'express';
import cors from 'cors';
import { handleChatMessage } from './index.js';

const app = express();

const allowedOrigins = [
    'https://seu-frontend.vercel.app',
    'http://127.0.0.1:5500',
    'http://localhost:5500'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'A política de CORS para este site não permite acesso da Origem especificada.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor do Chatbot está no ar!');
});

app.post('/chat', async (req, res) => {
    try {
        const { message, conversation_started } = req.body;
        const botReplies = await handleChatMessage(message, conversation_started);
        res.json({ replies: botReplies });
    } catch (error) {
        console.error("Erro no endpoint /chat:", error);
        res.status(500).json({ error: error.message || "Ocorreu um erro no servidor." });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

export default app;
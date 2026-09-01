// server.js
// Ponto de entrada da aplicação: API Connect - Gerenciamento de Usuários

const express = require('express');
const userRoutes = require('./routes/userRoutes');

// Instancia a aplicação Express
const app = express();

// Define a porta em que o servidor vai escutar as requisições
const PORT = process.env.PORT || 3000;

// Middleware de parse: converte o corpo das requisições em formato JSON
// para um objeto JavaScript manipulável (req.body)
app.use(express.json());

// Rota simples de verificação, apenas para confirmar que o servidor está no ar
app.get('/', (req, res) => {
  res.status(200).json({ message: 'API Connect está no ar.' });
});

// Registra as rotas de usuários sob o prefixo /users
app.use('/users', userRoutes);

// Coloca o servidor em modo de escuta na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
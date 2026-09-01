const users = require('../data/users');

function listarUsuarios(req, res) {
  res.status(200).json(users);
}

function buscarUsuarioPorId(req, res) {
  const id = Number(req.params.id);
  const usuario = users.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' });
  }

  res.status(200).json(usuario);
}

function criarUsuario(req, res) {
  const { nome, email } = req.body || {};

  if (!nome || typeof nome !== 'string' || !nome.trim()) {
    return res.status(400).json({
      error: 'O campo "nome" é obrigatório e deve ser uma string não vazia.',
    });
  }

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({
      error: 'O campo "email" é obrigatório e deve ser um e-mail válido.',
    });
  }

  const novoUsuario = {
    id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
    nome: nome.trim(),
    email: email.trim(),
  };

  users.push(novoUsuario);
  res.status(201).json({ data: novoUsuario });
}

function atualizarUsuario(req, res) {
  const id = Number(req.params.id);
  const usuario = users.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' });
  }

  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: 'Os campos "nome" e "email" são obrigatórios.' });
  }

  usuario.nome = nome;
  usuario.email = email;

  res.status(200).json(usuario);
}

function removerUsuario(req, res) {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' });
  }

  users.splice(index, 1);
  res.status(204).send();
}

module.exports = {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  removerUsuario,
};
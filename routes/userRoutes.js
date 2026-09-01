const express = require('express');
const router = express.Router();

const {
  listarUsuarios,
  buscarUsuarioPorId,
  criarUsuario,
  atualizarUsuario,
  removerUsuario,
} = require('../controllers/userController');

router.get('/', listarUsuarios);
router.get('/:id', buscarUsuarioPorId);
router.post('/', criarUsuario);
router.put('/:id', atualizarUsuario);
router.delete('/:id', removerUsuario);

module.exports = router;
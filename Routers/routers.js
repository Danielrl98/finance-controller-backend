const express = require('express')
const router = express.Router()
const conta = require('../Controllers/criarConta')

router.post('/cadastrar/nova',conta.create)
router.post('/editar/edit',conta.edit)
router.get('/listar',conta.read)
router.delete('/deletar/:id',conta.deletar)

module.exports = router
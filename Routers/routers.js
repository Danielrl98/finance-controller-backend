const express = require('express')
const router = express.Router()
const conta = require('../Controllers/criarConta')

router.post('/cadastrar/nova',conta.create)
router.get('/listar',conta.read)

module.exports = router
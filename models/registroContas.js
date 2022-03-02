const mongoose = require('mongoose')


const registroContas = new mongoose.Schema({

    titulo: String,
    planodecontas: String,
    valor: Number,
    pago: Boolean

})



module.exports = mongoose.model('contas',registroContas)
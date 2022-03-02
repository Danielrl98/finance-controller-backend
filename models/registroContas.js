const mongoose = require('mongoose')


const registroContas = new mongoose.Schema({

    titulo: String,
    planodecontas: String,
    valor: Number,
    createdAt: {type: Date, default: Date.now}

})



module.exports = mongoose.model('contas',registroContas)
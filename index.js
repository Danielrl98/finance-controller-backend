//Pacotes
const express = require ('express')
const app = express()
const cors = require('cors')
const { process_params } = require('express/lib/router')

//pastas
require('./dbConfig/dbConfig')
const router = require('./Routers/routers')



app.use(cors())
app.use(express.json())
app.use('/',router)
//Inicia conexão
const Port = process.env.PORT || 5000 
app.listen(Port,()=>{
    console.log('Node conectado na porta '+ Port)
})
const mongoose = require('mongoose')
const contas = require('../models/registroContas')

module.exports = {
        //cadastrar____________________________
  async create(request,response){

       const {titulo,planodecontas,valor,pago} = request.body

       if(!titulo){
           return response.json('erro')
       }
    const registrar = await contas.create({
        titulo,planodecontas,valor,pago
            
    })  
    if(registrar){
        return response.json(registrar)
    }
    else{
        return response.json('Não foi possível registrar, tente novamente')
    }
    
    },

    //Listar____________________________
    async read(request,response){
            const {title} = request.params

            const listar = await contas.find()
            
            if(listar){
                return response.json(listar)
            }
            else{
                return response.json('Não foi possível listar, tente novamente')
            }
    }
}
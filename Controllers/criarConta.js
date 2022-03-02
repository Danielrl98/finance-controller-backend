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

            const listar = await contas.find()
            
            if(listar){
                return response.json(listar)
            }
            else{
                return response.json('Não foi possível listar, tente novamente')
            }
    },
    //editar
    async edit(request,response){

        const {titulo,planodecontas,valor,pago} = request.body

        const alterar = await contas.findOneAndUpdate({
            titulo: titulo,
            planodecontas: planodecontas,
            valor:valor,
            pago:pago
        })
        if(alterar){
           
            const listar = await contas.findOne()
            if(listar){
                return response.json(listar)
            }
            else{
                return response.json('Não foi possível listar, tente novamente')
            }
        }
        else{
            return response.json('erro')
        }
    },
    //Deletar
        async deletar(request,response){
              
            const {_id} = request.params
            const deletar = await contas.findOneAndDelete({
                id: _id
            })
            if(deletar){
                return response.json(deletar)
            }else{
                return response.json('erro ao deletar')
            }

        }
}
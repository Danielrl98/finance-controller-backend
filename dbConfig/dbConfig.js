const mongoose = require('mongoose')
const uri = "mongodb+srv://user:user123@cluster0.yejjh.mongodb.net/financedb?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=>{
    console.log('mongo conectado')
})
.catch((err)=>{
    console.log(err)
})
  


module.exports = mongoose

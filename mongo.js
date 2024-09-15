const mongoose = require("mongoose")

const url = process.env.MONGO_URL

mongoose.connect(url).then(()=> {
    console.log("Conectado a la base de datos")
}).catch(()=>{
    console.log("Error al conectar a la base de datos")
    mongoose.connection.close()
  
})



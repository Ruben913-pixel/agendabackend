const {model, Schema} = require("mongoose")

const schema= new Schema({
    name: String,
    number: String
})
schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Cliente = model("Cliente", schema);


module.exports = Cliente
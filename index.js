require("./mongo.js")
const express = require("express");
const app = express();
const cors= require("cors")
const Cliente = require("./agendaSchema");
const { default: mongoose } = require("mongoose");

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))


app.get("/api/persons", (request, response) => {
 Cliente.find({}).then((r)=> {
  response.json(r)
 }).catch(()=> {
  response.status(404).json({error: "error"})
  mongoose.connection.close()
 })
})

app.get("/api/persons/:id", (request, response) => {
  const id = request.params.id;
Cliente.findById(id).then((r)=> {
 response.status(200).json(r)
}).catch(()=> {
  response.status(404).json({error: "Not found"})
  mongoose.connection.close()
})
});


app.delete("/api/persons/:id", (request, response) => {
  const id = request.params.id;
  Cliente.findByIdAndDelete(id).then(()=> {
   response.status(204).end()
  }).catch(()=> {
    response.status(404).end()
  })
});

app.post("/api/persons", (resquest, response) => {
const body = resquest.body;
const newPerson = new Cliente({
  name: body.name,
  number: body.number
});
newPerson.save().then(()=> {
 response.status(201).end()
}).catch(()=> {
  response.status(400).end()
  mongoose.connection.close()
})
})

app.put("/api/persons/:id", (resquest, response)=> {
  const id = resquest.params.id;
  const {name, number} = resquest.body;
  const updatedPerson = {
    name:name,
    number:number
  }
  Cliente.findByIdAndUpdate(id, updatedPerson).then(()=> {
    response.status(200).end()
  }).catch(()=> {
    response.status(304).end()
  })
})



const PORT = process.env.PORT || 3005
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const app = express();
const cors= require("cors")

app.use(cors())
app.use(express.static('dist'))


app.get("/api/persons", (request, response) => {
  response.status(200).json(number)
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const newNumber = number.find((number) => number.id === id);
  if (!newNumber) {
    return response.status(404).end();
  }
  response.json(newNumber);
});


app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const deleterNumber = number.filter((number) => number.id !== id);
  number = deleterNumber;
  response.json(number);
});

app.post("/api/persons", (resquest, response) => {
  const body = resquest.body;
 console.log(body)
  const newPerson = {
    name: body.name,
    number: body.number,
    id: number.length + 1,
  };
  number = [...number, newPerson];
  response.json(number);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

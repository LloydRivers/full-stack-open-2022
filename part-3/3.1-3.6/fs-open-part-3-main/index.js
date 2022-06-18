const data = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

const express = require("express");
const app = express();
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/api/persons", (req, res, next) => {
  res.send(data);
});

app.get("/api/persons/:id", (req, res, next) => {
  const person = data.find((person) => person.id === Number(req.params.id));
  if (person) {
    res.send(person);
  } else {
    res.status(404).send("person not found");
  }
});

app.delete("/api/persons/:id", (req, res, next) => {
  const deletedUser = data.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.send(deletedUser);
});

app.get("/info", (req, res, next) => {
  const date = new Date();
  console.log(date.toLocaleDateString());
  res.send(`
  <p>Phonebook has info for ${data.length} people</p>
  <p>${date}</p>`);
});

app.post("/api/persons", (req, res, next) => {
  const { name, number } = req.body;

  const found = data.find((person) => person.name === name);
  if (found) {
    res.status(404).send({ error: "name must be unique" });
  } else if (!name || !number) {
    res.status(404).send({ error: "name or number is missing" });
  } else {
    const person = {
      id: Math.floor(Math.random() * 1000000),
      name,
      number,
    };
    data.push(person);
    res.send(data);
  }
  console.log(data);
});


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors')

app.use(cors())

app.use(morgan('tiny'));
app.use(bodyParser.json());

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Martti Tienari",
    number: "040-123456",
    id: 2
  },
  {
    name: "Arto Järvinen",
    number: "040-123456",
    id: 3
  },
  {
    name: "Lea Kutvonen",
    number: "040-123456",
    id: 4
  }
];
app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
  
  app.get('/info', (req, res) => {
    res.send(`
      <p>There are info of ${persons.length} persons in the phonebook</p>
      <p>${new Date()}</p>
    `);
  });
  
  
  app.get('api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
    response.json(person)

    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    app.delete('/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()

  })

  app.post('/api/persons', (req, res) => {
    const body = req.body;
    if (body.name === undefined) {
      return res.status(400).json({error: 'name is missing'});
    }
    if (body.number === undefined) {
      return res.status(400).json({error: 'number is missing'});
    }
    if (persons.some(p => p.name === body.name)) {
      return res.status(400).json({error: 'name must be unique'});
    }
  
    const person = {
      name: body.name,
      number: body.number,
      id: Math.floor(1 + Math.random() * 10000000)
    };
    persons = persons.concat(person);
    res.json(person);
  });
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())



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
  app.get('/', (req, res) => {
    res.send('<h1>Notebook of Samuel</h1>')
  })
  app.get('/api', (req, res) => {
    res.send('<h1>Notebook of api</h1>')
  })

  app.get('/info', (req, res) => {
    res.send(`
      <p>Phonebook has a info of ${persons.length} people</p>
      <p>${new Date()}</p>
    `);
  });
  
  app.get('/api/persons', (req, res) => {
    res.json(persons)
  })
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


const port = 3001
app.listen(port)
console.log(`Server running on port ${port}`)
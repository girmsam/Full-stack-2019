const mongoose = require('mongoose');

const url = `mongodb+srv://Girmay:${password}@cluster0-a6kme.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.connect(url);

const Person = mongoose.model('Person', {
  name: String,
  number: String,
});

module.exports = Person;
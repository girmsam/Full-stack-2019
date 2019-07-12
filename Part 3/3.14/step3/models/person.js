const mongoose = require('mongoose');

const url = `mongodb+srv://Girmay:${password}@cluster0-a6kme.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.connect(url);

const Person = mongoose.model('Person', {
  name: String,
  number: String,
});

personSchema.statics.format = function(person) {
    return {
      name: person.name,
      number: person.number,
      id: person._id
    };
  };
  
  const Person = mongoose.model('Person', personSchema);
  
module.exports = Person;
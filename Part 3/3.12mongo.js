const mongoose = require('mongoose');

const url = 'mongodb://<dbuser>:<dbpassword>@ds221631.mlab.com:21631/fullstack-persons';

mongoose.connect(url);

const Person = mongoose.model('Person', {
  name: String,
  number: String,
});

if (process.argv.length <= 2) {
  Person
    .find({})
    .then(result => {
      console.log("Phonebook:");
      result.forEach(person => {
        console.log(person.name, person.number);
      });
      mongoose.connection.close();
    });
} else if (process.argv.length >= 4) {
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3]
  });

  person
    .save()
    .then(response => {
      console.log(
        ` ${person.name} number ${person.number} has been added`);
      mongoose.connection.close();
    })
}
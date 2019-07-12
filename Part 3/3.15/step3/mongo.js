const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}
const password = process.argv[2]

const url =
  `mongodb+srv://Girmay:${password}@cluster0-a6kme.mongodb.net/persons?retryWrites=true&w=majority`

  
  mongoose.connect(url, { useNewUrlParser: true })

  const Person = mongoose.model('Person', {
    name: String,
    number: String,
  });
  
  if (process.argv.length <= 2) {
    Person
      .find({})
      .then(result => {
        console.log("phonebook:");
        result.forEach(person => {
          console.log(person.name, person.number);
        });
        mongoose.connection.close();
      });
  } else if (process.argv.length >= 4) {
    const person = new Person({
      name: process.argv[3],
      number: process.argv[4]
    });
  
    person
      .save()
      .then(response => {
        console.log(
          `Adding person ${person.name} number ${person.number} to the phonebook`);
        mongoose.connection.close();
      })
  }
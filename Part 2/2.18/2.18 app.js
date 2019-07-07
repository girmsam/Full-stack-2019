import React from 'react';
import Filter from './components/filter.js';
import FormAddPerson from './components/addperson.js';
import ShowNumbers from './components/statistics.js';
import personService from './services/persons.js';
import Notification from './components/note.js';

const App = (props) => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [showAll, setShowAll] = useState('')
    const [newfilter, setFilters] = useState('')
    const [notification, setNotification] = useState(null)
    

    setNotification = (msg) => {
        setNotification({ notification: msg });
        setTimeout(() => {
          setNotification({ notification: null })
        }, 5000);
      };

    componentDidMount() {
      personService
        .getAll()
        .then(response => setPersons({ persons: response.data}));
    }
  addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
      };
      let id = -1;
      persons.forEach(person =>
          person.name === newPerson.name ? id = person.id : 0);
      if (id === -1) {
        personService
          .create(newPerson)
          .then(person => {
            const newPerson = {
                name: newName,
                number: newNumber
                };
            })
          this.setNotification(`Person ${newPerson.name} added.`);
      } else {
        if (window.confirm(`${newPerson.name} is in the phonebook, do you want replace?`)) {
          personService
            .update(id, newPerson)
            .then(person => {
              const newPersons = [...this.state.persons];
              newPersons.forEach(p => p.id === person.id ? p.number = person.number : 0);
              const newPerson = {
                name: newName,
                number: newNumber
                };
              this.setNotification(` ${newPerson.name} number has been changed.`);
            });
        };
      };
    };
  removePerson = (event) => {
    const id = event.target.getAttribute("id");
    const name = event.target.getAttribute("name");
    if (window.confirm(`Do you want to delete ${name}?`)) {
      personService
        .remove(id);
      setPersons({
        persons: persons.filter(person => person.id.toString() !== id)
      });
    };
  };

  handleNameChange = (event) => {
    setNewName({ newName: event.target.value });
  };
  handleNumberChange = (event) => {
    setNewNumber({ newNumber: event.target.value });
  };
  handleFilterChange = (event) => {
    setFilters({ newfilter: event.target.value });
  };

    return (
      <div>
        <h2>Phonebook</h2>
        <Notification msg={this.state.notification} />
        <Filter value={newfilter}
          handleFilterChange={handleFilterChange} />
        <Addname addname={addname}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange} />
        <Note persons={persons}
          filter={newfilter} />
          removePerson = {removePerson} />
      </div>
    )
}
export default App;
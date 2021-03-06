import React from 'react';
import Filter from './components/filter.js';
import FormAddPerson from './components/addperson.js';
import ShowNumbers from './components/statistics.js';

const App = (props) => {
    const [ persons, setPersons] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [showAll, setShowAll] = useState('')
    const [newfilter, setFilters] = useState('')

  addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber
      };
    if (!persons.some(person => person.name === newName)) {
      const setPersons = persons.concat(newPerson);
      setNewName('')
      setNewNumber('')
      }
    else {
      window.alert(newName + ' is already added to phonebook');
    };
  }
  }

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
        <Filter value={newfilter}
          handleFilterChange={handleFilterChange} />
        <Addname addname={addname}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange} />
        <Note persons={persons}
          filter={newfilter} />
      </div>
    )
}
export default App;
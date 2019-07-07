
import React from 'react';

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
        <div>filter shown with
          <input value={filter}
            onChange={handleFilterChange}/>
        </div>
        <h3>Add a new</h3>
        <form onSubmit={addPerson}>
          <div>
            name: <input
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div>
            number: <input
              value={newNumber}
              onChange={handleNumberChange}
              />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h3>Numbers</h3>
        {persons
          .filter(person =>
            person.name.toLowerCase().includes(filter.toLowerCase()))
          .map(person =>
            <div key={person.name}>{person.name} {person.number}</div>
        )}
      </div>
    )

export default App;
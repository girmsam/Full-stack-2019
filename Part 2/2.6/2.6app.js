import React from 'react';

const App = (props) => {
const [ persons, setPersons] = useState([]) 
const [ newName, setNewName ] = useState('')

  addName = (event) => {
    event.preventDefault();
    const newPerson = { name: newName };
    const newPersons = persons.concat(newPerson);
    setPersons({
      persons: newPersons,
      newName: ''
    });
  }

  handleChange = (event) => {
    setNewName({ newName: event.value });
  };

    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={addName}>
          <div>
            name: <input
              value={newName}
              onChange={handleChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
        <h2>Numbers</h2>
        {persons.map(person => <div key={person.name}>{person.name}</div>)}
      </div>
    )
  };

export default App;
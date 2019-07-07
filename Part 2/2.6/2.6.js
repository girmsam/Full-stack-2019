
import React, { useState } from 'react'
import Note from './components/Note'
const App = (props) => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [list,newList] = useState([])

  const rows = () => persons.map(note =>
    <Note
    key={note.id}
    note={note}
    number = {note.id}
    />
  )
  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: persons.length + 1,
    }
    if (list.indexOf(nameObject.content) == -1){
      newList(list.concat(nameObject.content))
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    else {
      window.alert(newName + ' is already added to phonebook');
    }
  
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
      <input 
      value = {newName}
      onChange={handleNameChange}
          />
        <div>
          <button type="submit">add</button>
        </div>
        
      </form>
      <h2>Numbers</h2>
      <u1>
        {rows()}
      </u1>
    </div>
  )

}
export default App 
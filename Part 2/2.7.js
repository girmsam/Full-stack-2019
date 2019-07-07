
import React, { useState } from 'react'
import Note from './components/Note'


const App = (props) => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [list,newList] = useState([])
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState('')
  const [newfilter, setFilters] = useState('')

  const notesToShow = showAll
  ? persons
  : persons.filter(note => note.content == newfilter)
  
  const rows = () => persons.map(note =>
    <Note
    key={note.id}
    note={note}
    />
  )
  

  
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      content: newName,
      id: newNumber,
    }
    if (list.indexOf(nameObject.content) === -1){
      newList(list.concat(nameObject.content))
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
    else {
      window.alert(newName + ' is already added to phonebook');
    }
  
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {notesToShow}>
      <div>
          filter shown with <input 
          value = {newfilter}
          onChange={handleNameChange} />
      </div>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          filter {showAll ? 'content' : 'all' }
        </button>
      </div>
      </form>
      <h2>add a new</h2>
      <form onSubmit = {addName}>
       <div>name: <input 
      value = {newName}
      onChange={handleNameChange} /></div>
       <div>number: <input
      value = {newNumber}
      onChange={handleNumberChange}/></div>
      <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <u1>
        {rows()}
      </u1>
    </div>
  )

}
export default App 
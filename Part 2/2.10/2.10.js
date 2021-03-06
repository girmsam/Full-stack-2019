import React from 'react';
import Filter from './components/Filter';
import Addname from './components/Addname';
import Note from './components/Note';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  };

  addname = (event) => {
    event.preventDefault();
    if (!this.state.persons.some(person => person.name === this.state.newName)) {
      const newPerson = {
        name: this.state.newName,
        number: this.state.newNumber
      };
      const newPersons = this.state.persons.concat(newPerson);
      this.setState({
        persons: newPersons,
        newName: '',
        newNumber: ''
      });
    };
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value });
  };
  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value });
  };
  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Filter value={this.state.filter}
          handleFilterChange={this.handleFilterChange} />
        <Addname addname={this.addname}
          newName={this.state.newName}
          handleNameChange={this.handleNameChange}
          newNumber={this.state.newNumber}
          handleNumberChange={this.handleNumberChange} />
        <Note persons={this.state.persons}
          filter={this.state.filter} />
      </div>
    )
  };
};

export default App;
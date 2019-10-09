import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'040-1234567' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleAddName = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({name: newName, number: newNumber}));
  };

  const rows = persons.map(person => <p key={person.name}>{person.name} {person.number}</p>);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleNameChange}
            />
          <br />
          number:
            <input
              value={newNumber}
              onChange={handleNumberChange}
            />
        </div>
        <div>
          <button 
            type="submit"
            onClick={handleAddName}
          >
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
        {rows}
    </div>
  );
};

export default App;

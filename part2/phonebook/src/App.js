import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchWord, setSearchWord] = useState('');

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchWordChange = (event) => {
    setSearchWord(event.target.value);
  }

  const handleAddName = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({name: newName, number: newNumber}));
  };

  const matchedPersons = persons.filter(person => person.name.toLowerCase().includes(searchWord.toLowerCase()));

  const rows = matchedPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>);

  return (
    <div>
      <h2>Phonebook</h2>
      <input value={searchWord} onChange={handleSearchWordChange} />
      <h2>add a new</h2>
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

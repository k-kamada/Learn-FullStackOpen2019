import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
  ]);
  const [newName, setNewName] = useState('');

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleAddName = (event) => {
    event.preventDefault();
    setPersons(persons.concat({name: newName}));
  };

  const rows = persons.map(person => <p key={person.name}>{person.name}</p>);

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: 
            <input 
              value={newName}
              onChange={handleInputChange}
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

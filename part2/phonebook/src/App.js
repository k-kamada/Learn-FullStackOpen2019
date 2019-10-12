import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWord, setFilterWord] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      });
  },[]);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterWord={filterWord} setFilterWord={setFilterWord}/>

      <h3>add a new</h3>

      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />

      <h3>Numbers</h3>
      
      <Persons persons={persons} filterWord={filterWord}/>

    </div>
  );
};

export default App;

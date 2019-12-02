import React, { useState, useEffect } from 'react';
import Filter from './Components/Filter';
import PersonForm from './Components/PersonForm';
import Persons from './Components/Persons';
import PersonService from './services/persons'
import Notification from './Components/Notification';
import Error from './Components/Error';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterWord, setFilterWord] = useState('');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    PersonService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons);
      });
  },[]);

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notificationMessage} />
      <Error message={errorMessage} />

      <Filter filterWord={filterWord} setFilterWord={setFilterWord}/>

      <h3>add a new</h3>

      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setNotificationMessage={setNotificationMessage}
        setErrorMessage={setErrorMessage}
      />

      <h3>Numbers</h3>
      
      <Persons 
        persons={persons} 
        filterWord={filterWord} 
        deletePerson={PersonService.deletePerson}
        setPersons={setPersons}
        setNotificationMessage={setNotificationMessage}
        setErrorMessage={setErrorMessage}
      />

    </div>
  );
};

export default App;

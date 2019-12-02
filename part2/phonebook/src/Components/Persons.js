import React from 'react';

const Persons = ({ persons, filterWord, deletePerson, setPersons, setNotificationMessage, setErrorMessage }) => {
  const matchedPersons = persons.filter(
    person => person.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  const deleteSelected = (id) => {
    const selectedPerson = persons.find(p => p.id === id);
    if (!window.confirm(`Delete ${selectedPerson.name} ?`)) {
      return;
    }

    deletePerson(id)
      .then(result => {
        setNotificationMessage(`Deleted ${selectedPerson.name}.`);
      })
      .catch(error => {
        setErrorMessage(`Imformation of ${id} has already been removed from server!`);
        setTimeout(() => {setErrorMessage(null)},5000);
      });

    const newPersons = persons.filter(p => p.id !== id);
    setPersons(newPersons);
  }

  const rows = matchedPersons.map(
    person => <p key={person.name}>
                {person.name} {person.number} 
                <button onClick={() => {deleteSelected(person.id)}}>delete</button>
              </p>
  );

  return (rows);
};

export default Persons;

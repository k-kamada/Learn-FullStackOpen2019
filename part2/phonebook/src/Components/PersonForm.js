import React from 'react';
import PersonService from './../services/persons';

const PersonForm = (props) => {
  const handleNameChange = (event) => {
    props.setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    props.setNewNumber(event.target.value);
  };

  const handleAddName = (event) => {
    event.preventDefault();
    const samePerson = props.persons.find(person => person.name === props.newName);
    if (samePerson) {
      const result = window.confirm(`${props.newName} is already added to phonebook, replace the old number with a new one?`);
      if (result) {
        PersonService.update({name: samePerson.name, number:props.newNumber, id:samePerson.id})
          .then(returnedPerson => {
            const newPersons = props.persons.map(person => person.name !== samePerson.name ? person : returnedPerson);
            props.setPersons(newPersons);
            props.setNotificationMessage(`Updated ${props.newName}`)
            setTimeout(() => {props.setNotificationMessage(null)}, 5000);
          })
          .catch(() => {
            props.setErrorMessage(`Imformation of ${props.newName} has already been removed from server!`);
            setTimeout(() => {props.setErrorMessage(null)},5000);
            const newPersons = props.persons.filter(person => person.name !== props.newName);
            props.setPersons(newPersons);
          });

      }
      return;
    }
    PersonService.create({name: props.newName, number:props.newNumber})
      .then(returnedPerson => {
        props.setPersons(props.persons.concat(returnedPerson));
        props.setNotificationMessage(`Added ${returnedPerson.name}`)
        setTimeout(() => {props.setNotificationMessage(null)}, 5000);
      });
  };

  return (
    <form>
      <div>
        name: 
          <input 
            value={props.newName}
            onChange={handleNameChange}
          />
        <br />
        number:
          <input
            value={props.newNumber}
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
  );
};

export default PersonForm;

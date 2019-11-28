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
    if (props.persons.find((person) => person.name === props.newName)) {
      alert(`${props.newName} is already added to phonebook`);
      return;
    }
    PersonService.create({name: props.newName, number:props.newNumber})
      .then(returnedPerson => {
        props.setPersons(props.persons.concat(returnedPerson));
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

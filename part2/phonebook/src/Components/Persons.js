import React from 'react';

const Persons = ({ persons, filterWord }) => {
  const matchedPersons = persons.filter(person => person.name.toLowerCase().includes(filterWord.toLowerCase()));
  const rows = matchedPersons.map(person => <p key={person.name}>{person.name} {person.number}</p>);

  return (rows);
};

export default Persons;

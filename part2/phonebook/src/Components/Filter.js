import React from 'react';

const Filter = ({filterWord, setFilterWord}) => {
  const handleSearchWordChange = (event) => {
    setFilterWord(event.target.value);
  }

  return (
      <input value={filterWord} onChange={handleSearchWordChange} />
  );
};


export default Filter;

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

const Country = ({ name }) => {
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true')
      .then(response => {
        const fetched = response.data[0];
        const languages = fetched.languages.map(langObj => <li key={langObj.name}>{langObj.name}</li>);
        setCountryInfo({
          name: fetched.name, 
          capital: fetched.capital,
          population: fetched.population,
          languages: languages,
          flag: fetched.flag,
        });
      });
  }, [name]);

  return (
    <>
      <h3>{countryInfo.name}</h3> 
      <p>
      capital {countryInfo.capital}<br />
      population {countryInfo.population}<br />
      </p>
      <h4>languages</h4>
      <ul>
        {countryInfo.languages}<br />
      </ul>
      <p>
        <img src={countryInfo.flag} width="300" alt="national flag"></img>
      </p>
    </>
  );
};

const Results = ({ names, filterWord, setFilterWord }) => {
  if (filterWord === '') {
    return (
      <>Please input the country name</>
    );
  }
  // More than 10 candidates found
  if (names.length > 10) {
    return (
      <>Too many matches, specify another filter (Candidates: {names.length})</>
    );
  }
  // Only one candidate 
  if (names.length === 1) {
    return (
      <Country name={names[0]} />
    );
  }
  // 2 ~ 10 candidates found
  const lists = names.map(name => 
    <div key={name}>
      {name}
      <button onClick={() => setFilterWord(name)}>
        show
      </button>
      <br />
    </div>
  );
  return (lists);
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterWord, setFilterWord] = useState('');

  useEffect(() => {
    // Fetch all countries only at first time
    if (countries.length === 0) {
      axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {setCountries(response.data); console.log('get')});
    }
  }, [countries]);

  const names = countries.map(country => country.name);

  const filterdCountry = names.filter(name => name.toLowerCase().includes(filterWord.toLowerCase()));

  const onFilterWordChange = (event) => {
    setFilterWord(event.target.value);
  }

  return (
    <>
      <p>
        find countries
        <input value={filterWord} onChange={onFilterWordChange}></input>
      </p>
      <Results filterWord={filterWord} setFilterWord={setFilterWord} names={filterdCountry} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

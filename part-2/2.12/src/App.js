import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    try {
      const { data } = await axios("https://restcountries.com/v3.1/all");
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    if (e.target.value !== "" && countries.length > 0) {
      let filteredResults = countries.filter((c) =>
        c.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      );

      if (filteredResults.length <= 10) {
        setResults(filteredResults);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <h1>Countries</h1>
      <input type="text" onChange={onChangeHandler} />
      <ul>
        {results.length === 1 ? (
          <>
            <h2>{results[0].name.common}</h2>
            <li>Capital: {results[0].capital}</li>
            <li>Population: {results[0].population}</li>
            <li>Languages: </li>
            <img width="150px" src={results[0].flags.png} alt="flags" />
          </>
        ) : results.length <= 10 && results.length ? (
          results.map((i) => <h2 key={i.name.common}>{i.name.common}</h2>)
        ) : (
          <p>Please fine tune your search</p>
        )}
      </ul>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async (e) => {
    try {
      const { data } = await axios("https://restcountries.com/v3.1/all");
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (e) => {
    if ((e.target.value !== "") & (countries.length > 0)) {
      let filteredResults = countries.filter((c) =>
        c.name.common.includes(e.target.value)
      );

      if (filteredResults.length > 10) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
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
        {results &&
          results.map((i) => <li key={i.name.common}>{i.name.common}</li>)}
      </ul>
      {showWarning && <p>Please fine tune your search</p>}
    </div>
  );
};

export default App;

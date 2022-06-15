import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [countries, setCountries] = useState([]);
  const [results, setResults] = useState([]);

  const [weather, setWeather] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  console.log(weatherData);

  const getLocation = async (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    const response = await axios.get(URL);
    setWeatherData(response.data);
    setWeather(true);

    try {
    } catch (error) {}
  };

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

  const onChangeHandler = (name) => {
    setWeather(false);
    let filteredResults;
    if (name !== "" && countries.length > 0) {
      filteredResults = countries.filter((c) =>
        c.name.common.toLowerCase().includes(name.toLowerCase())
      );

      if (filteredResults.length <= 10) {
        setResults(filteredResults);
      }
    } else {
      setResults([]);
    }

    if (filteredResults.length === 1) {
      const coOrdinates = {
        lat: filteredResults[0].latlng[0],
        lon: filteredResults[0].latlng[1],
      };

      getLocation(coOrdinates.lat, coOrdinates.lon);
    }
  };

  return (
    <div>
      <h1>Countries</h1>
      <input type="text" onChange={(e) => onChangeHandler(e.target.value)} />
      <ul>
        {results.length === 1 ? (
          <>
            <h2>{results[0].name.common}</h2>
            <li>Capital: {results[0].capital}</li>
            <li>Population: {results[0].population}</li>
            <li>Languages: </li>
            <img width="150px" src={results[0].flags.png} alt="flags" />
            <br />
            <img
              width="200px"
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <br />
            <h1>Weather in : {results[0].capital}</h1>
          </>
        ) : results.length <= 10 && results.length ? (
          results.map((i) => (
            <>
              <h2 key={i.name.common}>{i.name.common}</h2>
              <button onClick={() => onChangeHandler(i.name.common)}>
                show
              </button>
            </>
          ))
        ) : (
          <p>Please fine tune your search</p>
        )}
      </ul>
      {weather && (
        <div>
          <h2>
            temperature {(weatherData.main.temp - 273.15).toFixed(1)} celcius{" "}
          </h2>
          <h2>{weatherData.wind.speed}m/s</h2>
        </div>
      )}
    </div>
  );
};

export default App;

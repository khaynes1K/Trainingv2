/*

import logo from './logo.svg';
import './App.css';


const apiKey = '1b8e1b39d74b4fb4984174905240403';
const apiUrl = 'http://api.weatherapi.com/v1/';


async function fetchWeatherData(city) {
  try {
      const response = await fetch(`${apiUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`);
      return await response.json();
  } catch (error) {
      console.error('Error fetching weather data:', error);
      return null;
  }
}

function App() {

  const data = fetchWeatherData('chicago');
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { useEffect, useState } from 'react';
import './App.css';

const apiKey = '1b8e1b39d74b4fb4984174905240403';
const apiUrl = 'http://api.weatherapi.com/v1';

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${apiUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const weatherData = await fetchWeatherData('chicago');
      setData(weatherData);
    }
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <div>

        {data && data.current && (<>
                                    <div> {data.location.name} </div>
                                    <div>{data.location.region} </div>
                                    <div> {data.location.country} </div>
                                    <div> {data.location.localtime} </div>
                                    <div> {data.current.temp_c} </div>
                                    <div>{data.current.temp_f}</div>

                                    </> )}
        
      </div>
    </div>
  );
}

export default App;

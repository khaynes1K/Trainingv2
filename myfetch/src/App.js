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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './App.css';

const apiKey = '1b8e1b39d74b4fb4984174905240403';
const apiUrl = 'http://api.weatherapi.com/v1';

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${apiUrl}/current.json?key=${apiKey}&q=${city}&aqi=no`);
    console.log("response: ", response)
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

async function fetchWeatherForcastData(city) {
  try {
    const response = await fetch(`${apiUrl}/forcast.json?key=${apiKey}&q=${city}&aqi=no`);
    console.log("response: ", response)
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather forcast data:', error);
    return null;
  }
}


function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");

  async function fetchData(city) {
    const weatherData = await fetchWeatherData(city);
    setData(weatherData);
  }

  console.log(data);

  return (
    <div className="App">
      <div>

        {data && data.current && 
        (
          <>
              <div> {data.location.name} </div>
              <div>{data.location.region} </div>
              <div> {data.location.country} </div>
              <div> {data.location.localtime} </div>
              <div> {data.current.temp_c} </div>
              <div>{data.current.temp_f}</div>
                  </> 
                )
              }
        
      </div>
      
      <div>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '15ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="filled-basic"
        label="City" 
        variant="filled" 
        onChange={(input) => {
          setCity(input.target.value)

        }}
      />
    </Box>

     </div>
      <Button variant="contained" onClick={() => {fetchData(city)}}>Submit </Button>
    </div>
  );
}
export default App;

//React-router-training 
/*

import { Link, Route, Routes } from "react-router-dom"
import {Home } from "./webpages/Home"
import {InternPage} from "./webpages/InternPage"
import React, { useState, useEffect } from 'react';



function App() {
  return(
    <>
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/internPage">Intern page</Link></li>
        </ul>
    </nav>


    


  <Routes>
    <Route path= "/" element={<Home />} />
    <Route path= "/internPage" element={<InternPage />}/>
  </Routes>
  </>


  );
}

export default App;

*/

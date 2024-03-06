
/*
import logo from './logo.svg';
import './App.css';

function App() {
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

/* import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {// Render your components using the fetched data }
      <h1>My App</h1>
      <p>{data && data.someProperty}</p>
    </div>
  );
}

export default App;
 */
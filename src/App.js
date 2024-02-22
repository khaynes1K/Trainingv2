
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


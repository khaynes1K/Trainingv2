import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './index.css';
import App from './App';

import Practice from './Practice';
import LayoutPractice from './LayoutPractice';
import reportWebVitals from './reportWebVitals';
import AppointmentPage from './appointmentPage';
import CreateUserPage from './createUserPage';
import UserPage from './userPage';
import DropDownPage from './dropDownPage';









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/practice" element={<Practice />}/>
        <Route exact path = "/layoutPractice" element={<LayoutPractice/>} />
        <Route exact path = "/appointmentPage" element={<AppointmentPage/>} />
        <Route exact path = "/createUserPage" element={<CreateUserPage/>} />
        <Route exact path = "/dropDownPage" element={<DropDownPage/>} />
        <Route exact path = "/userPage" element={<UserPage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


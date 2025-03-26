import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router";
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import About from './pages/About'
import ContactMe from './pages/ContactMe'
import NotFound from './pages/Notfound'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contactMe" element={<ContactMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
//      


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


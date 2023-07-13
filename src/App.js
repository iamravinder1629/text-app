import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setmode] = useState('light');

  const darkmode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e323d";
      document.title += "-Dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text utils";
    } 
  }

  return (
    <>
      {/* <Navbar title="TEXT" mode={mode} darkmode={darkmode} />
      
        <Textform heading="Enter the text:" mode={mode} /> */}
      
      <BrowserRouter>
        <Navbar title="TEXT" mode={mode} darkmode={darkmode} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textform heading="Enter the text:" mode={mode} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

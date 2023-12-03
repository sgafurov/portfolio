import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import {Resume} from "./components/Resume";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

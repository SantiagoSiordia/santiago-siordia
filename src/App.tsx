import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Author, Banner, Home, Navbar } from "./components";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Banner />
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/Author" element={Author} />
          <Route path="/About" element={Home} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

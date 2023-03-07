import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import NavBar from "./common/NavBar";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Education from "./screens/Education";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

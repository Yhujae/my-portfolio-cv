import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import CoverPage from "./components/CoverPage";
import Project from "./components/Project";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/coverpage' element={<CoverPage />} />
        <Route path='skills' element={<Skills />} />
        <Route path='experience' element={<Experience />} />
        <Route path='contact' element={<Contact />} />
        <Route path='project' element={<Project />} />
      </Routes>
    </Router>
  );
};

export default App;

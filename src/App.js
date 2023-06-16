import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from "react";
import { Footer, Navigation } from "./Components";
import { Home, Contact, Projects, Activities, Resume } from "./Pages";

import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {

  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/portfolio-mark2" element={<Home/>} />
        <Route path ="/contact" element={<Contact/>} />
        <Route path="/activities" element={<Activities/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
        {/* <Route exact path="/about" component={Home} /> */}
        
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

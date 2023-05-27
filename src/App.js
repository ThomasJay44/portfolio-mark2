import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from "react";
import { Footer, Navigation } from "./Components";
import { Home, Contact, Projects, Resume } from "./Pages";
import { Clock } from "./Pages/Activities";

export default function App() {
  // const [currentPage, setCurrentPage] = useState("Home");
  // const renderPage = () => {
  //   if (currentPage === "Home") return <Home />;
  //   if (currentPage === "Contact") return <Contact />;
  //   if (currentPage === "Activities") return <Activities />;
  //   if (currentPage === "Projects") return <Projects />;
  // };
  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path ="/contact" element={<Contact/>} />
        <Route path="/clock" element={<Clock/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume/>} />
        {/* <Route exact path="/about" component={Home} /> */}
        
      </Routes>
      <Footer />
    </div>
    </Router>
  );
}

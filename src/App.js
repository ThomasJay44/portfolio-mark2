import './App.css';
import {useState } from "react";
import { Header, Footer, Nav } from "./Components";
import {Home, Contact, Activities, Projects}  from "./Pages/Home";


export default function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
      if (currentPage === "Home") return <Home />
      if (currentPage === "Contact") return <Contact />
      if (currentPage === "Activities") return <Activities />
      if (currentPage === "Projects") return <Projects />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <Header />
      <Nav currentPage={ currentPage } handlePageChange={handlePageChange}     />
      {renderPage(currentPage)}
      <Home />
      <Footer />
    </div>
  );
  }




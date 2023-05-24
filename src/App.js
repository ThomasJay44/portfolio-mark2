import "./App.css";
import " BrowserRouter as Router, Route, Switch } from 'react-router-dom';"
import { useState } from "react";
import { Header, Footer, Navigation } from "./Components";
import { Home, Contact, Activities, Projects } from "./Pages";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "Home") return <Home />;
  //   if (currentPage === "Contact") return <Contact />;
  //   if (currentPage === "Activities") return <Activities />;
  //   if (currentPage === "Projects") return <Projects />;
  // };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
    <div className="App">
      <Header />
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* {renderPage(currentPage)} */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />

        
      </Switch>
      <Home />
      <Footer />
    </div>
    </Router>
  );
}

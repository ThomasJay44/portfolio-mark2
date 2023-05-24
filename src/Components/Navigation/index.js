import React from "react";

import "./style.css";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>

        <li> 
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#activities"
            onClick={() => handlePageChange("Activities")}
            className={currentPage === "Activites" ? "nav-link active" : "nav-link"}
          >
            Activites
          </a>
        </li>

        <li>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>

        

        

      </ul>
    </div>
  );
}

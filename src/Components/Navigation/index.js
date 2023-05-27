import React from "react";

import "./style.css";
import { Link } from "react-router-dom";

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="navigation">
      <ul>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        {/* <li><Link to="/contact">Contact</Link></li> */}
      </ul>
    </div>
  );
}

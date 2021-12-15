import React from "react";
import { Link } from "react-router-dom";

const header = (props) => {
  return (
    <div className="headerMenu">
      <p>STOCKYO</p>
      <ul>
        <li className="menuItem">
          <Link to="/">Home</Link>
        </li>
        <li className="menuItem">
          <Link to="/Filter">Filter</Link>
        </li>
        <li className="menuItem">
          <Link to="/Expenses">Expenses</Link>
        </li>
        <li className="menuItem">
          <Link to="/TestFunctions">TestFunctions</Link>
        </li>
      </ul>
    </div>
  );
};

export default header;

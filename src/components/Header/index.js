import React from "react";
import { Link } from "react-router-dom"; 

const header = (props) => {
  return (
    <div className="headerMenu">
      <p>STOCKYO</p>
      <ul>
        <li>
          <Link to="/">Grid</Link>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </div>
  );
};

export default header;

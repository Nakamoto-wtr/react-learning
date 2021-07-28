import React from "react";

const header = (props) => {
  return (
    <div className="headerMenu">
      <p>STOCKYO</p>
      <ul>
        <li className="menuItem"> HOME</li>
        <li className="menuItem"> LIVE GRAPHS</li>
        <li className="menuItem"> CONTACT</li>
        <li className="menuItem"> LEARNING</li>
      </ul>
    </div>
  );
};

export default header;

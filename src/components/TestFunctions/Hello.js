import React from "react";
import "./TestFunctions.css";

function Hello() {
  function sayHello() {
    alert("YO!");
  }

  return (
    <button className="button" onClick={sayHello}>
      Hello
    </button>
  );
}

export default Hello;

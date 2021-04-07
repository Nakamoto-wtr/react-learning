import React from "react";

const filter = () => {
  const names = ["James", "John", "Paul", "Ringo", "George"];
  return (
      <div>
          <p>TESTING</p> 
      {names.filter((names) => names.includes("J"))
    .map((filteredName) => (
      <li>{filteredName}</li>
    ))}
      </div>
  );
}

  
  export default filter;
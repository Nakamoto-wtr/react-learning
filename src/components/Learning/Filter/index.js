import React from "react";

const list = ["James", "John", "Paul", "Ringo", "George"];

<div>
  {list
    .filter((list) => list.includes("J"))
    .map((filteredName) => (
      <li>{filteredName}</li>
    ))}
</div>;

export default list;

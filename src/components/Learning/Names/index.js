import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        I'm {props.name} and im in {props.location}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;

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

  // const [personState, setPersons] = useState({
  // persons: [
  //   { name: "Waseem", location: "Newcastle" },
  //   { name: "Will", location: "LA" },
  // ],
  // otherState: "someother value",
  // showPersons: true,
  // });

  // const switchNameHandler = () => {
  //   setPersons({
  //     persons: [
  //       { name: "Max", location: "Australia" },
  //       { name: "Steph", location: "Manchester" },
  //     ],
  //   });
  // };



        {/* <button className="button__main" onClick={switchNameHandler}>
        Button 1
      </button> */}
      {/* <Person
        name={personState.persons[0].name}
        location={personState.persons[0].location}
      />
      <Person
        name={personState.persons[1].name}
        location={personState.persons[1].location}
      /> */}

      {/* <TestImages /> */}
      {/* <Filter/> */}
      {/* <Person name="TEST" location="TEST" /> */}

export default person;

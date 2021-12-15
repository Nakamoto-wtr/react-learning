import React from "react";
import HelloFunction from "./Hello";
import CounterFunction from "./Counter";
// import UserListFunction from "./UserList";

const TestFunctions = () => {
  return (
    <div>
      <CounterFunction />
      <p>
        <HelloFunction />
      </p>
      {/* <UserListFunction /> */}
    </div>
  );
};

export default TestFunctions;

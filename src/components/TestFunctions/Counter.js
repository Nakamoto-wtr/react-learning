import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button className="button" onClick={() => setCount(count + 1)}>
        Counter {count}
      </button>
    </>
  );
}

export default Counter;

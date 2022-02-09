import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    if (count < 5) {
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
    }
  }
  return (
    <>
      <h1>count is {count}</h1>
      <button
        onClick={() => {
          incrementCount();
        }}
      >
        Increment
      </button>
    </>
  );
}

export default Counter;

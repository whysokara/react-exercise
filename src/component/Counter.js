import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Counter</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span style={{ padding: "1rem" }}>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter


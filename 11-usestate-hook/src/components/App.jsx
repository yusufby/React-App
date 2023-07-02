import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const state = useState(0);
  console.log(state);

  console.log(count);
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

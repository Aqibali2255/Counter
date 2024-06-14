import React, { useState } from "react";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import Decrement from "./components/Decrement";

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount((count = 0));
      alert("Values cannot decreas in Negative")
    }
  }
  function reset() {
    setCount((count = 0));
  }

  return (
    <>
      <div className="card carddive">
        <h1 className="card-header">Counter</h1>
        <div className="card-body">
          <h1 className="card-title hed value">{count}</h1>

          <Decrement data={decrement}></Decrement>

          <Reset data={reset}></Reset>

          <Increment data={increment}></Increment>
        </div>
      </div>
    </>
  );
}
export default App;

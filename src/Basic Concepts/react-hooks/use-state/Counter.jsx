import React, { useState } from "react";
import Buttons from "../../../Components/Button";
React;

function Counter() {
  const divStyle = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };
  const displayStyle = {
    fontSize: "10em",
    marginTop: 0,
    marginBottom: "50px",
  };
  const buttonStyle = {
    width: "200px",
    height: "50px",
    fontSize: "1.5em",
    fontWeight: "bold",
    margin: "5px 5px",
    backgroundColor: "hsl(197, 100%, 58%)",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textAlign: "center",
  };

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);

    //updater function
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    // setCount(c => c + 1);
    //OR
    // setCount(pervCount => pervCount + 1)
  };

  const decrement = () => {
    setCount(count - 1);

    //updater function
    // setCount(c => c - 1);
    // setCount(c => c - 1);
    // setCount(c => c - 1);
    //OR
    // setCount(pervCount => pervCount - 1)
  };

  const reset = () => {
    setCount(0);
    // setCount(c => c = 0)
  };

  const random = () => {
    Math.floor(Math.random() * 201) - 100; // ✅ hasil antara -100 s/d 100
    // setCount(Math.floor(Math.random() * (-100 - 100)) + 100);
  };

  return (
    <div style={divStyle}>
      <Buttons />

      <p style={displayStyle}>{count}</p>
      <button style={buttonStyle} onClick={decrement}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={reset}>
        Reset
      </button>
      <button style={buttonStyle} onClick={increment}>
        Increment
      </button>
      <button style={buttonStyle} onClick={random}>
        Random
      </button>
    </div>
  );
}

export default Counter;

// Updater function = A function passed as an argument to setState() usually
//                ex. setYear(arrow function)
//                Allow for safe updates based on the previous state
//                Used with multiple state updates and asynchronous functions
//                Good practice to use updater functions

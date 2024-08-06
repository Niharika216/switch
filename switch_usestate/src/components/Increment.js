import React from "react";
import { useState } from "react";

function Increment() {
  console.log("creating UI");
  let [score, setScore] = useState(0);
  return (
    <div className="App">
      <div className="incrementDiv">
      <h1>{score}</h1>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Increment Score
      </button>
      <button
        onClick={() => {
          setScore(score - 1);
        }}
      >
        Decrement Score
      </button>
      </div>
    </div>
  );
}

export default Increment;

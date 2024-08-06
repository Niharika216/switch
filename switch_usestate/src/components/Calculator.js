import React, { useRef } from "react";

function Calculator() {
  let firstNumber = useRef();
  let secondNumber = useRef();
  let operator = useRef();
  let result = useRef();
  let output = useRef();
  let res = useRef();

  const onclicking = () => {
    let op = operator.current.value;
    let firstValue=firstNumber.current.value;
    let secondValue=secondNumber.current.value;

    if (isNaN(firstValue) || isNaN(secondValue)) {
      alert("enter the values");
      return;
    }

    switch (op) {
      case "+":
        res = firstNumber + secondNumber;
        break;
      case "-":
        res = firstNumber - secondNumber;
        break;
      case "*":
        res = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber != 0) {
          res = firstNumber / secondNumber;
        } else {
          res = "Cannot divide by zero";
        }
        break;
      default:
        res = "invalid operator";
        break;
    }
    result=res.current;
    output.current.innerHTML = `Output = ${res}`;
  };
  return (
    <div className="App">
      <form>
        <div>
          <label>First Number</label>
          <input type="number" ref={firstNumber}></input>
        </div>
        <div>
          <label>Second Number</label>
          <input type="number" ref={secondNumber}></input>
        </div>
        <div>
          <label>operator</label>
          <input type="text" ref={operator}></input>
        </div>
        <div>
          <button type="button" onClick={onclicking}>
            Result
          </button>
        </div>
        <p ref={output}></p>
      </form>
    </div>
  );
}

export default Calculator;

import React, { useState } from "react";
export const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0]];
export const operations = ["+", "-", "/", "*"];

function Calculator() {
  const [operationalNum, setOperationNum] = useState("");
  const handleOperation = () => {
    //Eval converts an operational string to a numeric one
    setOperationNum(String(eval(operationalNum)))
  }
  return (
    <div>
      <h1>Calculator</h1>
      <div className="" role="cell">
        {operationalNum}
      </div>
      {numbers.map((a) =>
        a.map((n) => (
          <button
            key={n + "btn"}
            onClick={() => setOperationNum(operationalNum.concat(n))}
          >
            {n}
          </button>
        ))
      )}
      {operations.map((o) => (
        <button
          key={`btn-result-${o}`}
          onClick={() => setOperationNum(operationalNum.concat(o))}
        >
          {o}
        </button>
      ))}
      <button onClick={() => handleOperation()}>=</button>
    </div>
  );
}

export default Calculator;

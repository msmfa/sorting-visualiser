import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <RandomArray />
    </>
  );
}

function RandomArray() {
  let array = [1, 9, 3, 9, 6, 4, 8, 7];

  const [state, setState] = useState(array);

  const generateRandomArray = e => {
    setState(
      Array.from({ length: 10 }, () => Math.floor(Math.random() * 9) + 1)
    );
  };

  function bubbleSortBasic(array) {
    let len = array.length;

    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    return array;
  }

  const sort = () => {
    setTimeout(function() {
      setState([...bubbleSortBasic(state)]);
      console.log(state);
    }, 500);

    //If state === state could be a base for a recursive function?
  };

  return (
    <>
      <div className="container-bars">
        {state.map(item => (
          <li
            style={{
              height: `${item * 50}px`
            }}
            className="bars"
          >
            {item}
          </li>
        ))}
      </div>
      <button onClick={generateRandomArray}>Random Array</button>
      <button onClick={sort}>Sort</button>
    </>
  );
}
export default App;

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
    setState(Array.from({ length: 9 }, () => Math.floor(Math.random() * 9)));
  };

  function bubbleSortBasic(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 1; j < array.length; j++) {
        if (array[j - 1] > array[j]) {
          let temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;
  }

  const sort = () => {
    setTimeout(function() {
      console.log(bubbleSortBasic(state));
    }, 2000);
    console.log(state);
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
          ></li>
        ))}
      </div>
      <button onClick={generateRandomArray}>Random Array</button>
      <button onClick={sort}>Sort</button>
    </>
  );
}
export default App;

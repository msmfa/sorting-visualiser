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
      Array.from({ length: 60 }, () => Math.floor(Math.random() * 30) + 1)
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

  let completedArray = [...state].sort((a, b) => a - b);
  console.log(completedArray);
  console.log("state");
  console.log(state);
  console.log("state");

  const sort = () => {
    if (state.join("") === completedArray.join("")) return;

    setState([...bubbleSortBasic(state)]);
    console.log(state.join(""));
    setInterval(sort, 800);
  };

  //If state === state could be a base for a recursive function?
  //doesnt work because state obvously is always === to state
  //What about passing in a completed array and comparing it?
  //Turned the arrays in strings to compare them and that seems to work

  return (
    <>
      <div className="container-bars">
        {state.map(item => (
          <li
            style={{
              height: `${item * 10}px`
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

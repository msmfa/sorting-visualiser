import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <RandomArray />
    </>
  );
}

function RandomArray() {
  const initialArray = Array.from(
    { length: 60 },
    () => Math.floor(Math.random() * 30) + 1
  );

  const generateRandomArray = e => {
    setState(
      Array.from({ length: 60 }, () => Math.floor(Math.random() * 30) + 1)
    );
  };

  const [state, setState] = useState(initialArray);

  const completedArray = [...state].sort((a, b) => a - b);

  const bubbleSort = array => {
    let len = array.length;

    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
    return array;
  };

  const bubbleSortClick = () => {
    if (state.join("") === completedArray.join("")) return;
    setState([...bubbleSort(state)]);
    setTimeout(bubbleSortClick, 200);
    console.log("algo has run this many times");
  };

  //////////////////
  const mergeSortClick = () => {
    setState([...mergeRight([...state])]);
    console.log(state);
    console.log(mergeRight(state));
  };
  //splits the array in half and swaps once
  function mergeRight(arr) {
    let secondHalf = arr.slice(Math.floor(arr.length / 2));
    let half = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, half);
    console.log(firstHalf);
    for (let i = 0; i < secondHalf.length; i++) {
      if (secondHalf[i] > secondHalf[i + 1]) {
        let element = secondHalf[i];
        secondHalf[i] = secondHalf[i + 1];
        secondHalf[i + 1] = element;
      }
    }
    return [...secondHalf, ...firstHalf];
  }

  //Used a recursive function here but could have used SetTimeout with clearInterval
  //

  return (
    <>
      <div className="container-bars">
        {state.map(item => (
          <li
            style={{
              height: `${item * 10}px`
            }}
            className="bars"
          ></li>
        ))}
      </div>
      <button onClick={generateRandomArray}>Random Array</button>
      <button onClick={bubbleSortClick}>Bubble Sort</button>
      <button onClick={mergeSortClick}>Merge Sort</button>
    </>
  );
}
export default App;

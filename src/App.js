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

  const [state, setState] = useState(initialArray);

  const generateRandomArray = e => {
    setState(
      Array.from({ length: 60 }, () => Math.floor(Math.random() * 30) + 1)
    );
  };

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

  let completedArray = [...state].sort((a, b) => a - b);

  const sort = () => {
    if (state.join("") === completedArray.join("")) return;
    setState([...bubbleSort(state)]);
    setTimeout(sort, 200);
    console.log("algo has run this many times");
  };

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
      <button onClick={sort}>Sort</button>
    </>
  );
}
export default App;

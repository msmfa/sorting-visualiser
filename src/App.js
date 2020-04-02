import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { InsertionSortAlgo } from "./components/InsertionSort";
import { MergeSortAlgo } from "./components/MergeSort";
import { QuickSortAlgo } from "./components/QuickSort";
import DisplayTextLeft from "./components/LeftText";
import "./App.css";
import "./styles/LeftText.css";

const arrayLength = 100;
const minNumb = 5;
const maxNum = 80;
const timeDelay = 5;
const sortingColour = "red";
const sortingCompleteColour = "blue";

function App() {
  return (
    <>
      <div className="container">
        <DisplayArray />
        <DisplayTextLeft />
      </div>
    </>
  );
}

function DisplayArray() {
  const [arr, setArr] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const containerRef = useRef(null);

  useEffect(displayArray, []);

  function displayArray() {
    if (sorting) return;

    if (isSorted) resetArrayColour();

    setIsSorted(false);

    const arr = [];
    for (let i = 0; i < arrayLength; i++) {
      arr.push((maxNum - minNumb) * (i / arrayLength) + minNumb);
    }
    shuffle(arr);
    setArr(arr);
  }

  function animateArrayUpdate(displayBars) {
    if (sorting) return;
    setSorting(true);
    displayBars.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            animateArrayAccess(i);
            animateArrayAccess(j);
          } else {
            const [i] = comparison;
            animateArrayAccess(i);
          }
        } else {
          setArr(prevArr => {
            const [k, newValue] = comparison;
            const newArr = [...prevArr];
            newArr[k] = newValue;
            return newArr;
          });
        }
      }, index * timeDelay);
    });
    setTimeout(() => {
      animateSortedArray();
    }, displayBars.length * timeDelay);
  }

  function animateArrayAccess(index) {
    const arrayBars = containerRef.current.children;
    const arrayBarStyle = arrayBars[index].style;
    setTimeout(() => {
      arrayBarStyle.backgroundColor = sortingColour;
    }, timeDelay);
    setTimeout(() => {
      arrayBarStyle.backgroundColor = "";
    }, timeDelay * 2);
  }

  function animateSortedArray() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arrayBars.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      setTimeout(
        () => (arrayBarStyle.backgroundColor = sortingCompleteColour),
        i * timeDelay
      );
    }
    setTimeout(() => {
      setIsSorted(true);
      setSorting(false);
    }, arrayBars.length * timeDelay);
  }

  function resetArrayColour() {
    const arrayBars = containerRef.current.children;
    for (let i = 0; i < arr.length; i++) {
      const arrayBarStyle = arrayBars[i].style;
      arrayBarStyle.backgroundColor = "";
    }
  }

  function insertionSort() {
    const displayBars = InsertionSortAlgo(arr);
    animateArrayUpdate(displayBars);
  }
  function mergeSort() {
    const displayBars = MergeSortAlgo(arr);
    animateArrayUpdate(displayBars);
  }
  function quickSort() {
    const displayBars = QuickSortAlgo(arr);
    animateArrayUpdate(displayBars);
  }

  return (
    <div className="visualiser-container">
      <div className="array-container" ref={containerRef}>
        {arr.map(bar => (
          <div
            className="array-bar"
            style={{
              height: `${bar}vmin`,
              width: `${100 / arrayLength}vw`
            }}
            key={uuidv4()} //replace with UUID
          ></div>
        ))}
      </div>
      <footer className="app-container">
        <button
          className="app-button"
          id="new-array-button"
          onClick={displayArray}
        >
          Create new array
        </button>

        <button className="app-button" onClick={insertionSort}>
          Insertion sort
        </button>

        <button className="app-button" onClick={mergeSort}>
          Merge sort
        </button>

        <button className="app-button" onClick={quickSort}>
          Quick sort
        </button>
      </footer>
    </div>
  );
}

const shuffle = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
};

export default App;

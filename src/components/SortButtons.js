import React from "react";

export function SortButtons(props) {
  return (
    <footer className="app-container">
      <button
        className="app-button"
        id="new-array-button"
        onClick={props.displayArray}
      >
        New array
      </button>

      <button className="app-button" onClick={props.insertionSort}>
        Insertion sort
      </button>

      <button className="app-button" onClick={props.mergeSort}>
        Merge sort
      </button>

      <button className="app-button" onClick={props.quickSort}>
        Quick sort
      </button>
    </footer>
  );
}

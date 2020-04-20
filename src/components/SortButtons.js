import React from "react";

export function SortButtons(props) {
  return (
    <div className="app-container">
      <div className="nav-title">Sort Vis</div>
      <div className="button-container">
        <button className="app-button" onClick={props.insertionSort}>
          Insertion sort
        </button>
        <button className="app-button" onClick={props.mergeSort}>
          Merge sort
        </button>
        <button className="app-button" onClick={props.quickSort}>
          Quick sort
        </button>
        <button
          className="app-button"
          id="new-array-button"
          onClick={props.displayArray}
        >
          New array
        </button>
      </div>
    </div>
  );
}

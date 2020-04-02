import React, { useState } from "react";

function DisplayTextLeft() {
  const [text, setText] = useState("");

  const quick = e => {
    setText(
      "Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value."
    );
  };
  const merge = e => {
    setText(
      "Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945."
    );
  };
  const insertion = e => {
    setText(
      "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."
    );
  };
  return (
    <>
      <div className="text-container">
        This app was built to help visualise the different sorting algorythms
        and how they work.
        <span> Click on the buttons below the array to sort it using</span>{" "}
        <span onClick={quick}> quick sort,</span>
        <span onClick={merge}> merge sort</span>
        <span onClick={insertion}> or insertion sort</span>
        <div></div>
        <div>{text}</div>
        <div>
          <ul>
            <li>
              Algorithms in Java, Parts 1-4, 3rd edition by Robert Sedgewick.
              Addison Wesley, 2003.
            </li>
            <li>
              Quicksort is Optimal by Robert Sedgewick and Jon Bentley,
              Knuthfest, Stanford University, January, 2002.
            </li>
            <li>
              Sorting Out Sorting, Ronald M. Baecker with the assistance of
              David Sherman, 30 minute color sound film, Dynamic Graphics
              Project, University of Toronto, 1981. Excerpted and reprinted in
              SIGGRAPH Video Review 7, 1983. Distributed by Morgan Kaufmann,
              Publishers. Excerpt.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DisplayTextLeft;

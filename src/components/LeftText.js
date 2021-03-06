import React, { useState } from "react";

function DisplayTextLeft() {
  const [text, setText] = useState([{ text: "", runTime: "" }]);

  const quick = (e) => {
    setText([
      {
        text:
          "Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value.",
        runtimeBest: "Best: n log n",
        runtimeAv: "Average: n log n",
        runtimeWorst: "Worst: n squared",
      },
    ]);
  };
  const merge = (e) => {
    setText([
      {
        text:
          "Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.",
        runtimeBest: "Best: n log n",
        runtimeAv: "Average: n log n",
        runtimeWorst: "Worst: n log n",
      },
    ]);
  };
  const insertion = (e) => {
    setText([
      {
        text:
          "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort or merge sort.",
        runtimeBest: "Best: n ",
        runtimeAv: "Average: n squared",
        runtimeWorst: "Worst: n squared",
      },
    ]);
  };
  return (
    <>
      <div className="text-container">
        <div className="text-para-container">
          <div className="text-title">Sort Vis</div>
          This app was built to help visualise the different sorting algorythms
          and how they work.
          <span> Click on the buttons above to sort the array using</span>{" "}
          <span className="text-link" onClick={quick}>
            {" "}
            Quick sort,
          </span>
          <span className="text-link" onClick={merge}>
            {" "}
            Merge sort
          </span>{" "}
          or
          <span className="text-link" onClick={insertion}>
            {" "}
            Insertion sort.
          </span>
          <div className="text-algo-description">
            {text.map((item) => item.text)}
            {text.map((item) => (
              <ul className="text-performance">
                <li>{item.runtimeBest}</li>
                <li>{item.runtimeAv}</li>
                <li>{item.runtimeWorst}</li>
              </ul>
            ))}
          </div>
        </div>
        <div className="text-references-container">
          <ul>
            <li>
              <a
                href="https://www.cs.princeton.edu/~rs/talks/QuicksortIsOptimal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Quicksort is Optimal
              </a>{" "}
              by Robert Sedgewick and Jon Bentley, Knuthfest, Stanford
              University, January, 2002.
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=SJwEwA5gOkM"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link"
              >
                Sorting Out Sorting,
              </a>{" "}
              Ronald M. Baecker with the assistance of David Sherman, 30 minute
              color sound film, Dynamic Graphics Project, University of Toronto,
              1981. Excerpted and reprinted in SIGGRAPH Video Review 7, 1983.
              Distributed by Morgan Kaufmann, Publishers. Excerpt.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default DisplayTextLeft;

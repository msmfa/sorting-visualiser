import React, { useState } from "react";

function DisplayTextLeft() {
  const [text, setText] = useState([
    {
      title: "Title",
      para:
        "This app was built to help visualise the different sorting algorythms and how they work. ",
      paraTwo: "Click on the buttons below the array to sort it using",
      quickLink: "Quick sort",
      insertionLink: "Insertion sort",
      mergeLink: "Merge sort"
    }
  ]);
  const quickSortText = {
    quick:
      "Quicksort is a divide and conquer algorithm in the style of merge sort. The basic idea is to find a “pivot” item in the array to compare all other items against, then shift items such that all of the items before the pivot are less than the pivot value and all the items after the pivot are greater than the pivot value.",
    merge:
      "Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.",
    insertion:
      "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort."
  };

  const quickSort = e => {
    setText([{ para: quickSortText.quick }]);
  };
  const mergeSort = e => {
    setText([{ para: quickSortText.merge }]);
  };
  const insertionSort = e => {
    setText([{ para: quickSortText.insertion }]);
  };
  return (
    <>
      <p>
        {text.map(item => (
          <div>
            <p>{item.para}</p>
            <p>
              {item.paraTwo}{" "}
              <span className="text-quick-link" onClick={quickSort}>
                {item.quickLink}
                {", "}
              </span>
              <span className="text-quick-link" onClick={insertionSort}>
                {item.insertionLink}
                {" or "}
              </span>
              <span className="text-quick-link" onClick={mergeSort}>
                {item.mergeLink}{" "}
              </span>
            </p>
          </div>
        ))}{" "}
      </p>
    </>
  );
}

export default DisplayTextLeft;

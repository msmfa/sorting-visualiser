import React from "react";
import { v4 as uuidv4 } from "uuid";
import { arrayLength } from "../App";

export function DisplayArrayBars(props) {
  return (
    <div className="array-container" ref={props.containerRef}>
      {props.arr.map((bar) => (
        <div
          className="array-bar"
          style={{
            height: `${bar}vmin`,
            width: `${100 / arrayLength}vw`,
          }}
          key={uuidv4()}
        ></div>
      ))}
    </div>
  );
}

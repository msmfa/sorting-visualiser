import React from "react";
import DisplayTextLeft from "./components/LeftText";
import "./App.css";
import "./css/Buttons.css";
import "./styles/LeftText.css";
import { DisplayArray } from "./components/DisplayArray";

export const arrayLength = 100;
export const minNumb = 5;
export const maxNum = 80;
export const timeDelay = 5;
export const sortingColour = "green";
export const sortingCompleteColour = "green";

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

export default App;

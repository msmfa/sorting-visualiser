import React, { Component } from "react";
import "./App.css";

function App() {
  return (
    <>
      <RandomArray />
    </>
  );
}

class RandomArray extends Component {
  state = { array: [] };

  componentDidMount() {
    this.ArrayRandom();
  }
  ArrayRandom = () => {
    let array = [];
    for (let i = 0; i < 100; i++) {
      array.push(RandomInt(1, 200));
    }
    this.setState({ array });
  };

  OnSubmit = e =>
    this.setState({ array: this.state.array.sort((a, b) => a - b) });

  render() {
    const array = this.state.array;

    return (
      <>
        <div className="array-container">
          {array.map((number, index) => (
            <div
              className="bars"
              key={index}
              style={{ height: `${number}px` }}
            ></div>
          ))}
        </div>
        <button onClick={this.ArrayRandom}>Generate Random Array</button>
        <button onClick={this.OnSubmit}>Sort Array</button>
      </>
    );
  }
}

function RandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;

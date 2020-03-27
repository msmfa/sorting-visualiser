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
    for (let i = 0; i <= 90; i++) {
      array.push(i);
    }
    this.setState({ array });
  };

  render() {
    const array = this.state.array;

    return (
      <>
        <div className="container-array">
          {array.map((number, index) => (
            <div
              className="bars"
              key={index}
              style={{ height: `${number}px` }}
            ></div>
          ))}
        </div>
      </>
    );
  }
}

export default App;

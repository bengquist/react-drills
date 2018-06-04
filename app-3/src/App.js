import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      vehicles: ["truck", "van", "car", "bike"]
    };
  }

  render() {
    let list = this.state.vehicles
      .filter(val => {
        return val.includes(this.state.input);
      })
      .map((val, i) => {
        return <h2 key={i}>{val}</h2>;
      });

    return (
      <div className="center">
        <input
          onChange={event => this.setState({ input: event.target.value })}
        />
        {list}
      </div>
    );
  }
}

export default App;

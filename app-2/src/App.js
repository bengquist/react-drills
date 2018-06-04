import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      vehicles: ["truck", "van", "car", "bike"]
    };
  }

  render() {
    let list = this.state.vehicles.map((val, i) => {
      return <h2 key={i}>{val}</h2>;
    });

    return <div className="info">{list}</div>;
  }
}

export default App;

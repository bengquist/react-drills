import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: ""
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }

  inputChangeHandler(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div>
        <input className="input-center" onChange={this.inputChangeHandler} />
        <p className="text-center">{this.state.input}</p>
      </div>
    );
  }
}

export default App;

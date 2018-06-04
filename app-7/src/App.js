import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import List from "./components/List/List";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: []
    };

    this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  addTaskHandler(task) {
    this.setState({ list: [...this.state.list, task] });
  }

  render() {
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <NewTask add={this.addTaskHandler} />
        <List tasks={this.state.list} />
      </div>
    );
  }
}

export default App;

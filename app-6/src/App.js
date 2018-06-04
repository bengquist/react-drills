import React, { Component } from "react";
import "./App.css";
import ToDo from "./components/ToDo/ToDo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: "",
      list: []
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  inputHandler(input) {
    this.setState({ input: input });
  }

  handleAddTask(val) {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
  }

  render() {
    let newList = this.state.list.map((val, i) => {
      return <ToDo key={i} task={val} />;
    });

    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={event => this.inputHandler(event.target.value)}
        />
        <button onClick={this.handleAddTask}>Add</button>

        {newList}
      </div>
    );
  }
}

export default App;

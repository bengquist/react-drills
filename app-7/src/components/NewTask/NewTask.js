import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };

    this.addItem = this.addItem.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  inputHandler(input) {
    this.setState({ input: input });
  }

  addItem() {
    this.props.add(this.state.input);
    this.setState({ input: "" });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.input}
          placeholder="Enter new task"
          onChange={event => this.inputHandler(event.target.value)}
        />
        <button onClick={this.addItem}>Add</button>
      </div>
    );
  }
}

export default NewTask;

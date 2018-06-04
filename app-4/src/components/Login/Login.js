import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.alertUser = this.alertUser.bind(this);
  }

  alertUser() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  render() {
    return (
      <div className="center">
        <input
          onChange={event => this.setState({ username: event.target.value })}
        />
        <input
          onChange={event => this.setState({ password: event.target.value })}
        />
        <button onClick={this.alertUser}>Login</button>
      </div>
    );
  }
}

export default Login;

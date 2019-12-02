import React, { Component } from "react";

class AdminLogin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAdminLogin = e => {
    e.preventDefault();
    const adminCredentials = {
      adminname: this.state.username,
      email: this.state.email,
      password: this.state.password
    };
    fetch("admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(adminCredentials)
    })
      .then(res => res.json())
      .then(this.props.history.push("/admindashboard"));
  };
  render() {
    return (
      <div className="wrapper text-center">
        <h1 className="heading">Admin-Login</h1>
        <div>
          {/* <input
            className="input"
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={this.handleChange}
            value={this.state.username}
          /> */}
          <br />

          <input
            className="input"
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <br />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <br />

          <button className="button" onClick={this.handleAdminLogin}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default AdminLogin;

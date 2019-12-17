import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../../redux/store/store";
import { adminLogin } from "../../redux/actions/adminAction";
import validator from "validator";
import Loader from "../loader/loader";
class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  cb = () => {
    this.props.history.push("/admin/feed");
  };

  handleAdminLogin = e => {
    e.preventDefault();
    const adminCredentials = {
      email: this.state.email,
      password: this.state.password
    };
    if (!adminCredentials.email || !adminCredentials.password) {
      return alert("Email and password are must.");
    }
    if (!validator.isEmail(adminCredentials.email)) {
      return alert("Invalid email.");
    }
    if (adminCredentials.password.length < 6) {
      return alert("Password must be atleast 6 characters.");
    }

    this.props.dispatch(adminLogin(adminCredentials, this.cb));
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="wrapper text-center">
        {store.getState().adminReducer.isAdminLoggedIn ? <Loader /> : this.cb}

        <h1 className="heading">Admin-Login</h1>
        <div>
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Enter email"
            onChange={this.handleChange}
            value={email}
          />
          <br />

          <input
            className="input"
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={this.handleChange}
            value={password}
          />
          <br />

          <button
            className="button"
            type="submit"
            onClick={this.handleAdminLogin}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps)(AdminLogin);

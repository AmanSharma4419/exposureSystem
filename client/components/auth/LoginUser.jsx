import React, { Component } from "react";
import { connect } from "react-redux";
import validator from "validator";
import { studentLogin } from "../../redux/actions/studentAction";

class LoginStudent extends Component {
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
  cb = status => {
    if (status == true) {
      const username = this.props.studentReducer.studentData.student.username;
      this.props.history.push(`dashboard/${username}`);
    } else if (status == false) {
      this.props.history.push("/await-approval");
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      return alert("Email and password are must.");
    }
    if (!validator.isEmail(email)) {
      return alert("Invalid email.");
    }
    if (password.length < 6) {
      return alert("Password must be atleast 6 characters");
    }
    this.props.studentLogin(this.state, this.cb);
  };

  render() {
    const { email, password } = this.state;
    return (
      // <section className="columns">
      //   <div className="container flex-center is-grouped">
      //     <div className="notification">
      //       <h2>Login</h2>
      //       <div className="control">
      //         <input
      //           className="input"
      //           type="email"
      //           name="email"
      //           placeholder="Enter email"
      //           onChange={this.handleChange}
      //           value={this.state.email}
      //         />
      //         <br />
      //         <input
      //           className="input"
      //           type="password"
      //           name="password"
      //           placeholder="Enter password"
      //           onChange={this.handleChange}
      //           value={this.state.password}
      //         />
      //         <br />
      //         <button
      //           className="button is-primary "
      //           type="submit"
      //           onClick={this.handleSubmit}
      //         >
      //           Submit
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </section>

      <section className="columns">
        <div className="container flex-center is-grouped">
          <div className="notification">
            <h2>Login</h2>
            <div className="control">
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Enter password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <button
                className="button is-primary  "
                type="submit"
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, { studentLogin })(LoginStudent);

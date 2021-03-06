/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {username, email, isActive, isInCampus, isAdmin, createdAt } = this.props.student;
    return (
      <div className="student-card">
        <div className="card-heading flex-center">{username}</div>
        <div className="card-details">
          <div>
            <div className="student-pfp" />
          </div>
          <div>
            Details:
            {email}
            {isInCampus}
            {isActive}
            {isAdmin}
          </div>
        </div>
        <div className="card-footer">
Created at:
          {createdAt}
          {' '}
        </div>
      </div>
    );
  }
}

export default Student;

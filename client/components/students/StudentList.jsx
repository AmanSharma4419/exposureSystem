import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminSidebar from '../adminDashboard/AdminSidebar';
import { studentList } from '../../redux/actions/studentAction';

import StudentCard from './StudentCard';

class StudentList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.studentList();
  }

  render() {
    const studentList = this.props.studentListReducer.students.users;
    console.log('inside student list component');
    return (
      <div className="wrapper grid-dashboard">
        <AdminSidebar />
        <div>
          <h3 className="flex-center" style={{ color: 'rgb(59, 57, 57)' }}>
            Students
          </h3>
          <div className="grid-col-3">
            {studentList &&
              studentList.map((student, i) => {
                return <StudentCard key={i} student={student} />;
              })}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps, { studentList })(StudentList);

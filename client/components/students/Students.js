import React, { Component } from "react";
import AdminSidebar from "../adminDashboard/AdminSidebar";
import StudentCard from "./StudentCard";

class Students extends Component {
    render() {
        return (
            <div className="wrapper grid-dashboard">
                <AdminSidebar />
                <div>
                    <h3 className="flex-center" style={{ color: "rgb(59, 57, 57)" }}>Students</h3>
                    <div className="grid-col-3">
                        <StudentCard />
                        <StudentCard />
                        <StudentCard />
                    </div>

                </div>
            </div>
        )
    }
}

export default Students;
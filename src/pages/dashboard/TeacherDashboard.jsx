import React from "react";
import "./dashboard.styles.scss";
import TeacherSidebar from "../../components/Sidebar/TeacherSidebar";
import NavbarComponent from "../../components/NavbarComponent";
// import DashNavbar from "../../components/DashNavbar/dashnavbar";
import SideBar from "../../components/Sidebar/Sidebar";

function TeacherDashboard() {
  return (
    <>
      {/* <DashNavbar /> */}
      <TeacherSidebar />
    </>
  );
}

export default TeacherDashboard;

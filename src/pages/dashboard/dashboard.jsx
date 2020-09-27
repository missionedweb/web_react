import React from "react";
import "./dashboard.styles.scss";
import SideBar from "../../components/Sidebar/Sidebar";
import NavbarComponent from "../../components/NavbarComponent";
import DashNavbar from "../../components/DashNavbar/dashnavbar";

function Dashboard() {
  return (
    <>
      <DashNavbar />
      <SideBar />
    </>
  );
}

export default Dashboard;

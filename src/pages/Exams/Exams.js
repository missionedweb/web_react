import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import GetTheApp from "../../components/GetTheApp";
import Counter from "../../components/Counter";
import Footer from "../../components/Footer";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import ExamInfo from "../../components/ExamInfo/ExamInfo";
import "./exams.styles.css";
import Tiles from "../../components/ExamInfo/Tiles";

//Main Component for Exams Page, nests Side Navigation & Information containing articles
export default function Exams({ exam }) {
  return (
    <div>
      <NavbarComponent />
      <div style={{marginTop: '10vh'}}>
        <Tiles />
        <div className="main">
          <SidebarNav />
          <ExamInfo exam={exam} />
        </div>
      </div>
      <GetTheApp />
      <Counter />
      <Footer />
    </div>
  );
}

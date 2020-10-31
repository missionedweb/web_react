import React from "react";
import NavbarComponent from "../../components/NavbarComponent";
import GetTheApp from "../../components/GetTheApp";
import Counter from "../../components/Counter";
import Footer from "../../components/Footer";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import ExamInfo from "../../components/ExamInfo/ExamInfo";
import "./exams.styles.css";
import Tiles from "../../components/ExamInfo/Tiles";
import { useParams } from 'react-router-dom'

//Main Component for Exams Page, nests Side Navigation & Information containing articles
export default function Exams() {
  const {exam} = useParams()
  return (
    <div>
      <NavbarComponent />
      <div>
        <Tiles exam={exam}/>
        <div className="container">
          <div className="row">
            <div className="col-md-3 cc">
              <SidebarNav />
            </div>
            <div className="col-md-9">
              <ExamInfo exam={exam} />
            </div>
          </div>
        </div>
      </div>

      <GetTheApp />
      <Counter />
      <Footer />
    </div>
  );
}

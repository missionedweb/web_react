import React from "react";
import { Card } from "ui-neumorphism";
import { Button } from "ui-neumorphism";
import "./snav.css";
//Side Navigation for Exams Page
export default function SidebarNav() {
  return (
    <div>
      <Card style={{ background: "white" }}>
        <nav>
          <ul>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#brief">
                Brief
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#eligibility">
                Eligibility Criteria
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#pattern">
                Exam Pattern
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#imp_dates">
                Important Dates
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#application_process">
                Application Process
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#syllabus">
                Syllabus
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#cutoff">
                Cut-off Scores
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#study_resources">
                Study Resources
              </a>
            </li>
            <hr />
            <li className="ml-5">
              <a className="tco" href="#courses">
                Popular Courses
              </a>
            </li>
            <hr />
          </ul>
        </nav>
      </Card>

      <Button block className="ntb">
        Get Advice
      </Button>
      <br />
      <br />
    </div>
  );
}

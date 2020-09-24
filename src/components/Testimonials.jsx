

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import team1 from "../Images/team1.png";
import team2 from "../Images/team2.png";
import team3 from "../Images/team3.png";


export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={team1} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Piya </h3>
            
            <h4>Student</h4>
            <p>
              “I am very happy to be a part of MissionEd. 
              I thank MissionEd for helping me secure high grades.” 
            </p>
          </div>
        </div>

        <div>
          <img src={team2} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Samiksha</h3>
            <h4>Parent</h4>
            <p>
               “It has been an absolutely wonderful experience for all of us! 
               His teacher pays great attention to every child in the 
               class and encourages them to speak. The classes are more of 
               interactive sessions where Reyan feels very comfortable to express himself.” 
            </p>
          </div>
        </div>

        <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Neha</h3>
            <h4>Student</h4>
            <p>
              “Beautifully explained. Simple language & taught in easy way.”
            </p>
          </div>
        </div>

        <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Soham</h3>
            <h4>Student</h4>
            <p>
                  “MissionEd  has been an excellent experience for me, 
                  The constant support and 
                  guidance from the teachers have helped me develop confidence 
                  to do my best. The teachers are 
                  very friendly, approachable and always available for any sort of help. 
                  Their unique style of teaching and explaining the subject, 
                  makes understanding any concept simple and easy.”
            </p>
          </div>
        </div>

        <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Susan</h3>
            <h4>Student</h4>
            <p>
                  “Overall, I thought the course was great. 
                  I did get tons of useful experience from the 
                  course and the instructor was great.” 
            </p>
          </div>
        </div>

        <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Amyra</h3>
            <h4>Student</h4>
            <p>
                  “One thing that impressed me about Online-Learning 
                  is if I have a question , 
                  there is always a quick response. This is critical when distance is involved. 
                  This helped getting me through difficult issues and keeping in touch with the class.” 
            </p>
          </div>
        </div>

         <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Sonam</h3>
            <h4>Student</h4>
            <p>
                  “Excellent content and assignments that build 
                  on your knowledge, reinforce, and then expand.”            </p>
          </div>
        </div>

        <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Rahul</h3>
            <h4>Student</h4>
            <p>
              “Course materials were good, the mentoring approach was good.”   
          </p>
          </div>
        </div>
      </Carousel>
    );
  }
}

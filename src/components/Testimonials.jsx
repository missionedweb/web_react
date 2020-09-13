

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
            <h3 className="mb-1" style={{fontSize:"30px"}}>Diana </h3>
            
            <h4>Designer</h4>
            <p>
              I like all the test and questions. They are very intresting to solve<br></br>
          and solve and important in my subjects and studies also.
            </p>
          </div>
        </div>

        <div>
          <img src={team2} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>Daniel K</h3>
            <h4>Designer</h4>
            <p>
              I like all the test and questions. They are very intresting to solve<br></br>
          and solve and important in my subjects and studies also.
            </p>
          </div>
        </div>

        <div>
          <img src={team3} />
          <div className="myCarousel">
          <br></br>
            <h3 className="mb-1" style={{fontSize:"30px"}}>John</h3>
            <h4>Designer</h4>
            <p>
              I like all the test and questions. They are very intresting to solve<br></br>
          and solve and important in my subjects and studies also.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}

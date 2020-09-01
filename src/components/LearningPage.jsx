import React from "react";
import Left from "../Images/left.png";
import Right from "../Images/Right.png";
import AOS from "aos";


AOS.init();

const LearningPage = () => {
  return (
    <div>
      <div>
        <div className="text-center teach"
        
          >
          {" "}
          <p 
          data-aos="zoom-in-down" data-aos-duration="1000"
          >
          
          FREE <span>Coding</span>  Certification | (Age 6-18)  <i style ={{ color:"pink", marginLeft: "20px"}} class="fas fa-arrow-right"></i>
          <button type="button" className="btn  btn-lg" dataToggle="modal" dataTarget="#myModal" 
          style={{ marginLeft: "20px",  background:"#FB8F1D", color:"white"}} >Open Modal</button>

<div className="modal fade" id="myModal" role="dialog">
  <div className="modal-dialog">
  
    
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" dataDismiss="modal">&times;</button>
        <h4 className="modal-title">Modal Header</h4>
      </div>
      <div className="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" dataDismiss="modal">Close</button>
      </div>
    </div>
    
  </div>
</div>

 </p>{" "}
          
        </div>
        {/* Learning Page 1  */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <img
          className="img-section-left"
          data-aos="fade-right"
          data-aos-duration="1500"
          src={Left}
          alt=""
          style={{ marginTop: "20px", width: "42%" }}
          
        />
        <div
          className="learning-page "
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p className="learning-heading">A new way to explore the learning</p>
          <h6 className="learning-txt">
            {" "}
            The environment of learning we provide is nurtured by the experts.
            The guidance that
            <br /> you are seeking is from the IITians. They will provide you
            the enhanced way of teaching <br /> with the pinch of fun and
            enthusiasm. You will get the quality as well as playful atmosphere.
          </h6>
          <br />
          <br />
          <div
            className="col-md-6"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature1">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>

          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        {/* Learning Page 2  */}
        <img
          className="img-section-right"
          data-aos="fade-left" data-aos-duration="2500"
          src={Right}
          alt=""
          style={{ marginTop: "20px", width: "45%" }}
        />
        <div
          className="learning-page-2"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p className="learning-heading-2">Let’s fall in love with learning</p>
          <h6 className="learning-txt-2">
            Studying is hard? But it doesn’t have to be that way. At MissionEd
            we
            <br /> believe in making learning fun.With our specially crafted
            notes and <br /> assignments every child i bound to fall in love
            with learning.
          </h6>
          <br />
          <br />
          <div
            className="col-md-6"
            data-aos="zoom-in-up"
            data-aos-duration="1500"
          >
            {" "}
            <a href="/feature2">
            <button className="border-0 learn-more-btn">Learn More</button>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;

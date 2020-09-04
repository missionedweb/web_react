// import React, { useState } from "react";
// import team1 from "../Images/team1.png";
// import Carousel from "react-bootstrap/Carousel";
// import AOS from "aos";
// AOS.init();
// const Testimonials = () => {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       {/* <ul id="testim-dots" className="dots">
//         <li className="dot active" />
//         <li className="dot" />
//         <li className="dot" />
//         <li className="dot" />
//       </ul> */}
//       <Carousel.Item>
//         <div className="img">
//           <img
//             src={team1}
//             alt=""
//             className="d-block mx-auto img-fluid"
//             data-aos="zoom-in-down"
//             data-aos-duration={1500}
//           />
//         </div>
//         <h2 className="text-dark text-center font-weight-bold">
//           Ghanshyam Matlane
//         </h2>
//         <p className="text-dark text-center pb-5">
//           I like all the test and questions. They are very intresting to solve<br></br>
//           and solve and important in my subjects and studies also.
//         </p>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className="img">
//           <img
//             src={team1}
//             alt=""
//             className="d-block mx-auto img-fluid"
//             data-aos="zoom-in-down"
//             data-aos-duration={1500}
//           />
//         </div>
//         <h2 className="text-dark text-center font-weight-bold">
//           Ghanshyam Matlane
//         </h2>
//         <p className="text-dark text-center pb-5">
//           I like all the test and questions. They are very intresting to solve<br></br>
//           and solve and important in my subjects and studies also.
//         </p>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className="img">
//           <img
//             src={team1}
//             alt=""
//             className="d-block mx-auto img-fluid"
//             data-aos="zoom-in-down"
//             data-aos-duration={1500}
//           />
//         </div>
//         <h2 className="text-dark text-center font-weight-bold">
//           Ghanshyam Matlane
//         </h2>
//         <p className="text-dark text-center pb-5">
//           I like all the test and questions. They are very intresting to solve<br></br>
//           and solve and important in my subjects and studies also.
//         </p>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div className="img">
//           <img
//             src={team1}
//             alt=""
//             className="d-block mx-auto img-fluid"
//             data-aos="zoom-in-down"
//             data-aos-duration={1500}
//           />
//         </div>
//         <h2 className="text-dark text-center font-weight-bold">
//           Ghanshyam Matlane
//         </h2>
//         <p className="text-dark text-center pb-5">
//           MissionEd is very good Ed-Tech startup. The teachers are very friendly<br></br>
//           which makes the class very interactive.
//         </p>
//       </Carousel.Item>
//     </Carousel>
//     // <div>
//     //   <div className="wrapper">
//     //     <h1 className="main">
//     //       <b>Testimonials</b>
//     //     </h1>
//     //     <br />
//     //     <div className="container-fluid">
//     //       <section id="testim" className="testim">
//     //         <div className="testim-cover">
//     //           <div className="wrap">
//     //             <span
//     //               id="right-arrow"
//     //               className="arrow right fa fa-chevron-right"
//     //             />
//     //             <span
//     //               id="left-arrow"
//     //               className="arrow left fa fa-chevron-left "
//     //             />
//     //             <ul id="testim-dots" className="dots">
//     //               <li className="dot active" />
//     //               {/*
//     //                */}
//     //               <li className="dot" />
//     //               {/*
//     //                */}
//     //               <li className="dot" />
//     //               {/*
//     //                */}
//     //               <li className="dot" />
//     //               {/*
//     //                */}
//     //               <li className="dot" />
//     //             </ul>
//     //             <div id="testim-content" className="cont">
//     //               <div className="active">
//     //                 <div className="img">
//     //                   <img src={team1} alt="" />
//     //                 </div>
//     //                 <h2>Ghanshyam Matlane</h2>
//     //                 <p>
//     //                   I like all the test and questions. They are very
//     //                   intresting to solve and solve and important in my subjects
//     //                   and studies also.
//     //                 </p>
//     //               </div>
//     //               <div>
//     //                 <div className="img">
//     //                   <img src={team1} alt="" />
//     //                 </div>
//     //                 <h2>Diyanshee Pataiya</h2>
//     //                 <p>
//     //                   It is very nice experience joining MissionEd. I am getting
//     //                   notes of every chapter on time and the live session we are
//     //                   doing are also very knowledgeable. Not just about studies
//     //                   but i got to know many new things about competitive exams.
//     //                 </p>
//     //               </div>
//     //               <div>
//     //                 <div className="img">
//     //                   <img src={team1} alt="" />
//     //                 </div>
//     //                 <h2>Parthiva Sinha</h2>
//     //                 <p>
//     //                   The question provided to me are very helpful. The detailed
//     //                   answer sheet of questions with one to one live session
//     //                   helps me to understand the concepts with ease.
//     //                 </p>
//     //               </div>
//     //               <div>
//     //                 <div className="img">
//     //                   <img src={team1} alt="" />
//     //                 </div>
//     //                 <h2>Sharvni Bende</h2>
//     //                 <p>
//     //                   I'm really satisfied. The test series are very helpful.
//     //                   The questions are relevant and very intresting to solve.
//     //                   They were of great help in my exams and tests. I recommend
//     //                   MissionEd to my friends as well.
//     //                 </p>
//     //               </div>
//     //               <div>
//     //                 <div className="img">
//     //                   <img src={team1} alt="" />
//     //                 </div>
//     //                 <h2>Arya Karati</h2>
//     //                 <p>
//     //                   MissionEd is very good Ed-Tech startup. The teachers are
//     //                   very friendly which makes the class very interactive.
//     //                 </p>
//     //               </div>
//     //             </div>
//     //           </div>
//     //         </div>
//     //       </section>
//     //     </div>
//     //     <script></script>
//     //   </div>
//     // </div>
//   );
// };

// export default Testimonials;

import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
//import './components/css/Testimonials.css';

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
          <img src="src/Images/team2.png" />
          <div className="myCarousel">
            <h3>Diana </h3>
            <h4>Designer</h4>
            <p>
              I like all the test and questions. They are very intresting to solve<br></br>
          and solve and important in my subjects and studies also.
            </p>
          </div>
        </div>

        <div>
          <img src="src/Images/team1.png" />
          <div className="myCarousel">
            <h3>Daniel K</h3>
            <h4>Designer</h4>
            <p>
              I like all the test and questions. They are very intresting to solve<br></br>
          and solve and important in my subjects and studies also.
            </p>
          </div>
        </div>

        <div>
          <img src="src/Images/team3.png" />
          <div className="myCarousel">
            <h3>John</h3>
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

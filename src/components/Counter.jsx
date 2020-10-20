import React from "react";
import CountUp from 'react-countup';
import cont1 from "../Images/cont1.png";
import cont2 from "../Images/cont2.png";
import cont3 from "../Images/cont3.png";
import cont4 from "../Images/cont4.png";
import AOS from "aos";
AOS.init();

const Counter = () => {
  return (
    <div>
      <section className="counters text-center">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3"
              data-aos="zoom-out"
              data-aos-duration="1000"
              id="counter"
            >
              <img src={cont1} style={{ width: "70%" }} alt="" />
              <div className="counter font-weight-bold">
              <CountUp end={5000} />
              </div>
              <h3 className="tx7">Registered Students</h3>
            </div>
            <div
              className="col-md-3"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <img src={cont2} style={{ width: "70%" }} alt="" />
              <div className="counter font-weight-bold">
              <CountUp end={1500} />
              </div>
              <h3 className="tx7">
                Students has been helped to achieve their dreams
              </h3>
            </div>
            <div
              className="col-md-3"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <img src={cont3} style={{ width: "70%" }} alt="" />
              <div className="counter font-weight-bold">
              <CountUp end={5000} />
              </div>
              <h3 className="tx7">
                More than 10,000 people visits our site monthly
              </h3>
            </div>
            <div
              className="col-md-3"
              data-aos="zoom-out"
              data-aos-duration="1000"
            >
              <img src={cont4} style={{ width: "70%" }} alt="" />
              <div className="counter font-weight-bold">
              <CountUp end={10} />
              </div>
              <h3 className="tx7">
                Ranked among the top 10 growing online learning startups.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Counter;

import React from "react";
import NavbarComponent from "./NavbarComponent";
import Header from "./Header/Header";
import LearningPage from "./Learning/LearningPage";
import Features from "./Features";
import Testimonials from "./Testimonials";
import GetTheApp from "./GetTheApp";
import Counter from "./Counter";
import Footer from "./Footer";

import "./css/Navbar.scss";
import "./css/Footer.scss";
import "./css/Testimonials.scss";
import "./css/LearningPage1.scss";
import "./css/LearningPage2.scss";
import "./css/Header.scss";
import "./css/WhyMissionEdWorks.scss";
import "./css/GetTheApp.scss";
import "./css/Counselling.scss";
import "./css/Counter.scss";
import "./css/MediaQueries.scss";

function AllImports() {
  return (
    <div>
      <header>
      <NavbarComponent />
      </header>
      <Header />
      <LearningPage />
      <Features />
      <Testimonials />
      <Counter />
      <GetTheApp />
      <Footer />
    </div>
  );
}

export default AllImports;

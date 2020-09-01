import React from "react";
import NavbarComponent from "./NavbarComponent";
import Header from "./Header";
import LearningPage from "./LearningPage";
import Features from "./Features";
import Testimonials from "./Testimonials";
import GetTheApp from "./GetTheApp";
import Counter from "./Counter";
import Footer from "./Footer";


function AllImports() {
  return (
    <div>
      <NavbarComponent />
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

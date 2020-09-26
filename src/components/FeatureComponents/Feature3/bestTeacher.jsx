import React from "react";
import styled from "styled-components";
import img01 from "./Images/img01.png";
import img02 from "./Images/img02.png";
import img03 from "./Images/img03.png";
import p5 from "./Images/p5.svg";
import p6 from "./Images/p6.svg";
import live_inter from "./Images/live_inter.svg";
import per_learn from "./Images/per_learn.svg";
import trust_con from "./Images/trust_con.svg";
import engg_ass from "./Images/engg_ass.svg";
import convi_safe from "./Images/convi_safe.svg";
import phone from "./Images/phone.svg";
import NavbarComponent from "../../NavbarComponent";
import GetTheApp from "../../GetTheApp";
import Footer from "../../Footer";

const bestTeacher=()=>{
      return (
        <div>
          <header>
      <NavbarComponent />
      </header>
        <Wrapper>
        <div className="jumbotron text-uppercase">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="live" style = {{ fontSize : "33px" }}> Expert Teachers</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <svg viewBox="0 0 1500 100">
          {/* Symbol*/}
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="70%" dy=".35em">MEET OUR EXPERTS !</text>
          </symbol>
          {/* Duplicate symbols*/}
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
        </svg>
        <p className=" text-center xyz main-para" style={{margin: '20px 0 50px 0'}}>The guides you need to surpass any challenge your academic life throws at you are here at your rescue 24 x 7</p>
        {/*Features*/}
        <div className="features ">
          <div className="container ">
            <div className="row">
              <div className="col-lg-4 center col-md-6 col-12 mt-5">
                <div className="card text-center h-100 border-0 " data-aos="zoom-in-up" data-aos-duration={1000}>
                  <img className="card-img-top card01 mx-auto image-1 " src={img01} alt="" />
                  <div className="card-block">
                    <h4 className="card-title ct-1">Mr. A</h4>
                    <p className="card-text ct-2">IIT Kanpur</p>
                  </div>            
                </div>
              </div>
              <br /><br />
              <div className="col-lg-4 center col-md-6 col-12 mt-5 ">
                <div className="card text-center h-100 border-0" data-aos="zoom-in-up" data-aos-duration={1300}>
                  <img className="card-img-top card01 mx-auto image-2" src={img02} alt="" />
                  <div className="card-block ">
                    <h4 className="card-title ct-1">Mr. B</h4>
                    <p className="card-text ct-2">IIT Khagarpur</p>
                  </div>            
                </div>
              </div>
              <br /><br />
              <div className="col-lg-4 center col-md-6 col-12 mt-5">
                <div className="card text-center h-100 border-0 " data-aos="zoom-in-up" data-aos-duration={1600}>
                  <img className="card-img-top card01 mx-auto image-3" src={img03} alt="" />
                  <div className="card-block ">
                    <h4 className="card-title ct-1">Mr. C</h4>
                    <p className="card-text ct-2">IIT Delhi</p>
                  </div>            
                </div>
              </div>
              <br /><br />
              <div className="col-lg-4 center col-md-6 col-12 mt-5">
                <div className="card text-center h-100 border-0 " data-aos="zoom-in-up" data-aos-duration={1900}>
                  <img className="card-img-top card01 mx-auto image-1 " src={img01} alt="" />
                  <div className="card-block">
                    <h4 className="card-title ct-1">Mr. D</h4>
                    <p className="card-text ct-2">IIT Kanpur</p>
                  </div>            
                </div>
              </div>
              <br /><br />
              <div className="col-lg-4 center col-md-6 col-12 mt-5 ">
                <div className="card text-center h-100 border-0" data-aos="zoom-in-up" data-aos-duration={2100}>
                  <img className="card-img-top card01 mx-auto image-5" src={img02} alt="" />
                  <div className="card-block ">
                    <h4 className="card-title ct-1">Mr. D</h4>
                    <p className="card-text ct-2">IIT Khagarpur</p>
                  </div>            
                </div>
              </div>
              <br /><br />
              <div className="col-lg-4 center col-md-6 col-12 mt-5 ">
                <div className="card text-center h-100 border-0 " data-aos="zoom-in-up" data-aos-duration={2400}>
                  <img className="card-img-top card01 mx-auto image-3" src={img03} alt="" />
                  <div className="card-block ">
                    <h4 className="card-title ct-1">Mr. E</h4>
                    <p className="card-text ct-2">IIT Delhi</p>
                  </div>            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      
      <div className="container-fluid banner" style={{backgroundColor: '#FFFBF0'}}>
        <div className="container">
          <div className="row" data-aos="fade-right" data-aos-duration={900}>
            <div className="col-md-4 col-12" style={{margin: 'auto'}}>
              <h3 className=" above">Study from your home with the best Educators </h3>
              <br />
              <p className=" abovep">MissionEd makes it possible for you to get your syllabus done and prepare for All India Level Exams with the help of Educators from Top-Notch Premier Institutes while staying at your home in the time of this pandemic </p>
            </div>
            <div className="col-md-8 col-12 women2 ">
              <img src={p5} alt="picture" />
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />
      <div className="container banner">
        <div className="row" data-aos="fade-left" data-aos-duration={900}>
          <div className="col-md-8 col-12 women3" style={{margin: 'auto'}}>
            <img src={p6} alt="picture" /></div>
          <div className="col-md-4 col-12" style={{margin: 'auto'}}>
            <h3 className=" above1">Learn Multi-tasking and prepare for upcoming challenges</h3>
            <br />
            <p className=" abovep">MissionEd isn’t all about one way Learning, students can ask for a more personalized learning experience whenever they want the need of. We teach our students multi-tasking and strategy building techniques too hence preparing them for becoming Future Leaders </p>
          </div>
        </div>
      </div>
      <br />
      <br /><br />
      <div className="card" style={{marginTop: '10%', background: 'linear-gradient(297.17deg, #FFEDBA 6.67%, #EE4D47 91.82%)', paddingBottom: '40px', height: '400px', border: 'none', boxShadow: 'none'}}>
        <br />
        <h1 style={{textAlign: 'center', color: 'black'}}>Why <span style={{color: 'aliceblue'}}>MissionEd </span>works?</h1>
        <p style={{textAlign: 'center', color: 'white'}}>The elite features of MissionEd makes it one of the No. 1 Ed-Tech platforms in India</p>
      </div>
      <div style={{marginTop: '-200px'}}>
      <div className="container">
      <div className="card-deck">
        <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4" style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={1000}>
         <a href="/feature1" style={{ textDecoration: 'none' }}>
         <a href="/feature1"> <img className="card-img-top  mx-auto image-4 " style={{paddingTop: '10px', marginTop: '50px', marginBottom: '70px'}} src={engg_ass} alt="" /></a>
          <div className="card-block ">
            <h4 className="card-title text-center card-one  ct-1" style={{marginTop:"-30px" , color: "#eb5757"}}>Engaging Assignments</h4>
          </div>
          </a>
        </div>
        <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
        <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4 " style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={1500}>
         <a href="/feature4" style={{ textDecoration: 'none' }}>
         <a href="/feature4" ><img className="card-img-top  mx-auto image-4 " style={{paddingTop: '10px', marginTop: '50px', marginBottom: '70px'}} src={live_inter} alt="" /></a>
          <div className="card-block ">
            <h4 className="card-title text-center card-two  ct-1" style={{ color: "#2f80ed"}}>Live and Interactive</h4>
          </div>
          </a>
        </div>
        <div className="w-100 d-none d-md-block d-lg-none">{/* wrap every 3 on md*/}</div>
        <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4" style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={2000}>
         <a href="/feature5" style={{ textDecoration: 'none' }}>
         <a href="/feature5"> <img className="card-img-top  mx-auto image-4 " style={{paddingTop: '30px', marginTop: '50px', marginBottom: '70px'}} src={per_learn} alt="" /></a>
          <div className="card-block ">
            <h4 className="card-title text-center  card-three  ct-1" style={{ color: "#f2c94c"}}>Personalised Learning</h4>
          </div>
          </a>
        </div>
        <div className="w-100 d-none d-sm-block d-md-none">{/* wrap every 2 on sm*/}</div>
        <div className="w-100 d-none d-lg-block d-xl-none">{/* wrap every 4 on lg*/}</div>
        <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4" style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={2500}>
          <a href="/feature6" style={{ textDecoration: 'none' }}>
          <a href="/feature6"><img className="card-img-top  mx-auto image-4 " style={{paddingTop: '30px', marginTop: '20px', marginBottom: '70px'}} src={trust_con} alt="" /></a>
          <div className="card-block ">
            <h4 className="card-title text-center card-four  ct-1">Trusted Content</h4>
          </div>
          </a>
        </div>
        <div className="card mb-4 col-lg-3 center col-md-6 col-12 mt-4 " style={{borderRadius: '30px'}} data-aos="zoom-in-up" data-aos-duration={3000}>
          <a href="/feature2" style={{ textDecoration: 'none' }}>
          <a href="/feature2"><img className="card-img-top  mx-auto image-4 " style={{paddingTop: '10px', marginTop: '50px', marginBottom: '70px'}} src={convi_safe} alt="" /></a>
          <div className="card-block ">
            <h4 className="card-title text-center card-five ct-1" style={{ color: "#6fcf97"}}>Convinent and Safe</h4>
          </div>
          </a>
        </div>
        <div className="w-100 d-none d-xl-block">{/* wrap every 5 on xl*/}</div>        
      </div>
      
    </div>
        <br />
        <br />
        <br />
      </div>
     <GetTheApp/>
     <Footer/>
        </Wrapper>
        </div>
      );
    };

export default bestTeacher;    

const Wrapper=styled.div`
body{
    font-family: 'Playfair Display', serif;
    background-image: url("Images/bg.png");
  }
  .jumbotron{
    /* padding-top: .5rem; */
    height: 200px;
    margin:0 auto;
    top: 24.41%;
    bottom: 51.17%;
    text-align: center;
    background:linear-gradient(297.17deg, #FFEDBA 6.67%, #EE4D47 91.82%);
    mix-blend-mode: normal;
    padding-top:110px;

      
    }
  
    h2{
      font-weight: 100px;
    }
    .card1{
      background-color: #ffffff;
      padding: 20px;
    }
  
  .card-deck .card-two
  {
    margin-top: -45px;
  }
  
  .card-deck .card-three
  {
    margin-top: 40px;
  }
  
  .card-deck .card-four
  {
    margin-top: 20px;
  }
  
  .card-deck .card-five
  {
    margin-top: 10px;
  }
  
  .main-title{
    color: #FA9917;
  }
  #main{
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0%;
    bottom: 0%;
    }
  #h1{
      background: linear-gradient(90deg, #FF512F 0%, #DD2476 100%);
      width: 100%;
      height: 20vh;
      position: relative;
  }
  .card{
    box-shadow: 0px 4px 10px 4px rgba(0, 0, 0, 0.1);
  }
  
  .live {
    text-align: center;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
    color: #202336;
  }
  h3{
    font-weight: bold;
  }
  h2{
      position: relative;
      font-family: 'Playfair Display', serif;
      color: black;
      font-size: 50px;
      
      text-align: center;
      vertical-align: middle;
      top: 1%;
  }
  .image-background{
    background-color: #FFFBEF;
  }
  .card01{
    width:50%;
  }
  .image-1{
    margin-top:5%;
  }
  .image-2{
   margin-top:5%;
  }
  .image-3{
    margin-top:5%;
  }
  .image-4{
    margin-top:5%;
  }
  .image-5{ 
    margin-top:5%;
  }
  .image-6{
    margin-bottom:5%;
  }
  .btn {
    background-color: DodgerBlue;
    border: none;
    color: white;
    padding: 12px 30px;
    cursor: pointer;
    font-size: 20px;
  }
  .explore-all a{
    color: #FB8F1D;
    text-decoration: none;
    font-weight: 600;
  font-size: 20px;
  
  }
  /* Darker background on mouse-over */
  .btn:hover {
    box-shadow:  2px 2px 5px black;
  }
  
  .ct-1{
    color: #FF6200;
   
    font-size: 20px;
    letter-spacing: 0.6px;
    line-height: 28px;
  }
  .ct-2{
    color: #000;
   
    font-size: 18px;
    letter-spacing: 0.45px;
    line-height: 21px;
    opacity:0.8;
    padding-bottom: 10%;
  }
  
  .banner
  {
    margin-top: 5%;
  }
  
  .live
  {
    margin-top: -35px;
  }
  
  .main-para
  {
    opacity: 0.5;
  }
  
  .abovep
  {
    text-align: justify;
    font-size: 19px;
  }
  
  .women2 img
  {
    margin-left: 150px; 
  }
  
  .women3 img
  {
    margin-left: -100px;
    width: 70%; 
  }
  
  /*flicker animation heading*/
  
  .text {
    font: 5em/1 'Playfair Display', serif;
    fill: none;
    stroke-width: 3;
    stroke-linejoin: round;
    stroke-dasharray: 70 330;
    stroke-dashoffset: 0;
    -webkit-animation: stroke 6s infinite linear;
    animation: stroke 6s infinite linear;
  }
  .text:nth-child(5n + 1) {
    stroke: #F2385A;
    -webkit-animation-delay: -1.2s;
    animation-delay: -1.2s;
  }
  .text:nth-child(5n + 2) {
    stroke: #F5A503;
    -webkit-animation-delay: -2.4s;
    animation-delay: -2.4s;
  }
  .text:nth-child(5n + 3) {
    stroke: #E9F1DF;
    -webkit-animation-delay: -3.6s;
    animation-delay: -3.6s;
  }
  .text:nth-child(5n + 4) {
    stroke: #56D9CD;
    -webkit-animation-delay: -4.8s;
    animation-delay: -4.8s;
  }
  .text:nth-child(5n + 5) {
    stroke: #3AA1BF;
    -webkit-animation-delay: -6s;
    animation-delay: -6s;
  }
  
  @-webkit-keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  @keyframes stroke {
    100% {
      stroke-dashoffset: -400;
    }
  }
  
  @media only screen and (max-width: 800px) {
    h1{
    padding-top: 10%;
    font-size: calc(2rem + 3vw);
  }
  
  #h1{
      height: 20vh;
  }
  .women2{
   display: none;
  }
  .women3{
   display: none;
  }
  
  .abc{
    display: none;
   }
   .phone{
     margin-left: 35px;
     margin-bottom: 20px;
   }
   .card{
     margin-top: 40px;
     margin-bottom: 40px;
   }
   .xyz{
     margin-bottom: -40px;
   }
  }
  
`  
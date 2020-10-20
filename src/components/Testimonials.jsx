import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import React,{Component} from 'react';  

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import team1 from "../Images/team1.png";
import team2 from "../Images/team2.png";
import team3 from "../Images/team3.png";


export class Testimonials extends Component {  
        render()  
        {      
          return (  
              <div>  
            <div class='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
            <div class="col-sm-12">      
                <center><h2 style={{color: '#ff6200'}} >500+ students improved test scores in some of the toughest exams in the world</h2>   </center>
            </div>      
            </div>  
        </div>  
        <div class='container-fluid testimonials' >   
          <OwlCarousel items={1} margin={8} autoplay ={true} >  

              
              
              
              
                        <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Piya</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>&nbsp;
            I am very happy to be a part of MissionEd. 
              I thank MissionEd for helping me secure high grades.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Samiksha</h3>
            <h4>Parent</h4>
            <p>
              <i class="fas fa-quote-left"></i>
             &nbsp; It has been an absolutely wonderful experience for all of us! 
               His teacher pays great attention to every child in the 
               class and encourages them to speak. The classes are more of 
               interactive sessions where Reyan feels very comfortable to express himself. &nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Neha</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>
              &nbsp;Beautifully explained. Simple language &amp; taught in easy way.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Soham</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>
&nbsp;MissionEd  has been an excellent experience for me, 
                  The constant support and 
                  guidance from the teachers have helped me develop confidence 
                  to do my best. The teachers are 
                  very friendly, approachable and always available for any sort of help. 
                  Their unique style of teaching and explaining the subject, 
                  makes understanding any concept simple and easy.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Susan</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>
&nbsp;Overall, I thought the course was great. 
                  I did get tons of useful experience from the 
                  course and the instructor was great.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Amyra</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>&nbsp;
One thing that impressed me about Online-Learning 
                  is if I have a question , 
                  there is always a quick response. This is critical when distance is involved. 
                  This helped getting me through difficult issues and keeping in touch with the class.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Sonam</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>
&nbsp;Excellent content and assignments that build 
                  on your knowledge, reinforce, and then expand.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              <div class="testimonial-item">

                            <img  className="testimonial-img" src= {team1} alt="cara1"/>
            <h3>Rahul</h3>
            <h4>Student</h4>
            <p>
              <i class="fas fa-quote-left"></i>
              &nbsp;Course materials were good, the mentoring approach was good.&nbsp;
              <i class="fas fa-quote-right"></i>
            </p>
          </div>
              
              
              
              
              

      </OwlCarousel>  
      </div>  
      </div>  
          )  
        }  
      }  
        
  
export default Testimonials  























































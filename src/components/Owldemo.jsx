import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import React,{Component} from 'react';  

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  

import jeemain from "../Images/jeemain.png";
import jeeadv from "../Images/jeeadv.png";
import kvpy from "../Images/kvpy.png";
import neet from "../Images/neet.png";
import bitsat from "../Images/bitsat.png"
export class OwlDemo extends Component {  
        render()  
        {      
          return (  
              <div>  
            <div className='container-fluid' >      
            <div className="row title" style={{marginBottom: "20px"}} >      
            <div className="col-sm-12">      
                <center><h2 style={{color: '#ff6200'}} >500+ students improved test scores in some of the toughest exams in the world</h2>   </center>
            </div>      
            </div>  
        </div>  

        <div className='container-fluid' >   
          <OwlCarousel items={3} margin={10} autoplay ={true} >  

        <div ><img  className="imgo" src= {jeemain} alt="cara1"/></div>  
           <div><img  className="imgo" src= {jeeadv} alt="cara1"/></div>  
           <div><img  className="imgo" src= {neet} alt="cara1"/></div>  
           <div><img  className="imgo" src= {kvpy} alt="cara1"/></div>  
           <div><img className="imgo" src= {bitsat} alt="cara1"/></div>  
           <div><img className="imgo" src= {jeemain} alt="cara1"/></div>  
           <div><img className="imgo" src= {jeeadv} alt="cara1"/></div>  
      </OwlCarousel>  
      </div>  
      </div>  
          )  
        }  
      }  
        
  
export default OwlDemo  
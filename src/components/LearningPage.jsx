import React,{ useState } from "react";
import Left from "../Images/left.png";
import Right from "../Images/Right.png";
import AOS from "aos";
import Popup from './Popup';
import {TextField , makeStyles } from "@material-ui/core";
//import * as Classes from "./Classes";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Paper } from "@material-ui/core";



AOS.init();

const useStyles = makeStyles((theme) => ({
    formControl: {
    margin: theme.spacing(6),
    minWidth: 180,
  },
    selectEmpty: {
    marginTop: theme.spacing(6),
  },
    root:{
    '& .MuiFormControl-root':{
        width: '80%',
        margin: theme.spacing(1)
    }
  }
}));

const initialvalues = {
    id:0,
    firstname:'',
    lastname:'',
    class:'',
    email:'',
    phoneno:''

}

const LearningPage = () => {

    const classes = useStyles();
    const[values,setValues] = useState(initialvalues);
    const [openPopup,setOpenPopup]= useState(false); 

    const handleInputChange = e => {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    // const handleLastInputChange = e=> {
    //     const {name , value} = e.target
    //     setValues({
    //         ...values,
    //         [name]:value
    //     })
    // }  

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
          style={{ marginLeft: "20px",  background:"#FB8F1D", color:"white"}} 
          onClick = {() => setOpenPopup(true)}>Open Modal</button>

        <Popup>

        openPopup={openPopup}
        setPopup={setOpenPopup}
        
      <Paper className={classes.pageContent}>
          <form className={classes.root}>
            <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={values.firstname}
                    onChange = {handleInputChange}
                    autoFocus
                  />
             <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={values.lastname}
                    onChange ={handleInputChange}
                    
                  />

                  <FormControl variant="outlined" className={classes.formControl} varient="outlined">
                     <InputLabel variant="outlined" id="demo-simple-select-label">Class</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.class}
                        onChange={handleInputChange}
                      >
                        <MenuItem value={10}>8</MenuItem>
                        <MenuItem value={20}>9</MenuItem>
                        <MenuItem value={30}>10</MenuItem>
                        <MenuItem value={30}>11 Science</MenuItem>
                        <MenuItem value={30}>11 Commerce</MenuItem>
                        <MenuItem value={30}>12 Science</MenuItem>
                        <MenuItem value={30}>12 Commerce</MenuItem>
                      </Select>

                  </FormControl>
                        <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Email/Phone number"
                        name="email"
                        value={values.email}
                        onChange = {handleInputChange}
                        autoFocus
                      />
                        <div>
                          <Button  variant="contained" color="primary">Primary</Button>
                        </div>

              {/* <Controls.Select
              name="Class"
              label="Class"
              value={values.Class}
              onChange={handleInputChange}
              option={Classes.class()}
              /> */}
          </form>
          </Paper>
        </Popup>

{/* <div className="modal fade" id="myModal" role="dialog">
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
</div> */}

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

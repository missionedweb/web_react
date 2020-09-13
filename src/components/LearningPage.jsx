import React,{ useState } from "react";
import Left from "../Images/left.png";
import Right from "../Images/Right.png";
import AOS from "aos";
import {TextField , makeStyles } from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
//import * as Classes from "./Classes";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import Button from '@material-ui/core/Button';
import logo from "../Images/logo.svg";
import Grid from "@material-ui/core/Grid";


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
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleLastInputChange = e=> {
        const {name , value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }  

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
          <Button style={{ marginLeft: "20px",  background:"#FB8F1D", color:"white"}} variant="primary" onClick={handleShow}>
          Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}  centered>
        {}
        <Modal.Body>
        
        
        <Grid item xs={12} style={{ textAlign: "center" }}>
            <img src={logo} alt="logo" />
        </Grid>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <h2>Modal</h2>
          </Grid>
        <form className={classes.root} style={{ textAlign: "center" }}>
        <Grid item xs={12} sm={12} >
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
            </Grid>
            <Grid item xs={12} sm={12}>
             <TextField
                    variant="outlined"
                    required
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={values.lastname}
                    onChange ={handleInputChange}
                    
                  />
            </Grid>

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
                        
          </form>
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "center" }}>
          <Button variant="primary" onClick={handleClose} >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>


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
import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button';
import {Card, Typography,CardContent,CardActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function getInternships(){
    return [
      {name:'Internships in Management Consultancy',
      interns: [
        {
          jobTitle :'Business Analyst Intern',
          desc: 'Full Time - Job',
          company: 'Whizhunt Consultancy',
          place:'Hyderabad'
        },
        {
          jobTitle :'Human Resourse Intern',
          desc: 'Full Time - Internship Program',
          company: 'IHA Consultancy Services',
          place:'Hyderabad'
        },
        {
          jobTitle :'Marketing Operations Intern',
          desc: 'Part Time - Internship Program',
          company: 'Career Tome',
          place:'Hyderabad'
        }
      ]},
      {name:'Internships in Mechanical Engineering',
        interns: [
        {
          jobTitle :'Mechanical 3D Modelling',
          desc: 'Full Time - Internship Program',
          company: 'Excelnow Engineering',
          place:'Hyderabad'
        },
        {
          jobTitle :'Industrial Design Engineer',
          desc: 'Full Time - Job',
          company: 'Techosolution India Private LTD.',
          place:'Hyderabad'
        },
        {
          jobTitle :'Robotics Intern',
          desc: 'Full Time - Internship Program',
          company: 'Hello World Robotics Inc.',
          place:'Hyderabad'
        }
      ]}
    ]
}
  

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    title: {
      fontSize: 14,
    },
    pos: {
      fontSize:9
    },
}));

const Internships = () => {
    const internships = getInternships();
    const classes = useStyles();
    return (
        <Fragment>
        {internships && internships.map(intern =>(<Fragment>
            <h4 style={{marginBottom:10, marginTop:10}}>{intern.name}</h4>
            <div className="row">
            {intern.interns.map(inte => (
              <div className="col-lg-4">
              <Card className={classes.root} variant="outlined" style={{width:"100%"}}>
                <CardContent>
                  
                  <Typography variant="h5" component="h3">
                    {inte.jobTitle}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {inte.desc}
                    <br />
                    <br />
                  </Typography>
                  <Typography variant="body2" component="p">
                    {inte.company}
                  </Typography>
                  <Typography className={classes.pos} color="textPrimary">
                    {inte.place}
                  </Typography>
                </CardContent>
                <CardActions style={{alignItems:"right"}}>
                  <Button variant="contained" color="primary" size="small">Apply</Button>
                </CardActions>
              </Card>
              </div>
            ))}
          </div></Fragment>))}
          </Fragment>
    )
}

export default Internships;
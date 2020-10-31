import React,{ Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
}));

function getJobs() {
    return [
        {
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
    ];
}

const JobsPage = () => {
    const classes = useStyles();
    const jobs = getJobs();

  return (
      <Fragment>
    <List className={classes.root} style={{borderColor:"black"}}>
      {jobs && jobs.map(job => (<Fragment>
        <ListItem alignItems="flex-start">
        
      <ListItemText
        primary={
            <Fragment>
            <Typography
              component="span"
              variant="body1"
                style={{color:"#5840bb", fontWeight:600}}  
            
            >
              {job.jobTitle}
              <br />
            </Typography>
          </Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textPrimary"
            >
              {job.type}
              <br />
            </Typography>
            {job.place}
          </React.Fragment>
        }
      />
    </ListItem>
    <Divider variant="inset" component="li" />
    </Fragment>))}
      
    </List>
    </Fragment>
  );
}

export default JobsPage;
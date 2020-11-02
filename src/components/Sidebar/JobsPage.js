import React,{ Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BookmarkOutlined from '@material-ui/icons/BookmarkOutlined';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
}));

function getJobs() {
    return [
        {
            id:1,
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            company:"WhilstHUnt",
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            id:2,
            jobTitle:'Management Analyst Intern',
            company:"New Inco Terms Company",
            type: 'Part Time - Job',
            place: 'Chennai',
            fullDesc: 'Some random multi line text needed.',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            id:3,
            jobTitle:'Human Resource Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            company:"MissionEd",
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            id:4,
            jobTitle:'Data Analysis',
            type: 'Part Time - Job',
            place: 'Hyderabad',
            company:"WhilstHUnt",
            fullDesc: 'Random Text of job descoafen a d iwjifnn',
            appDeadLine: '23rd October 2020',
            postedDate: '1st October 2020',
            estSalary: '5 lpa',
            remote: 'Available',
            author:'Required'
        },
        {
            id:5,
            jobTitle:'Business Analyst Intern',
            type: 'Full Time - Job',
            place: 'Hyderabad',
            company:"WhilstHUnt",
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
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3">
    <List className={classes.root} style={{borderColor:"black"}}>
      {jobs && jobs.map(job => (<Fragment>
        <ListItem alignItems="flex-start"
        button
        selected={selectedIndex === job.id}
        onClick={(event) => handleListItemClick(event, job.id)}
        >
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
    </div>
    <div className="mt-2 col-lg-9">
    <Card>
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {jobs[selectedIndex-1].type}
        </Typography>
        <Typography variant="h5" color="textPrimary" style={{marginBottom:20}}>
          {jobs[selectedIndex-1].jobTitle}
        </Typography>
        
          <div className="row" style={{marginBottom:20}}>
            <div className="col-lg-2">
              <Avatar>R</Avatar>
            </div>
            <div className="col-lg-5">
              <Typography variant="h4" color="textPrimary">
                {jobs[selectedIndex-1].company}
              </Typography>
            </div>
            <div className="mt-2 col-lg-1">
              <BookmarkOutlined />
            </div>
            <div className="mt-1 col-lg-2">
              <Button variant="contained" color="primary">Apply</Button>
            </div>
          </div>
          <Typography variant="body1" color="textSecondary" style={{marginBottom:20}}>
            About the role
          </Typography>
          <Typography variant="h6" color="textPrimary" style={{marginBottom:30}}>
            Job Description
          </Typography>
          <Typography variant="body2" color="textSecondary" style={{marginBottom:30}}>
            {jobs[selectedIndex-1].fullDesc}
          </Typography>
          <Typography align="left" variant="body2" color="textSecondary" style={{marginBottom:10}}>
            Application Deadline : <Typography align="justify" variant="p" color="textPrimary"><strong>{jobs[selectedIndex-1].appDeadLine}</strong></Typography>
          </Typography>
          <Typography align="left" variant="body2" color="textSecondary" style={{marginBottom:10}}>
            Posted Date : <Typography align="justify" variant="p" color="textPrimary"><strong>{jobs[selectedIndex-1].postedDate}</strong></Typography>
          </Typography>
          <Typography align="left" variant="body2" color="textSecondary" style={{marginBottom:10}}>
            Estimated Salary : <Typography align="justify" variant="p" color="textPrimary"><strong>{jobs[selectedIndex-1].estSalary}</strong></Typography>
          </Typography>
          <Typography align="left" variant="body2" color="textSecondary" style={{marginBottom:10}}>
            Remote : <Typography align="justify" variant="p" color="textPrimary"><strong>{jobs[selectedIndex-1].remote}</strong></Typography>
          </Typography>
          <Typography align="left" variant="body2" color="textSecondary" style={{marginBottom:10}}>
            Authorisation : <Typography align="justify" variant="p" color="textPrimary"><strong>{jobs[selectedIndex-1].author}</strong></Typography>
          </Typography>
      </CardContent>
            
    </Card>
    </div>
    </div>
    </div>
  );
}

export default JobsPage;
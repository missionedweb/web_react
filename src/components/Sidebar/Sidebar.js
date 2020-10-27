import React, { useEffect, useState } from "react";
import {
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { SideBarData } from "./SideBarData";
import { Dashboard as Dash } from "./Dashboard";
// import Courses from './Courses';
import Resources from "./Resources";
import Referals from "./Referals";
import { Chat as Chats } from "./Chat";
import { Settings as Setting } from "./Settings";
import Upgrade from "./Upgrade";
import CustomButton from "./CustomButton";
import CenteredGrid from "../Cards/index";
import Course from "../Course/course";
import { auth } from "../../firebase/firebase.utils";
import NavigationLogo from "../../Images/NavigationLogo.svg";
import { Directions } from "@material-ui/icons";
import Pricing from './Pricing';
import Enroll from "./Enroll";
import Coursses from './Courses';
import Profile from './Profile';
import Grades from './Grades';
function SideBar(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [courses, setCourses] = useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <div className={classes.title}>
          <img style={{ display: "block" }} src={NavigationLogo} alt="logo" />
          <br />
          <span style={{ fontSize: "20px" }} className="missioned-nav font-weight-bold">
            Mission
            <span style={{ fontSize: "20px" }} className="ed">
              Ed
            </span>
          </span>
        </div>
        <Link className={classes.button} to='/dashboard/enroll'>
          <CustomButton>Join a course</CustomButton>
        </Link>
      </div>
      <Divider />
      <div className={classes.first}>
        <List>
          {SideBarData.map((item, index) => {
            return (
              <Link to={item.path} className={classes.link} key={index}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText style={{textDecoration : "none !important"}} primary={item.title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
      <Divider />
      <div className={classes.second}>
        <Upgrade />
      </div>

      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );

  return (
    <div className={classes.root}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          className={classes.menuButton}>
          <MenuIcon style={{ fontSize: "30px" }} />
        </IconButton>
      </Toolbar>
      <Router>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}>
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open>
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          {/*switch*/}
          <Switch>
            <Route path="/profile" component={Profile}>
              
            </Route>
            <Route exact path="/dashboard">
              <Dash />
            </Route>
            <Route exact path="/dashboard/courses">
              <Coursses/>
            </Route>
            <Route path="/dashboard/courses/:courseid">
              <Course />
            </Route>
            <Route path="/dashboard/resources">
              <Resources />
            </Route>
            <Route path="/dashboard/referals">
              <Referals />
            </Route>
            <Route path="/dashboard/chats">
              <Chats />
            </Route>
            <Route path="/dashboard/settings">
              <Setting />
            </Route>
            <Route path="/dashboard/pricing" component={Pricing}>
              
            </Route>
            <Route path='/dashboard/enroll' component={Enroll}></Route>
            <Route path='/dashboard/grades' component={Grades}></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default SideBar;

const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    marginLeft: "10px",
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      height: "100vh",
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    position: "fixed",
    top: "10px",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  // drawerPaper: {
  //   width: drawerWidth,
  // },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebar: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    marginLeft: "0",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    flex: "0.4",
    alignContent: "center",
    justifyContent: "space-around",
    marginBottom: "0px",
  },
  first: {
    flex: "0.3",
  },
  second: {
    flex: "0.3",
    paddingBottom: "8px",
  },
  link: {
    width: "100vh",
    textDecoration: "none",
    padding: "10px",
    paddingLeft: "0px",
    color: theme.palette.text.primary,
    "&:hover": {
      color: "#5E81F4",
    },
  },
  title: {
    display: "flex",
    padding: "16px",
    flexDirection: "column",
    textAlign: "center",
  },
  design: {
    backgroundColor: "#5E81F4",
    fontFamily: "Playfair Display",
    color: "#fff",
    height: "48px",
    width: "48px",
    borderRadius: "12px",
    paddingTop: "0px",
    marginTop: "0px",
    fontSize: "24px",
    lineHeight: "32px",
    fontStyle: "normal",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    display: "flex",
    color: "#5E81F4",
    fontFamily: "Inter",
    fontSize: "22px",
    lineHeight: "27px",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "0px",
  },
}));

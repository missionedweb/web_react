import React from "react";
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
import { TeacherSidebarData } from "./TeacherSidebarData";
// import Courses from './Courses';

import TeacherDass from "../../TeachersComponents/TeacherDass.jsx";
import LiveClass from "../../TeachersComponents/LiveClass.jsx";
import ScheduleClass from "../../TeachersComponents/ScheduleClass";
import TeacherChat from "../../TeachersComponents/TeacherChat.jsx";
import TeacherSettings from "../../TeachersComponents/TeacherSettings.jsx";

import Upgrade from "./Upgrade";
import CustomButton from "./CustomButton";
import { auth } from "../../firebase/firebase.utils";
import NavigationLogo from "../../Images/NavigationLogo.svg";

function TeacherSidebar() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
      </div>
      <Divider />
      <div className={classes.first}>
        <List>
          {TeacherSidebarData.map((item, index) => {
            return (
              <Link to={item.path} className={classes.link} key={index}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
      <Divider />
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
            <Route exact path="/Teacher/dashboard">
              <TeacherDass />
            </Route>
            <Route path="/Teacher/dashboard/liveSession">
              <LiveClass />
            </Route>
            <Route path="/Teacher/dashboard/scheduleClass">
              <ScheduleClass />
            </Route>
            <Route path="/Teacher/dashboard/teachersChat">
              <TeacherChat />
            </Route>
            <Route path="/Teacher/dashboard/Settings">
              <TeacherSettings />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default TeacherSidebar;

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
    [theme.breakpoints.up("md")]: {
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

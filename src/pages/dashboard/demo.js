import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import {Dashboard,ViewList,Folder,Person,Chat,Settings} from '@material-ui/icons';

const useStyle = makeStyles((theme) => ({
  afterLogin: {
    display: 'flex',
  },
  drawerPaper: { width: 'inherit'},
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  Drawer: {
    justifyContent: 'space-between'
  }
}))

function App() {
  
  const classes = useStyle();

  return (
    <Router>
      <div className={classes.afterLogin}>
        <div className={classes.drawer}>
          <div className={classes.list}>
            <Drawer
              style={{width: '272px'}}
              variant='permanent'
              anchor='left'
              open={true}
              classes={{ paper: classes.drawerPaper }}
            >
              <div className={classes.logo}>
                MissionEd
              </div>
              <List>
                <Link to='/dashboard' className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <Dashboard />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'}/>
                  </ListItem>
                </Link>
                <Link to='/courses' className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <ViewList />
                    </ListItemIcon>
                    <ListItemText primary={'All courses'}/>
                  </ListItem>
                </Link>
                <Link to='/resources' className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <Folder />
                    </ListItemIcon>
                    <ListItemText primary={'Resources'}/>
                  </ListItem>
                </Link>
                <Link to='/referals' className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <Person />
                    </ListItemIcon>
                    <ListItemText primary={'Referals'}/>
                  </ListItem>
                </Link>
                <Link to='/chats' className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <Chat />
                    </ListItemIcon>
                    <ListItemText primary={'Chats'}/>
                  </ListItem>
                </Link>
                <Link to='/settings' className={classes.link}>
                  <ListItem button>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    <ListItemText primary={'Settings'}/>
                  </ListItem>
                </Link>
              </List>
            </Drawer>
          </div>  
        </div>
      </div>
    </Router>
  );
}

export default App;
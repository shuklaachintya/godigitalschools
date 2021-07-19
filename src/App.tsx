import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';

import './App.css';
import NavBar from './app/components/TopNavigation/TopNavigation';
import OrdersLandingPage from './app/components/LandingPage/Pages/Orders/OrdersLandingPage';
import UnderConstruction from './app/components/UnderConstruction/UnderConstruction';

import { useAuth0 } from './react-keycloak';

const data = require('./app/data/myApps.json');
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',

    '& .MuiBreadcrumbs-ol':{
      marginBottom: '20px',
    }
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow:'none',
    borderBottom:'1px solid #dcdcdc'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    textAlign: 'center',
    marginTop: '6%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  spinner: {
    marginLeft: '45%',
    marginTop: '3%'
  }
}));

export default function App() {
  const { loading } = useAuth0();
  const classes = useStyles();

  if (loading ) {
    return <CircularProgress className={classes.spinner}/>
}

  return (
    
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} color="secondary">

          <Toolbar>
            <NavBar data={data}/>
          </Toolbar>
          
        </AppBar>
         {/* <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper, }}>
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MyApps myapps={data.MyApps} />
          </div>
        </Drawer>
        <main className={classes.content}>
          <Toolbar /> */}
          <main className={classes.content}>
          <Switch>
            <Route exact path="/" component={OrdersLandingPage} />
            <Route component={UnderConstruction} />
          </Switch>
        </main>
      </div>
  );
}

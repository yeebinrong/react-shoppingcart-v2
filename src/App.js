import React from 'react';
import './App.css';

import { Toolbar, AppBar, Typography, Button, MatStyle } from './material'
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Login from './components/login/login'
import Main from './components/main/main';

const styles = MatStyle()

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              React Shoppingcart App V2
            </Typography>
            <Button variant="outlined" color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route 
            exact path="/"
            component={Login}
          />
          <Route 
            exact path="/main"
            component={Main}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

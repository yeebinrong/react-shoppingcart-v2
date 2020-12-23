import React from 'react';
import './App.css';

import { Toolbar, AppBar, Typography, Button, Container, MatStyle } from './material'
import { Route, Switch, Redirect } from 'react-router-dom'
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
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            React Shoppingcart App V2
          </Typography>
          <Button variant="outlined" color="inherit" className={classes.button}>Login</Button>
        </Toolbar>
        <Container>
          <AppBar position="static">
          </AppBar>
          <Switch>
            <Route 
              exact path="/"
              render={props => <Login state={this.state} classes={classes}/>}
            />
            <Route 
              exact path="/main"
              component={Main}
            />
            <Redirect
              to="/"
            />
          </Switch>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

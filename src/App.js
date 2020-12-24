import React from 'react';
import './App.css';

import { Toolbar, AppBar, Typography, Container, MatStyle } from './material'
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
      login: false,
      showPassword: false,
      username: '',
      password: '',
      isUsernameTouched: false,
      isPasswordTouched: false,
      productname: '',
      productprice: '',
      productqty: '',
      isNameTouched: false,
      isPriceTouched: false,
      isQtyTouched: false,
      isUpload: false
    };
  }
  
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.id;
    this.setState(state => {
      state[name] = value;
      switch(name) {
        case 'username':
          state.isUsernameTouched = true;
          break;
        case 'password':
          state.isPasswordTouched = true;
          break;
        case 'productname':
          state.isNameTouched = true;
          break;
        case 'productprice':
          state.isPriceTouched = true;
          break;
        case 'productqty':
          state.isQtyTouched = true;
          break;
        default:
          break;
      }
      
      return state
    })
  };

  handleClickShowPassword = () => {
    // setValues({ ...values, showPassword: !values.showPassword });
    this.setState(state => {
      state.showPassword = !state.showPassword
      return state
    });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleUpload = () => {
    this.setState(state => {
      state.isUpload = true
      return state
    });
  }

  resetValues = () => {
    this.setState(state => {
      state.isUpload = false
      state.productname = ''
      state.productprice = ''
      state.productqty = ''
      state.isNameTouched = false
      state.isPriceTouched = false
      state.isQtyTouched = false
      return state
    })
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">
            React Shoppingcart App V2
          </Typography>
        </Toolbar>
        <Container>
          <AppBar position="static">
          </AppBar>
          <Switch>
            <Route 
              exact path="/"
              render={props => <Login 
                state={this.state} 
                classes={classes} 
                handleMouseDownPassword={this.handleMouseDownPassword} 
                handleClickShowPassword={this.handleClickShowPassword}
                handleInputChange={this.handleInputChange}
              />}
            />
            <Route 
              exact path="/main"
              render={props => <Main 
                state={this.state} 
                classes={classes}
                handleInputChange={this.handleInputChange}
                handleUpload={this.handleUpload}
                resetValues={this.resetValues}
              />}
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

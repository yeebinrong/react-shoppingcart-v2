import React from 'react';
import { Card, FormControl, OutlinedInput, InputLabel, FormHelperText, InputAdornment, Icon, IconButton, VisibilityOff, Visibility } from '../../material'
import LoginButton from './loginbutton';

class Login extends React.Component {
    
    render() {
    const { classes } = this.props;
    const state = this.props.state;

        return (
            <Card className={`${classes.card} ${classes.textCenter}`}>
                <form>
                    <h2>Login</h2>
                    <FormControl fullWidth variant="outlined" error={state.username === '' && state.isUsernameTouched}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <OutlinedInput 
                            id="username"
                            className={classes.input}
                            startAdornment={
                                <InputAdornment position="start">
                                    <Icon>person</Icon>
                                </InputAdornment>} 
                            labelWidth={85}
                            onChange={this.props.handleInputChange}
                            value={state.username}
                            autoComplete="off"
                        />
                        <FormHelperText error={state.username === '' && state.isUsernameTouched} id="username-helper-text">{state.username === '' && state.isUsernameTouched ? 'Please enter your username.' : ''}</FormHelperText>
                    </FormControl>
                    <FormControl className={classes['mt-1']} fullWidth variant="outlined" error={state.password === '' && state.isPasswordTouched}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput 
                            id="password"
                            className={classes.input}
                            type={state.showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.props.handleClickShowPassword}
                                        onMouseDown={this.props.handleMouseDownPassword}
                                        edge="end">
                                            {state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>} labelWidth={75}
                            onChange={this.props.handleInputChange}
                            value={state.password}
                            autoComplete="off"
                        />
                        <FormHelperText error={state.password === '' && state.isPasswordTouched} id="password-helper-text">{state.password === '' && state.isPasswordTouched ? 'Please enter your password.' : ''}</FormHelperText>
                    </FormControl>
                    <LoginButton classes={classes}></LoginButton>
                </form>
            </Card>
        )
    }
}
  
export default Login;
import React from 'react';
import LogoutButton from '../login/logoutbutton';
import { Card, FormControl, OutlinedInput, InputLabel, FormHelperText, InputAdornment, Button } from '../../material'
import Profile from '../login/profile';

class Main extends React.Component {
    
    render() {
        const { classes } = this.props;
        const state = this.props.state;

        return (
            <Card className={`${classes.card} ${classes.textCenter}`}>
                <Profile></Profile>
                <h2>Product Page</h2>
                <FormControl fullWidth variant="outlined" error={state.productname === '' && state.isNameTouched}>
                    <InputLabel htmlFor="productname">Product Name</InputLabel>
                    <OutlinedInput 
                        id="productname"
                        className={classes.input}
                        labelWidth={105}
                        onChange={this.props.handleInputChange}
                        value={state.productname}
                        autoComplete="off"
                    />
                    <FormHelperText error={state.productname === '' && state.isNameTouched} id="productname-helper-text">{state.productname === '' && state.isNameTouched ? 'Please enter a product name.' : ''}</FormHelperText>
                </FormControl>
                <FormControl className={classes['mt-1']} fullWidth variant="outlined" error={state.productprice === '' && state.isPriceTouched}>
                    <InputLabel htmlFor="productprice">Product Price</InputLabel>
                    <OutlinedInput 
                        id="productprice"
                        className={classes.input}
                        type="number"
                        labelWidth={105}
                        startAdornment={
                            <InputAdornment position="start">
                                $
                            </InputAdornment>} 
                        onChange={this.props.handleInputChange}
                        value={state.productprice}
                        autoComplete="off"
                    />
                    <FormHelperText error={state.productprice === '' && state.isPriceTouched} id="productprice-helper-text">{state.productprice === '' && state.isPriceTouched ? 'Please enter a product pricing.' : ''}</FormHelperText>
                </FormControl>
                <FormControl className={classes['mt-1']} fullWidth variant="outlined" error={state.productqty === '' && state.isQtyTouched}>
                    <InputLabel htmlFor="productqty">Product Qty</InputLabel>
                    <OutlinedInput 
                        id="productqty"
                        className={classes.input}
                        type="number"
                        labelWidth={85}
                        onChange={this.props.handleInputChange}
                        value={state.productqty}
                        autoComplete="off"
                    />
                    <FormHelperText error={state.productqty === '' && state.isQtyTouched} id="productqty-helper-text">{state.productqty === '' && state.isQtyTouched ? 'Please enter a product quantity.' : ''}</FormHelperText>
                </FormControl>
                <Button 
                    className={`${classes['mt-1']} ${classes['mr-1']} ${classes.uploadBtn}`} 
                    disabled={
                        state.productname === '' ||
                        state.productprice === '' ||
                        state.productqty === ''
                    } 
                    variant="outlined">Add to database.
                </Button>
                <LogoutButton classes={classes}></LogoutButton>
            </Card>
        )
    }
}

export default Main;
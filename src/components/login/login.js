import PropTypes from 'prop-types';
import React from 'react';
import { Card, Button} from '../../material'

class Login extends React.Component {
    
    constructor(props) {
        super(props)
        console.info(this.props.state)
    }

    render() {
    const { classes } = this.props;

        return (
            <Card className={`${classes.card} ${classes['text-center']}`}>
                <h2>Login</h2>
                <Button className={classes.test} color="primary">Hello World.</Button>
            </Card>
        )
    }
}
  
export default Login;
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../../material'

const LoginButton = ({classes}) => {
  const { loginWithRedirect } = useAuth0();

  return <Button className={`${classes.submitBtn} ${classes['mt-1']}`} onClick={() => loginWithRedirect()}>Just Click Me.</Button>;
  
};

export default LoginButton;
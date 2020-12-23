import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from '../../material'

const LogoutButton = ({classes}) => {
  const { logout } = useAuth0();

    return (
        <Button className={`${classes.submitBtn} ${classes['mt-1']}`} onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
  );
};

export default LogoutButton;
import React from 'react';
import { useMsal } from "@azure/msal-react";

import { loginRequest } from "./authConfig";

const handleLogin = (instance) => {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

const LoginButton = () => {
    const { instance } = useMsal();

    return (
        <button className="button" onClick={() => handleLogin(instance)}>Login</button>
    )
}

export default LoginButton;
import { useState } from "react";
import { useMsal } from "@azure/msal-react";

import { loginRequest } from "./authConfig";

const GetAccessToken = () => {
    const { instance, accounts } = useMsal();
    const [accessToken, setAccessToken] = useState(null);

    const RequestAccessToken = () => {
        const request = {
            ...loginRequest,
            account: accounts[0] // account is needed additional to the scope
        };

        instance.acquireTokenSilent(request).then((response) => {
            response.accessToken ?
                setAccessToken(response.accessToken) :
                alert("Could not receive an Access Token. Please check your scope.")
        }).catch((e) => {
            instance.acquireTokenRedirect(request).then((response) => {
                setAccessToken(response.accessToken);
            });
        });
    }

    return (
        accessToken ?
            <>
                <div className="App-access-token-container">
                    {accessToken}
                </div>
                <button style={{ padding: "0.5rem" }} className="link align-self-center" onClick={() => navigator.clipboard.writeText(accessToken)}>Copy token to clipboard</button>
                <a style={{ padding: "0.5rem" }} className="link align-self-center" href={"https://jwt.ms/#access_token=" + accessToken} target="_blank" rel="noreferrer">Check token at jwt.ms</a>
            </>
            :
            <button className="button align-self-center" onClick={RequestAccessToken}>Request Access Token</button>
    );
};

export default GetAccessToken;
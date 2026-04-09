import React, { useEffect, useState } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionRequiredAuthError } from "@azure/msal-browser";

import logo from './logo.svg';
import './App.css';

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import GetAccessToken from "./GetAccessToken";
import { loginRequest } from "./authConfig";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts, instance, inProgress } = useMsal();

  // using this state variable to only show "unauthenticated" flags once silent sso ran
  // this might not be needed in real world applications that have a router etc.
  const [triedSilentLogin, setTriedSilentLogin] = useState(false);

  useEffect(() => {
    // when refreshing the page, we silently call the authentication provider
    // because 'isAuthenticated' will be false until a call to active directory happens
    if (inProgress === InteractionStatus.None && !isAuthenticated && !triedSilentLogin) {
      instance.ssoSilent(loginRequest)
        .catch(err => {
          // user has no active session at b2c and needs to login again
          if (err instanceof InteractionRequiredAuthError) {
            // inside here you could either
            //   - Redirect to a dedicated login page
            //   - call instance.loginRedirect(loginRequest) directly
            // for the purpose of this demo application none of both makes actually sense
            // for real world applications you probalby want to call loginRedirect inside here
          }
        })
        .finally(() => setTriedSilentLogin(true));
    }
  }, [inProgress, isAuthenticated, instance, triedSilentLogin])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-nav">
          {(!isAuthenticated && triedSilentLogin) && <LoginButton />}
          {(isAuthenticated) && <LogoutButton />}
          <a style={{ marginLeft: "1rem" }} href="https://github.com/tapioone/tapio-auth-react">
            <svg style={{ display: "flex", alignSelf: "center" }} width="24" version="1.1" viewBox="0 0 33 32" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd" strokeWidth="1">
                <g transform="translate(-136 -331)" fill="#FFFFFE">
                  <path d="m152.55 331.19c-8.994 0-16.288 7.293-16.288 16.29 0 7.197 4.667 13.302 11.14 15.456 0.815 0.15 1.112-0.353 1.112-0.785 0-0.387-0.014-1.411-0.022-2.77-4.531 0.984-5.487-2.184-5.487-2.184-0.741-1.882-1.809-2.383-1.809-2.383-1.479-1.01 0.112-0.99 0.112-0.99 1.635 0.115 2.495 1.679 2.495 1.679 1.453 2.489 3.813 1.77 4.741 1.353 0.148-1.052 0.569-1.77 1.034-2.177-3.617-0.411-7.42-1.809-7.42-8.051 0-1.778 0.635-3.233 1.677-4.371-0.168-0.412-0.727-2.069 0.16-4.311 0 0 1.367-0.438 4.479 1.67 1.299-0.362 2.693-0.542 4.078-0.549 1.384 7e-3 2.777 0.187 4.078 0.549 3.11-2.108 4.475-1.67 4.475-1.67 0.889 2.242 0.33 3.899 0.163 4.311 1.044 1.138 1.674 2.593 1.674 4.371 0 6.258-3.809 7.635-7.437 8.038 0.584 0.503 1.105 1.497 1.105 3.016 0 2.178-0.02 3.935-0.02 4.469 0 0.436 0.294 0.943 1.12 0.784 6.468-2.159 11.131-8.26 11.131-15.455 0-8.997-7.294-16.29-16.291-16.29" />
                </g>
              </g>
            </svg>
          </a>
        </div>

      </header>
      <main className="App-content">
        {
          (!isAuthenticated && triedSilentLogin) &&
          <>
            <h1>tapio Auth: Sample SPA </h1>
            <p>This is a sample App for authentication against the tapio B2C for the tapio partners with the <strong>Authorization code flow with PKCE</strong>.
              You can log in here with your tapio account. For more information regarding the development please check the <a href="https://github.com/tapioone/tapio-auth-react" target="_blank" rel="noreferrer">github repo</a> and
              the <a href="https://developer.tapio.one/general/authentication" target="_blank" rel="noreferrer">tapio developer portal</a>.</p>
          </>
        }
        <h3>
          {isAuthenticated && "You are authenticated."}
        </h3>
        {accounts[0] &&
          <div className="App-profile">
            <strong>email: </strong>
            {accounts[0].idTokenClaims?.email}
          </div>
        }

        {isAuthenticated &&
          <div className="App-access-token">
            <h3>Aquire Access Token Silent</h3>
            <GetAccessToken />
          </div>
        }
      </main>
    </div >
  );
}

export default App;

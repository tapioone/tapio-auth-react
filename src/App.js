import { useIsAuthenticated, useMsal } from "@azure/msal-react";

import logo from './logo.svg';
import './App.css';

import LoginButton from './LoginButton';
import LogoutButton from "./LogoutButton";
import GetAccessToken from "./GetAccessToken";

const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </header>
      <main className="App-content">
        {
          !isAuthenticated &&
          <>
            <h1>tapio Auth: Sample SPA </h1>
            <p>This is a sample App for authentication against the tapio B2C for the tapio partners with the <strong>Authorization code flow with PKCE</strong>.
              You can log in here with your tapio account. For more information regarding the development please check the github repo and
              the tapio developer portal.</p>
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
      </main >
    </div >
  );
}

export default App;

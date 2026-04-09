import React from 'react';
import ReactDOM from 'react-dom';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import { msalConfig } from "./authConfig";
import './index.css';
import App from './App';

const msalInstance = new PublicClientApplication(msalConfig);

// handleRedirectPromise is needed when the RedirectFlow is used
// https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications
msalInstance.handleRedirectPromise();

ReactDOM.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from "react";
import { createRoot } from "react-dom/client";
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import { msalConfig } from "./authConfig";
import "./index.css";
import App from "./App";

const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  const container = document.getElementById("root");

  // handleRedirectPromise is needed when the RedirectFlow is used
  // https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications
  msalInstance.handleRedirectPromise();

  if (!container) {
    throw new Error("Root container missing in index.html");
  }

  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </React.StrictMode>,
  );
});

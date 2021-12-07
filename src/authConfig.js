export const msalConfig = {
    auth: {
        clientId: "e35cbc3c-7055-43a2-b978-d8d24a040140",
        authority: "https://login.mytapio.one/32896ed7-d559-401b-85cf-167143d61be0/B2C_1A_TAPIO_SIGNIN/", // https://<your-tenant>.b2clogin.com/<your-tenant>.onmicrosoft.com/<your-policyID>
        redirectUri: "https://tapioone.github.io/tapio-auth-react/", // for dev use http://localhost:3000
        knownAuthorities: ["https://login.mytapio.one"]
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
}

// msal request --> https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/request-response-object.md
export const loginRequest = {
    scopes: ["openid", "offline_access", "https://tapiousers.onmicrosoft.com/React-PKCE-SampleApp/Read"] // https://docs.microsoft.com/en-us/azure/active-directory-b2c/access-tokens#openid-connect-scopes
};
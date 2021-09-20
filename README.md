<div align=center>

<h1>tapio-auth-react</h1>

</div>

[![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/tapioone/tapio-auth-react/CI/master)](https://github.com/tapioone/tapio-auth-react/actions) [![GitHub](https://img.shields.io/github/license/tapioone/tapio-auth-react)](https://github.com/tapioone/tapio-auth-react/blob/master/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/tapioone/tapio-auth-react)](https://github.com/tapioone/tapio-auth-react/issues)

This is a reference implementation of the Authorization Code Flow with PKCE against the tapio [AD B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/overview) using [@azure/msal-react](https://www.npmjs.com/package/@azure/msal-react).

Documentation on authentication in the tapio ecosystem is available in the [tapio Developer Portal](https://developer.tapio.one/general/authentication-implementation).

Further reading:

- [Basic knowledge about Authorization Code Flow with PKCE](https://auth0.com/docs/authorization/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce)
- [Tutorial for MSAL and Code Flow](https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react)
- [Working with MSAL and Azure B2C](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/working-with-b2c.md)
- [Request an access token in B2C](https://docs.microsoft.com/en-us/azure/active-directory-b2c/access-tokens#openid-connect-scopes)

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all defined dependencies in package.json.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

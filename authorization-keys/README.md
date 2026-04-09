# authorization-keys

Learn how to authenticate with tapio APIs using different methods:

- **Basic Authentication with AuthorizationKey** - Reference implementation for APIs like Tadamo and Maintenance Service
  - **Source Code:** `Tapio.Authentication/Tapio.Authentication/AuthenticationSamples.cs`
  - **Documentation:** `Tapio.Authentication/Tapio.Authentication/README.md`

AuthorizationKeys are generated from tapio add-ons (ERP, Measurement Systems, ToolManager Office) and can be used to access APIs without registering separate Azure AD applications.

## Authentication Sample Features

- How to configure the AuthorizationKey with Subscription Id and Application Id
- How to send requests to Tadamo and Maintenance Service APIs
- How to handle common errors (401 Unauthorized, 403 Forbidden)
- Proper error handling patterns for different API clients

## Getting Started with Authentication

1. Obtain your Subscription Id, Application Id, and Authorization Key from [my.tapio.one](https://my.tapio.one)
2. Review the sample code in `AuthenticationSamples.cs`
3. Follow the detailed setup instructions in the documentation

For detailed authentication setup instructions, see the [Authentication Documentation](Tapio.Authentication/Tapio.Authentication/README.md).

---

## 📖 Further Reading

- [HTTP Basic Authentication (RFC 7617)](https://datatracker.ietf.org/doc/html/rfc7617)

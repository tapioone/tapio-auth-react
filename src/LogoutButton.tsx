import { useMsal } from "@azure/msal-react";
import type { IPublicClientApplication } from "@azure/msal-browser";

const handleLogout = (instance: IPublicClientApplication) => {
    instance.logoutRedirect().catch(e => {
        console.error(e);
    });
}

const LogoutButton = () => {
    const { instance } = useMsal();

    return (
        <button className="button" onClick={() => handleLogout(instance)}>
            Logout
        </button>
    )
}

export default LogoutButton;

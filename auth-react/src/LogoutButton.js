import { useMsal } from "@azure/msal-react";

const handleLogout = (instance) => {
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
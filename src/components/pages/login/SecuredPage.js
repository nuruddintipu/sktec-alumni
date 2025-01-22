import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import routes from '../../../routes/routes';
import {getRoutePath} from "../../../routes/NamedLink";
import Login from "./Login";

function SecuredPage() {
    const navigate = useNavigate();
    const getUserLocalStorage = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    };

    const user = getUserLocalStorage();

    if (!user) {
        return <Navigate to={getRoutePath('LOGIN')}/>
    }

    return (
        <div>
            <h2>Welcome to the Secured Page</h2>
            <p>You are logged in as: {user.email}</p>

            <button
                onClick={() => {
                    localStorage.removeItem('user');
                    // navigate(<Login/>)
                }}
            >
                Logout
            </button>
        </div>
    );
}

export default SecuredPage;

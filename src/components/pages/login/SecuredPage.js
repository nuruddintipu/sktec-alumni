import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoutePath } from '../../../routes/NamedLink';
import { logout } from '../../../services/authService/authService';

function SecuredPage() {
    const navigate = useNavigate();
    const handleLogout = async () => {

        try {
            const logoutResponse = await logout();
            if (logoutResponse.success) {
                navigate(getRoutePath('LOGIN'));
            } else {
                console.log('Error logging out');
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <div>
            <h2>Welcome to the Secured Page</h2>
            {/*<p>You are logged in as: {user.email}</p>*/}

            <button
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default SecuredPage;

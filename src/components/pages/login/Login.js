import React, { useEffect, useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { validateLoginForm } from './validateLoginForm';
import { getRoutePath } from '../../../routes/NamedLink';
import { checkSession, login } from '../../../services/authService/authService';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [apiErrors, setApiErrors] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const verifySession = async () => {
            try {
                const sessionData = await checkSession();
                if (sessionData.authenticated) {
                    navigate(getRoutePath('HOME'));
                }
            } catch (error) {
                console.error('Error verifying session:', error);
            }
        };

        verifySession();
    }, [navigate]);

    const newError = validateLoginForm(email, password);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formErrors = newError;
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        setErrors({});
        setApiErrors('');

        try {
            const loginResponse = await login(email, password);
            if (loginResponse.success) {
                navigate(getRoutePath('SECURED_PAGE'));
            } else {
                handleApiError(loginResponse.message);
            }
        } catch (error) {
            handleApiError('Error logging in');
        }
    };

    const handleApiError = (message) => {
        setApiErrors(message);
        setTimeout(() => {
            setApiErrors('');
        }, 3000);
    };


    return (
        <div className="login-wrapper">
            <div className="login-form-container">
                <h2 className="login-title">Login</h2>

                {apiErrors && (
                    <Alert variant="danger" className="mb-3">
                        {apiErrors}
                    </Alert>
                )}

                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Button variant="primary" type="submit" className="login-button">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
}


export default Login;

import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './Login.css';
import routes from "../../../route-paths/routes";
import {Navigate, useNavigate} from 'react-router-dom';
import {validateLoginForm} from "./validateLoginForm";

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [apiErrors, setApiErrors] = useState('');
    const navigate = useNavigate();


    const getUserLocalStorage = () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    };


    const user = getUserLocalStorage();

    if (user) {
        return <Navigate to={routes.securedPage} />;
    }
    const newError = validateLoginForm(email, password);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = newError;
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});
            setApiErrors('');

            try{
                const response = await fetch('http://localhost/learning-php/login.php', {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'application/json'
                   },
                   body: JSON.stringify({
                       email,
                       password
                   })
                });

                const  data = await response.json();

                if(response.ok){
                    if(data.success){
                        localStorage.setItem(
                            'user',
                            JSON.stringify({
                                email: data.email,
                                id: data.userId,
                            })
                        );
                        navigate(routes.securedPage);
                    } else {
                        setApiErrors(data.message);
                        setTimeout(() => {
                            setApiErrors('');
                        }, 3000);
                    }
                } else{
                    setApiErrors('Something went wrong. Please try again later.');
                    setTimeout(() => {
                        setApiErrors('');
                    }, 3000);
                }
            } catch (error) {
                setApiErrors('Netwrok error. Please try again later.');
                setTimeout(() => {
                    setApiErrors('');
                }, 3000);
            }
        }
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
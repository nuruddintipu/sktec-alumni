
import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import './Login.css';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [apiErrors, setApiErrors] = useState('');
    const [successMessage, setSuccessMessage] = useState('');




    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) newErrors.email = 'Email is invalid';
        if (!password) newErrors.password = 'Password is required';
        else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        return newErrors;
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
        } else {
            setErrors({});

            setApiErrors('');
            setSuccessMessage('');


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


                console.log(data);
                if(response.ok){
                    if(data.success){
                        setSuccessMessage(data.message);
                        setApiErrors('');
                    } else {
                        setApiErrors(data.message);
                        console.log(apiErrors);
                        setSuccessMessage('');
                    }
                } else{
                    setApiErrors('Something went wrong. Please try again later.');
                }
            } catch (error) {
                setApiErrors('Netwrok error. Please try again later.');
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
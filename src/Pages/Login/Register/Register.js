import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    }

    return (
        <div className="width mx-auto border border-info rounded-3 p-5">
            <h1 className="text-info text-center">Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                {/* <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 text-info' : "ps-2 text-danger"} htmlFor="terms">Accept espn sports Terms and Conditions</label> */}
                <Button
                    // disabled ={!agree}
                    className="w-100 bg-info text-white mt-2" type="submit">
                    Register
                </Button>
            </Form>
            <p className="mt-2">Already have an Account?<Link to="/login" className="text-info text-decoration-none" onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Register;
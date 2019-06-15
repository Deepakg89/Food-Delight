import React from 'react';

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';


class SignIn extends React.Component {
    render() {
        return (
            <Form>
                <h2>USER SIGN IN FORM</h2>

                <Form.Group controlId="formBasicName" style={{ margin: 'auto', width: "40%", marginBottom: 10 }}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" style={{ margin: 'auto', width: "40%", marginBottom: 10 }}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>


                <Form.Group controlId="formBasicPassword" style={{ margin: 'auto', width: "40%", marginBottom: 10 }}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicAge" style={{ margin: 'auto', width: "40%", marginBottom: 8 }}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" placeholder="Enter age" />
                </Form.Group>

                <Form.Group controlId="formBasicGender">
                    <Form.Label>Male</Form.Label>
                    <Form.Control type="radio" />
                </Form.Group>
                <Form.Group controlId="formBasicGender">
                    <Form.Label>Male</Form.Label>
                    <Form.Control type="radio" />
                </Form.Group>

                <Form.Group controlId="formBasicCity" style={{ margin: 'auto', width: "40%", marginBottom: 8 }}>
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Enter City" />
                </Form.Group>


                <Form.Group controlId="formBasicCountry" style={{ margin: 'auto', width: "40%", marginBottom: 8 }}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type="text" placeholder="Enter Country" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    SIGN IN
                </Button>
            </Form>
        )
    }
}

export default SignIn;
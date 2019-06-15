import React from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';



class Login extends React.Component {
    constructor(props) {
        super(props)
    }




    render() {
        return (
            <Form>
                <h2>LOGIN FORM</h2>
                <Form.Group controlId="formBasicEmail" style={{margin:'auto', width : "40%", marginBottom:20}}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" style={{margin:'auto', width : "40%", marginBottom:20}}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                {/* <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <br></br>
                <Form.Label>New User..? <a href='#'>Sign In Here</a></Form.Label>
            </Form>
        )
    }
}

export default Login;
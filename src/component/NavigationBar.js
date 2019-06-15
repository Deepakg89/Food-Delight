import React from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap'

import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

import Login from './Login';



class NavigationBar extends React.Component {
    

    render() {
    
        return (
            // <Navbar inverse fluid >

            //     <Navbar.Header>
            //         <Navbar.Brand>
            //             <a href="#">FOOD DELIGHTS</a>
            //         </Navbar.Brand>
            //         <Navbar.Toggle />
            //     </Navbar.Header>

            //     <Navbar.Collapse>
            //         <Nav pullRight>
            //             <NavItem eventKey={1} href="#">LOGIN</NavItem>
            //             {/* <NavItem eventKey={2} href="#">World</NavItem> */}
            //         </Nav>
            //     </Navbar.Collapse>

            // </Navbar>


            
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand style={{color:'white'}} href="#home">FOOD DELIGHTS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* yhan masla he..right pe nh jaa rha */}
                    <Nav className="mr-auto" style={{marginLeft : 1010, color:"white"}}> 
                        <Button variant="secondary">Login</Button>
                        {/* <Button variant="secondary" onClick={props.handleLogin}>Login</Button> */}

                        {/* <Nav.Link style={{color:'white'}} href={this.state.login? <Login />: alert("No such data Exists!")}>Login</Nav.Link>               */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
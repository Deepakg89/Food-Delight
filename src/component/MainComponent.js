import React from 'react';
import ReactDOM from 'react-dom';

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class MainComponent extends React.Component{
    render(){
        return(
            <div>
                <Card style={{width : "80%", margin:'auto',marginBottom:'20px'}}>
                    <Card.Header>{this.props.restaurantName}</Card.Header>
                    <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button style={{marginRight:"10px"}}variant="outline-primary">Details</Button>
                    <Button variant="outline-primary">Google Map</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default MainComponent;
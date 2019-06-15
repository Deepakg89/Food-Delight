import React from 'react';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

class SearchRestaurant extends React.Component {
    render() {
        return (
            <div>
                <h3>Ek Bar Azmae...Bar Bar Aae...!</h3>
                <input type="text" placeholder="Search Restaurant..." />
                <Button variant="success" style={{ margin: '5px' }}>Search</Button>
            </div>
        )
    }
}

export default SearchRestaurant; 
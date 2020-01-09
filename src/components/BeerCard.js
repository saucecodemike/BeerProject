import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'

class BeerCard extends React.Component {
    render(){
        return <Col md={4}>
        <Card style={{ width: '23rem', height: '23rem', marginBottom: '10px' }}>
        <Card.Body>
            <Card.Title>{this.props.beer.name}</Card.Title>
            <Card.Text>
                <Card.Img  style={{ width: '20%', float: "left", paddingRight: '20px' }} src={this.props.beer.image_url} />
                {this.props.beer.description}
            </Card.Text>
        </Card.Body>
        </Card>
        
        </Col> 
    }
}

export default BeerCard
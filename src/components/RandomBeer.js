import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import  $ from 'jquery'

class RandomBeer extends Component {

    constructor(props) {
        super(props)
        this.state = {}
        this.getRandomBeer()
      }
    
    getRandomBeer() {
        const apiUrl = "https://api.punkapi.com/v2/beers/random"
        $.ajax({
          url: apiUrl,
          success: (beerInfo) => {
                this.setState ({
                    name: beerInfo[0].name,
                    description: beerInfo[0].description,
                    imageUrl: beerInfo[0].image_url
                })
          },
          error: (xhr, status, err) => {
            console.log("Api Error")
          }
        })
      }

    render() {
        return ( <div className="RandomBeer">
                <h4 style={{ paddingTop: '30px' }}>Here is a random beer for you!</h4>
                <Col md={8}>
                <Card style={{ width: '30rem', height: '100%' }}>
                <Card.Body>
                <Card.Title>{this.state.name}</Card.Title>
                <Card.Text>
                <Card.Img  style={{ width: '10%', float: "left", paddingRight: '20px' }} src={this.state.imageUrl} />
                {this.state.description}
                </Card.Text>
                </Card.Body>
                </Card>
                </Col> 
          </div>
        );
    }


}

export default RandomBeer;
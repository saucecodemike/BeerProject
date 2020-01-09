import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import RandomBeer from './components/RandomBeer'

class Home extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
            <Col xs={8}>
              <h2>Welcome to the beer project</h2>
              <p>This very simple website that allows you to search through Brew Dogs Beer Catalogue</p>
              <Button href="/Search" variant="primary">Search For Beer</Button>
            </Col>
          <Col></Col>
        </Row>
          <Row>
            <Col></Col>
            <Col xs={8}>
            <RandomBeer />
            </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

export default Home;

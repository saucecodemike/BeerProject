import React, { Component } from 'react'
import BeerCard from './components/BeerCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import  $ from 'jquery'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.searchBeers("all")
  }

  searchBeers(searchTerm) {
    
    let apiUrl = ""
    
      if(searchTerm === "all" || searchTerm === "") {
        apiUrl = "https://api.punkapi.com/v2/beers"
      } else {
        apiUrl = "https://api.punkapi.com/v2/beers?beer_name=" + searchTerm
      }

    $.ajax({
      url: apiUrl,
      success: (searchResults) => {
        var beerRows = []
        searchResults.forEach(beer => {
        const BeerCardArrayElement = <BeerCard key={beer.id} beer={beer} />
         beerRows.push(BeerCardArrayElement)
        })

        this.setState({rows: beerRows})
      },
      error: (xhr, status, err) => {
        console.log("Api Error")
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchTerm = boundObject.state.searchValue
    boundObject.searchBeers(searchTerm)
    console.log(searchTerm)
  }

  handleChange(event) {
     const changeBoundObject = this 
     changeBoundObject.setState({searchValue: event.target.value})
  }

  render() {
    return (
        <div className="Search">
        <Container>
        <h2>Beer Search</h2>
        <InputGroup className="mb-3">
            <FormControl onChange={this.handleChange.bind(this)}  placeholder="Search for beer" />
            <InputGroup.Append>
            <Button variant="primary" onClick={this.searchChangeHandler.bind(this)}>Search for beer</Button>
            </InputGroup.Append>
         </InputGroup>
         <Row>
           {this.state.rows}
         </Row>
        </Container>
      </div>
    );
  }
}

export default Search;

import React, { Component } from 'react'
import Search from './Search'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router> 
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
      </Router>  
    );
  }
}

export default App;

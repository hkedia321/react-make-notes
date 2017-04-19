import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class HomeContainer extends Component {
    render(){
      return(
        <div>
          <Link to="/">Home</Link>
          .
          <Link to="/notes">Notes</Link>
          .
          <Link to="/searching">Searching</Link>
        </div>
      )
    }
}
export default HomeContainer;

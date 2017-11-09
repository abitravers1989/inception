import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>

      <div class="navbar navbar-default navbar-static-top" className= "navbar">
          <div class="navbar-header">
              <a class="navbar-brand" href="https://datasine.com/">
              <ul>
              <div className ="Company">
                  <span class="glyphicon glyphicon glyphicon-king "> </span>
                  <Link to= "/datasine">
                  <a>DataSine - Look Into Your Customers Mind </a> </Link>
                  </div>
              </ul>
              </a>
          </div>
      </div>



      </header>
    );
  }
}

export default Header;

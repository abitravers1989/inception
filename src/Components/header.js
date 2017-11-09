import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
      <nav class="navbar-default">
      <div class="container-fluid">
          <div class="navbar-header">
              <a class="navbar-brand" href="https://datasine.com/">
              <ul>
              <div className ="Company">
                  <span class="glyphicon glyphicon glyphicon-king "> </span>
                  <Link to= "https://datasine.com/">
                  <a>DataSine - Look Into Your Customers Mind </a> </Link>
                  </div>
              </ul>
              </a>
          </div>
      </div>
    </nav>
       <h1> Your Customers </h1>

      </header>
    );
  }
}

export default Header;

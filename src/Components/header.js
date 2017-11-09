import React, { Component } from 'react';

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
                  <a href="https://datasine.com/" >DataSine - Look Into Your Customers Mind </a>
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

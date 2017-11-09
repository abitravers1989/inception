import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
      <div className = "logo">
         logo
         </div>

      <nav class="navbar-default">
      <div class="container-fluid">

          <div class="navbar-header">
              <a class="navbar-brand" href="https://datasine.com/">
              <ul>
              <div className ="Company">
                  <span class="glyphicon glyphicon glyphicon-king "> </span>
                  <a href="https://datasine.com/" >DataSine - Look Into Your Customers Mind </a>
                  </div>
                  // <li className= "last">
                  //      <a href="https://i.ytimg.com/vi/6nkVUqOx-QE/maxresdefault.jpg">Agreeability </a>
                  // </li>
              </ul>
              </a>
          </div>


      </div>
  </nav>
      </header>
    );
  }
}

export default Header;

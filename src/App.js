import React, { Component } from 'react';
import customers from './customers.json';
import './Assets/styles.scss';
import Header from './Components/header'
import Table from './Components/table'
import Search from './Components/search'
import CustomerInfo from './Components/customerinfo'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
            <Header />

            <Route exact path='/' component={Table}/>
              <Route exact path='/' component={Search}/>
            <Route exact path='/customer' component={CustomerInfo}/>

      </div>
      </Router>
    );
  }
}

export default App;

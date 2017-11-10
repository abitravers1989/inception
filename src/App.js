import React, { Component } from 'react';
import './Assets/styles.scss';
import Header from './Components/header'
import Table from './Components/table'
import Search from './Components/search'
import CustomerInfo from './Components/customerinfo'
import DataSine from './Components/datasine'
import Toggle from './Components/toggle'


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
              <Route exact path='/' component={Toggle}/>
            <Route exact path='/customer' component={CustomerInfo}/>
            <Route exact path='/dataSine' component={DataSine}/>

      </div>
      </Router>
    );
  }
}

export default App;

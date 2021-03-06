import React, { Component } from 'react';
import './Assets/styles.scss';
import Header from './Components/header'
import Table from './Components/table'
import AddCustomers from './Components/addmorecustomers'
import DataSine from './Components/datasine'

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
              <Route exact path='/' component={AddCustomers}/>
            <Route exact path='/dataSine' component={DataSine}/>

      </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import customers from './customers.json';
import './Assets/styles.scss';
import { Form, FormControl, Button } from 'react-bootstrap';
import Header from './Components/header'
import Table from './Components/table'
import Search from './Components/search'


class App extends Component {
  render() {
    return (
      <div className="app">
            <Header />

              <Table />

              <Search />

      </div>
    );
  }
}

export default App;

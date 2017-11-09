import React, { Component } from 'react';
import customers from './customers.json';
import './Assets/styles.scss';
import { Form, FormControl, Button } from 'react-bootstrap';
import Header from './Components/header'


const CustomerRow = ({customer}) => (
  <tr>
    <td>{customer.first_name} {customer.last_name}</td>
    <td>
      {customer.dominant_traits[0].primary_trait}
    </td>
  <td>
    {customer.dominant_traits[0].level}
      </td>
    <td>
    {customer.dominant_traits[1].secondary_trait}

    </td>
    <td>
      {customer.dominant_traits[1].level}
        </td>
  </tr>
);

class App extends Component {
  render() {
    return (
      <div className="app">
            <Header />

        <header>

        <div class="header">
          <h1>Your Customers</h1>
          </div>
        </header>
        <table class="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Primary Trait</th>
              <th>Level</th>
              <th>Secondary Trait</th>
              <th>Level</th>
            </tr>
          </thead>
          <tbody>
          {
            customers.slice(0, 10).map(c => <CustomerRow customer={c}/>)
          }
          </tbody>
        </table>

        <Form inline>
        <FormControl
        />
        <Button>
        Submit
        </Button>
        </Form>

      </div>
    );
  }
}

export default App;

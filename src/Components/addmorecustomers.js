import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';


class AddCustomers extends Component {
  render() {
    return (
      <Form inline>
      <Link to="customerinfo.js">
      <Button>
      Add More Customers
      </Button>
      </Link>
      </Form>
    );
  }
}

export default AddCustomers;

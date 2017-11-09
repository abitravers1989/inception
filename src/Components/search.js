import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';


class Search extends Component {
  render() {
    return (
      <Form inline>
      <Button>
      Add More Customers
      </Button>
      </Form>
    );
  }
}

export default Search;

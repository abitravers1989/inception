import React, { Component } from 'react';
import customers from '../customers.json';
import {
  Link
} from 'react-router-dom';


const CustomerRow = ({customer}) => (
  <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">


     <td>
       {customer.first_name} {customer.last_name}

       </td>
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


class Table extends Component {
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Name< /th>
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


    );
  }
}

export default Table;

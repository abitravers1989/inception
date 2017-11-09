import React, { Component } from 'react';
import customers from '../customers.json';
import {
  Link
} from 'react-router-dom';


const CustomerRow = ({customer}) => (
  <tr data-toggle="collapse" data-target="#demo1" className="accordion-toggle">


     <td>

       <button type="button" class="btn btn-lg btn-info collapsed" data-toggle="collapse" data-target="#demo">
       {customer.first_name} {customer.last_name}
       </button>
       <div id="demo" class="collapse">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,

        </div>
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
       // <td colspan="12" className="hiddenRow">
       //     <div className="accordian-body collapse" id="demo1">
       //         <h1>Hi from the hiddenRow</h1>
           </div>
       </td>
  </tr>
);


class Table extends Component {
  render() {
    return (
      <table class="table table-hover">
        <thead>
          <tr>
            <th><span class="glyphicon glyphicon-king "/>Name< /th>
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

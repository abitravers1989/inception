// import React, { Component } from 'react';
// import customers from '../customers.json';
//
// import BootstrapTable from 'reactjs-bootstrap-table';
//
//
// const CustomerRow = ({customer}) => (
//   <tr>
//     <td>{customer.first_name} {customer.last_name}</td>
//     <td>
//       {customer.dominant_traits[0].primary_trait}
//     </td>
//   <td>
//     {customer.dominant_traits[0].level}
//       </td>
//     <td>
//     {customer.dominant_traits[1].secondary_trait}
//
//     </td>
//     <td>
//       {customer.dominant_traits[1].level}
//         </td>
//         <td>
//           {customer.high_propensity_products}
//             </td>
//             <td>
//               {customer.income}
//                 </td>
//   </tr>
// );
//
// class ExpandRow extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   isExpandableRow(row) {
//     if (row.id < 2) return true;
//     else return false;
//   }
//
//   expandComponent(row) {
//     return (
//       <BSTable data={ row.expand } />
//     );
//   }
//
//   render() {
//     const options = {
//       expandRowBgColor: 'rgb(242, 255, 163)'
//     };
//     return (
//       <BootstrapTable data={ products }
//         options={ options }
//         striped
//         expandableRow={ this.isExpandableRow }
//         expandComponent={ this.expandComponent }
//         search>
//         <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
//         <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
//         <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
//       </BootstrapTable>
//     );
//   }
// }
// document.get
//
// export default ExpandRow;

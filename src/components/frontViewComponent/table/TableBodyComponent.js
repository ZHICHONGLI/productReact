'use strict';

import React from 'react';
import {Table, Button} from 'react-bootstrap';

require('styles/frontViewComponent/table/TableBody.css');

class TableBodyComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
       
    }
  }
  tbBody(item){
    let idx = this.props.dataList.indexOf(item)+1;
    let el = <tr key={item.id}>
              <td>{idx}</td>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.Price}</td>
              <td>{item.Stock}</td>
              <td>{item.Packing}</td>
              <td>{item.Description}</td>
              <td>{item.Status}</td>
              <td>
                <Button><i className="fa fa-pencil-square-o " aria-hidden="true " /></Button>
                <Button><i className="fa fa-trash " aria-hidden="true " /></Button>
              </td>
            </tr>
    return el;
            
  }
    componentDidMount(){
    //this.dataIdx();
    //console.log(this.state.data)
  }
  render() {
    return (
      <div className="tablebody-component">
        <Table striped hover>
          <thead>
            <tr>
              <th>#</th>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Packing</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
              {
               this.props.dataList.map(item => this.tbBody(item)
               )
              }
            </tbody>
        </Table>
      </div>
    );
  }
}

TableBodyComponent.displayName = 'FrontViewComponentTableTableBodyComponent';

// Uncomment properties you need
// TableBodyComponent.propTypes = {};
// TableBodyComponent.defaultProps = {};

export default TableBodyComponent;

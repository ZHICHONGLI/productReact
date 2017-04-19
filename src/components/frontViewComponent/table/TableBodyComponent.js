'use strict';

import React from 'react';
import {Table, Button} from 'react-bootstrap';

require('styles/frontViewComponent/table/TableBody.css');

class TableBodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       editShow: false,
       activeItem: {}
    }
  }
  stockEdit(item){
    this.setState({editShow: true, activeItem : item})
  }
  test(item){
    console.dir(item);
  }
  statusEdit(item){
    item.Status = !item.Status;
    this.props.handleStatus(item);
  }

  tbBody(item){
    let idx = this.props.dataList.indexOf(item)+1;
    let el = <tr>
              <td>{idx}</td>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>{item.Price}</td>
              <td className={this.state.activeItem == item?'hide':''}>
                <span className="stock" onClick={()=>this.setState({activeItem:item})}>{item.Stock}</span>
              </td>
              <td className={this.state.activeItem == item? '':'hide'}>
                <span><input className="form-control" placeholder={item.Stock}></input></span>
                <span className="stock">update </span>
                |
                <span className="stock" onClick={()=>this.setState({activeItem:{}})}> cancel</span>
              </td>
              <td>{item.Packing}</td>
              <td>{item.Description}</td>
              <td><Button bsStyle={item.Status?"success":"default"} onClick={()=>this.statusEdit(item)} ref={(buttonDOM) => { this.buttonDOM = buttonDOM; }}>{item.Status?'Available':'Unavailable'}</Button></td>
              <td>
                <Button onClick={()=>this.test(item)}><i className="fa fa-pencil-square-o " aria-hidden="true " /></Button>
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

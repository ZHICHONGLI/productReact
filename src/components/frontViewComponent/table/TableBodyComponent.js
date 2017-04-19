'use strict';

import React from 'react';
import {Table, Button} from 'react-bootstrap';
import DeletBtnComponent from './DeletBtnComponent';

require('styles/frontViewComponent/table/TableBody.css');

class TableBodyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       editShow: false,
       activeItem: {},
       stockValue: undefined
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
  stockUpdate(item, v){
    this.props.stockHandle(item, v);
    this.setState({activeItem:{},stockValue:''})
  }
  handleChange(event){
    this.setState({stockValue: event.target.value})
  }
  tbBody(item){
    let idx = this.props.dataList.indexOf(item)+1;
    let el = <tr>
              <td>{idx}</td>
              <td>{item.id}</td>
              <td>{item.Name}</td>
              <td>$ {item.Price}</td>
              <td className={this.state.activeItem == item?'hide':''}>
                <span className="stock" onClick={()=>this.setState({activeItem:item})}>{item.Stock}</span>
              </td>
              <td className={this.state.activeItem == item? '':'hide'}>
                <span><input type="number" className="form-control stockinput" placeholder={item.Stock} value={this.state.stockValue} onChange={this.handleChange.bind(this)}></input></span>
                <span className="stock" onClick={()=>this.stockUpdate(item, this.state.stockValue)}>update </span>
                |
                <span className="stock" onClick={()=>this.setState({activeItem:{}, stockValue:''})}> cancel</span>
              </td>
              <td>{item.Packing}</td>
              <td>{item.Description}</td>
              <td><Button bsStyle={item.Status?"success":"default"} onClick={()=>this.statusEdit(item)} ref={(buttonDOM) => { this.buttonDOM = buttonDOM; }}>{item.Status?'Available':'Unavailable'}</Button></td>
              <td>
                <Button>
                  <i className="fa fa-pencil-square-o " aria-hidden="true " />
                </Button>
                <DeletBtnComponent {...this.props} item={item} />
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

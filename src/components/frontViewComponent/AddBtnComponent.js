'use strict';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

require('styles/frontViewComponent/AddBtn.css');

class AddBtnComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      showModal : false,
      item : {"Name":'', "Price":undefined, "Stock":undefined, "Packing":'', "Description":'', "Status":undefined}
    }
  }
  close() {
    this.setState({ showModal: false, item: {} });
  }
  open() {
    this.setState({ showModal: true });
  }
  save(){
    this.props.addHandel(this.state.item);
    this.close()
  }
  inputHandle(event, propName){
    if(propName=='Price'||propName=='Stock'){
      if(event.target.value <0){
        event.target.value = undefined
      }else{
        this.state.item[propName] = event.target.value;
      }
    }else{
      this.state.item[propName] = event.target.value;
    }
  }
  
  render() {
    let modalEl = <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Name</span>
          <input type="text" className="form-control" placeholder="Name" onChange={(event)=>this.inputHandle(event, 'Name')} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Price</span>
          <input type="number" className="form-control" placeholder="Price" value={this.state.item.Price} onChange={(event)=>this.inputHandle(event, 'Price')} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Stock</span>
          <input type="number" className="form-control" placeholder="Stock" value={this.state.item.Stock} onChange={(event)=>this.inputHandle(event, 'Stock')} aria-describedby="basic-addon1" />
        </div><div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Packing</span>
          <input type="text" className="form-control" placeholder="Packing" onChange={(event)=>this.inputHandle(event, 'Packing')} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Description</span>
          <textarea rows="4" type="text" className="form-control" placeholder="Name" onChange={(event)=>this.inputHandle(event, 'Description')} aria-describedby="basic-addon1" />
        </div>
        <div className="input-group">
          <label>Status:</label>
          <div className="radio">
            <label><input type="radio" name="optradio" onChange={()=>this.state.item.Status=true} /> Available</label>
          </div>
          <div className="radio">
            <label><input type="radio" name="optradio" onChange={()=>this.state.item.Status=false} /> Unavailable</label>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="success" onClick={this.save.bind(this)}>Save</Button>
        <Button onClick={this.close.bind(this)}>Close</Button>
      </Modal.Footer>
    </Modal>;
    return (
      <div className="addbtn-component">
        <Button bsStyle="primary" bsSize="large" onClick={this.open.bind(this)}><i className="fa fa-plus" aria-hidden="true" /> Add New Product</Button>
        {this.state.showModal?modalEl:null}
      </div>
    );
  }
}

AddBtnComponent.displayName = 'FrontViewComponentAddBtnComponent';

// Uncomment properties you need
// AddBtnComponent.propTypes = {};
// AddBtnComponent.defaultProps = {};

export default AddBtnComponent;

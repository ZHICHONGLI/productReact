'use strict';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

require('styles/frontViewComponent/table/EditBtn.css');

class EditBtnComponent extends React.Component {
  constructor(props) {
  super(props);
  let originalItem = Object.assign({},this.props.item);
  this.state ={
    showModal : false,
    item : originalItem,
    orgItem: originalItem
    }
  }
  componentWillUnmount(){
    let originalItem = Object.assign({},this.props.item);
    this.setState({item: originalItem})
  }
  close() {
    let original = Object.assign({}, this.props.item); //alway keep props.item untouched and next time state.item will be original value
    this.setState({ showModal: false, item: original});
  }
  open() {
    this.setState({ showModal: true});
  }
  save() {
    //console.dir(this.state.item)
    this.props.editHandle(this.state.item);
    this.setState({showModal:false})
  }
  status(boolean){
    this.state.item.Status = boolean;
    this.setState({item:this.state.item})
  }
  inputHandle(event, propName){
    if(propName=='Price'||propName=='Stock'){
      if(event.target.value <0){
        event.target.value = undefined
      }else{
        this.state.item[propName] = event.target.value;
        this.setState({item:this.state.item})
      }
    }else{
        if(!event.target.value){
          const ori = this.props.item[propName];
        //  console.log(ori);
          this.state.item[propName]=ori;
        //  console.log(this.state.item[propName]);
        // console.dir(this.state.item);
        // console.dir(this.state.orgItem);
        // console.dir(this.props.item);
        return
      }
      this.state.item[propName] = event.target.value;
    }
    if(!event.target.value){
          const ori = this.props.item[propName];
          this.state.item[propName]=ori;
      }
  }
  render() {
    let modalEl = <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Name</span>
              <input type="text" className="form-control" placeholder={this.props.item.Name} defaultValue={this.props.item.Name} onChange={(event)=>this.inputHandle(event, 'Name')} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Price</span>
              <input type="number" className="form-control" placeholder={this.props.item.Price} defaultValue={this.props.item.Price} value={this.state.item.Price} onChange={(event)=>this.inputHandle(event, 'Price')} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Stock</span>
              <input type="number" className="form-control" placeholder={this.props.item.Stock} defaultValue={this.props.item.Stock} value={this.state.item.Stock} onChange={(event)=>this.inputHandle(event, 'Stock')} aria-describedby="basic-addon1" />
            </div><div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Packing</span>
              <input type="text" className="form-control" placeholder={this.props.item.Packing} defaultValue={this.props.item.Packing} onChange={(event)=>this.inputHandle(event, 'Packing')} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Description</span>
              <textarea rows="4" type="text" className="form-control" placeholder={this.props.item.Description} defaultValue={this.props.item.Description} onChange={(event)=>this.inputHandle(event, 'Description')} aria-describedby="basic-addon1" />
            </div>
            <div className="input-group">
              <label>Status:</label>
              <div className="radio">
                <label><input type="radio" name="optradio" checked={this.state.item.Status==true} onChange={()=>this.status(true)} /> Available</label>
              </div>
              <div className="radio">
                <label><input type="radio" name="optradio" checked={this.state.item.Status==false}  onChange={()=>this.status(false)} /> Unavailable</label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.save.bind(this)}>Save</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>;
    return (
      <div className="editbtn-component">
        <button onClick={this.open.bind(this)} className="btn btn-default"><i className="fa fa-pencil-square-o " aria-hidden="true" /></button>
        {this.state.showModal?modalEl:null}
      </div>
    );
  }
}

EditBtnComponent.displayName = 'FrontViewComponentTableEditBtnComponent';

// Uncomment properties you need
// EditBtnComponent.propTypes = {};
// EditBtnComponent.defaultProps = {};

export default EditBtnComponent;

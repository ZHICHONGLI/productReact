'use strict';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

require('styles/frontViewComponent/table/EditBtn.css');

class EditBtnComponent extends React.Component {
  constructor(props) {
  super(props);
  this.state ={
    showModal : false,
    item : this.props.item
  }
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true,
                    item: this.props.item
   });
  }
  render() {
    let modalEl = <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="input-group">
              <span className="input-group-addon" id="basic-addon1">Name</span>
              <input type="text" className="form-control" placeholder={this.props.item.Name} value={this.state.item.Name} aria-describedby="basic-addon1" />
            </div>
          </Modal.Body>
          <Modal.Footer>
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

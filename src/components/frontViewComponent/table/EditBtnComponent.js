'use strict';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

require('styles/frontViewComponent/table/EditBtn.css');

class EditBtnComponent extends React.Component {
  constructor(props) {
  super(props);
  this.state ={
    showModal : false
  }
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  render() {
    let modalEl = <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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

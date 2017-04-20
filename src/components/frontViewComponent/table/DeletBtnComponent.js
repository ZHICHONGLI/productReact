'use strict';

import React from 'react';
import {Modal, Button} from 'react-bootstrap';

require('styles/frontViewComponent/table/DeletBtn.css');

class DeletBtnComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal : false
    }
  }
  delete(){
    this.props.deleteHandle(this.props.item);
    this.close()
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
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p id="dlconfirm">Please confirm delete</p>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.delete.bind(this)}>Delete</Button>
            <Button onClick={this.close.bind(this)}>Cancel</Button>
          </Modal.Footer>
        </Modal>;
    return (
      <div className="deletbtn-component">
        <button onClick={()=>this.open()} className="btn btn-default">
          <i className="fa fa-trash " aria-hidden="true " />
        </button>
        {this.state.showModal?modalEl:null}
      </div>
      
    );
  }
}

DeletBtnComponent.displayName = 'FrontViewComponentTableDeletBtnComponent';

// Uncomment properties you need
// DeletBtnComponent.propTypes = {};
// DeletBtnComponent.defaultProps = {};

export default DeletBtnComponent;

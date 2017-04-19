'use strict';

import React from 'react';

require('styles/frontViewComponent/table/DeletBtn.css');

class DeletBtnComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  delete(){
    this.props.deleteHandle(this.props.item);
  }
  render() {
    return (
      <button onClick={()=>this.delete()} className="deletbtn-component btn btn-default">
        <i className="fa fa-trash " aria-hidden="true " />
      </button>
    );
  }
}

DeletBtnComponent.displayName = 'FrontViewComponentTableDeletBtnComponent';

// Uncomment properties you need
// DeletBtnComponent.propTypes = {};
// DeletBtnComponent.defaultProps = {};

export default DeletBtnComponent;

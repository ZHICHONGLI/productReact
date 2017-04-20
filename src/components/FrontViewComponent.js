'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import TableComponent from './frontViewComponent/TableComponent';
import AddBtnComponent from './frontViewComponent/AddBtnComponent';

require('styles//FrontView.css');

class FrontViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    //console.log(this.props.dataList)
  }
  render() {
    return (
      <div className="frontview-component container-fluid">
        <h1>Products</h1>
                <AddBtnComponent {...this.props} />
                <TableComponent className="row" {...this.props}/>
      </div>
    );
  }
}

FrontViewComponent.displayName = 'FrontViewComponent';

// Uncomment properties you need
// FrontViewComponent.propTypes = {};
// FrontViewComponent.defaultProps = {};

export default FrontViewComponent;

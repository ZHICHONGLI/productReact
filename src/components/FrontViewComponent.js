'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';
import TableComponent from './frontViewComponent/TableComponent';

require('styles//FrontView.css');

class FrontViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 'initstring',
      value: 1
    }
  }
  componentDidMount(){
    //console.log(this.props.dataList)
  }
  test(){
    console.log(this.props.dataList);
  }
  render() {
    return (
      <div className="frontview-component container-fluid">
        <h1>Products</h1>
                <Button bsStyle="primary" bsSize="large"><i className="fa fa-plus" aria-hidden="true" /> Add New Product</Button>
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

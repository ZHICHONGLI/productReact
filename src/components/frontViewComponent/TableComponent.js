'use strict';

import React from 'react';
import {Button, PanelGroup, Panel} from 'react-bootstrap';
import PanelHeaderComponent from './table/PanelHeaderComponent';
import TableBodyComponent from './table/TableBodyComponent';

require('styles/frontViewComponent/Table.css');

class TableComponent extends React.Component {
    constructor(props) {
    super(props);
  }
  test(){
    console.log(this.props.dataList);
  }
  render() {
    return (
      <div className="table-component">
        <div className="panel panel-default">
            <div id="fixheading" className="panel-heading"><PanelHeaderComponent dataList={this.props.dataList} /></div>
            <div className="panel-body">
              <TableBodyComponent dataList={this.props.dataList} />
            </div>
        </div>
        <Button onClick={this.test.bind(this)}>Tc Test</Button>
      </div>
    );
  }
}

TableComponent.displayName = 'FrontViewComponentTableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;

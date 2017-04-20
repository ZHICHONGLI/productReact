'use strict';

import React from 'react';
import PanelHeaderComponent from './table/PanelHeaderComponent';
import TableBodyComponent from './table/TableBodyComponent';

require('styles/frontViewComponent/Table.css');

class TableComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="table-component">
        <div className="panel panel-default">
            <div id="fixheading" className="panel-heading">
              <PanelHeaderComponent {...this.props} />
            </div>
            <div className="panel-body">
              <TableBodyComponent {...this.props} />
            </div>
        </div>
      </div>
    );
  }
}

TableComponent.displayName = 'FrontViewComponentTableComponent';

// Uncomment properties you need
// TableComponent.propTypes = {};
// TableComponent.defaultProps = {};

export default TableComponent;

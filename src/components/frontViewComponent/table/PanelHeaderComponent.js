'use strict';

import React from 'react';

require('styles/frontViewComponent/table/PanelHeader.css');

class PanelHeaderComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      searchKeys: ''
    }
  }
  searchKey(event){
    this.props.handleSearch(event.target.value);
  }
  render() {
    return (
      <div className="panelheader-component row">
        <div className="col-md-8">List of <span id="totalnum">{this.props.dataList.length}</span> Products</div>
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
            <input id="msg" type="text" className="form-control" placeholder="Filting by name and description" onChange={this.searchKey.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

PanelHeaderComponent.displayName = 'FrontViewComponentTablePanelHeaderComponent';

// Uncomment properties you need
// PanelHeaderComponent.propTypes = {};
// PanelHeaderComponent.defaultProps = {};

export default PanelHeaderComponent;

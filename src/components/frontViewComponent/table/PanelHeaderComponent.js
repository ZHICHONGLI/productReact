'use strict';

import React from 'react';

require('styles/frontViewComponent/table/PanelHeader.css');

class PanelHeaderComponent extends React.Component {
    constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panelheader-component row">
        <div className="col-md-8">List of Products</div>
        <div className="col-md-4">
          <div className="input-group">
            <span className="input-group-addon"><i className="fa fa-search" aria-hidden="true"></i></span>
            <input id="msg" type="text" className="form-control" placeholder="Filting by name and description" />
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

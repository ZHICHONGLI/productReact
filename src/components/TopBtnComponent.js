'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';

require('styles//TopBtn.css');

class TopBtnComponent extends React.Component {
    constructor(props) {
    super(props);
    }
  goTop(){
    window.scrollTo(0,0)
  }
  render() {
    return (
        <Button className="topbtn-component" bsStyle="default" onClick={this.goTop.bind(this)}>
          <i className="fa fa-rocket" aria-hidden="true" />
          <p> Top</p>
        </Button>
      
    );
  }
}

TopBtnComponent.displayName = 'TopBtnComponent';

// Uncomment properties you need
// TopBtnComponent.propTypes = {};
// TopBtnComponent.defaultProps = {};

export default TopBtnComponent;

'use strict';

import React from 'react';

require('styles//FrontView.css');

class FrontViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      str: 'initstring',
      value: 1
    }
  }

  changeStr(e){
    
    this.setState({
      str: 'newstring'
    })
    console.log(this);
    
  }
  render() {
    return (
      <div className="frontview-component">
        <div id="fronttitle">This is FrontView</div>
        <div>{this.state.str}</div>
        <p>{this.state.value}</p>
        <button onClick={this.changeStr.bind(this)}>change</button>
      </div>
    );
  }
}

FrontViewComponent.displayName = 'FrontViewComponent';

// Uncomment properties you need
// FrontViewComponent.propTypes = {};
// FrontViewComponent.defaultProps = {};

export default FrontViewComponent;

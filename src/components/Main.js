require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FrontViewComponent from './FrontViewComponent';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
    render() {
        return (
            <div className = "index" >
                <img src = { yeomanImage } alt = "Yeoman Generator" />
                <div className = "notice" > Please edit
                    <code > src / components / Main.js </code>
                     to get started!
                </div>
                <div> This is
                    for testing...
                </div>
                <FrontViewComponent></FrontViewComponent>
                <p>......</p>
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
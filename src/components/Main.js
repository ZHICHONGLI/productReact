require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FrontViewComponent from './FrontViewComponent';
import NavbarComponent from './NavbarComponent';

import { Button } from 'react-bootstrap';
import axios from 'axios';


class AppComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      childName: 'Initial-Name',
      dataList: []
    }
  }
    componentDidMount(){
        //console.log(products);
        axios.get('http://localhost:8080/api/products')
            .then(response =>
            this.setState(
                {dataList: response.data}
            ))
            .catch(err => console.log(err));
    }
    childProps(e){
        this.setState(
            {childName : 'ChildName Changed'}
        )
    }
    test(){
        console.log(this.state.dataList)
    }
    render() {
        return (
            <div className = "index" >
                <NavbarComponent />
                <FrontViewComponent dataList={this.state.dataList} />
                
                <Button bsStyle="default" onClick={this.childProps.bind(this)}>Top</Button>
                <Button onClick={this.test.bind(this)}>test http ewsponse</Button>
                
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
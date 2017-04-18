require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FrontViewComponent from './FrontViewComponent';
import NavbarComponent from './NavbarComponent';
import TopBtnComponent from './TopBtnComponent';

import { Button } from 'react-bootstrap';
import axios from 'axios';


class AppComponent extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      childName: 'Initial-Name',
      dataList: [],
      showTop : false
      
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
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll).bind(this);
    }
    handleScroll(){
        let scrollTop = window.scrollY;
        console.log(scrollTop);
        scrollTop>200 ? this.setState({showTop:true}) :this.setState({showTop:false});

    /*  if(scrollTop >200){
        // console.log("++")
        this.setState({showTop: ''});
        //console.log(this.state.showTop);
        
      }else{
        // console.log("--")
        this.setState({showTop: 'hide'});
        //console.log(this.state.showTop);
        
      }  */
    
    }
    childProps(e){
        this.setState(
            {childName : 'ChildName Changed',
                showTop: true
            }
        )
    }

    test(){
        console.log(this.state.dataList);
        this.setState(
            {childName : 'ChildName Changed',
                showTop: true
            }
        )
    }
    render() {
        return (
            <div className = "index" >
                <NavbarComponent />
                <FrontViewComponent dataList={this.state.dataList} />
                <Button onClick={this.test.bind(this)}>test http ewsponse</Button>
                {this.state.showTop?<TopBtnComponent />:null}
                
                
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
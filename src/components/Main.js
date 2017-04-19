require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import FrontViewComponent from './FrontViewComponent';
import NavbarComponent from './NavbarComponent';
import TopBtnComponent from './TopBtnComponent';
import jsonData from './data.json';

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
        /*
        axios.get('http://localhost:8080/api/products')
            .then(response =>
            this.setState(
                {dataList: response.data}
            ))
            .catch(err => console.log(err));   */
        window.addEventListener('scroll', this.handleScroll.bind(this));
        this.setState({dataList: jsonData});
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll).bind(this);
    }
    handleScroll(){
        let scrollTop = window.scrollY;
        scrollTop>200 ? this.setState({showTop:true}) :this.setState({showTop:false});

    
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
    handleStatus(item){
        let idx = this.state.dataList.findIndex(x => x._id == item._id);
        this.state.dataList[idx] = item;
        this.setState({dataList:this.state.dataList});
    }
    stockHandle(item, v){
        let idx = this.state.dataList.indexOf(item);
        this.state.dataList[idx].Stock = v;
        this.setState({dataList: this.state.dataList})
    }
    deleteHandle(i){
        let idx = this.state.dataList.indexOf(i);
        this.state.dataList.splice(idx,1);
        this.setState({dataList: this.state.dataList})
    }
    render() {
        return (
            <div className = "index" >
                <NavbarComponent />
                <FrontViewComponent dataList={this.state.dataList}
                                    handleStatus={(item)=>this.handleStatus(item)}
                                    stockHandle={(item, v)=>this.stockHandle(item, v)}
                                    deleteHandle={(v)=> this.deleteHandle(v)} />
                <Button onClick={this.test.bind(this)}>test http ewsponse</Button>
                {this.state.showTop?<TopBtnComponent />:null}
                
                
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
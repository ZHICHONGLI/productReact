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
      dataList: [],
      showTop : false,
      filterList: [],
      filtering: false
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
        this.setState({filterList: this.state.dataList});
        //console.dir(this.state.dataList);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll).bind(this);
    }
    handleScroll(){
        let scrollTop = window.scrollY;
        scrollTop>200 ? this.setState({showTop:true}) :this.setState({showTop:false});
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
        let idxFilter = this.state.filterList.indexOf(i);
        this.state.dataList.splice(idx,1);
        this.state.filterList.splice(idxFilter,1);
        this.setState({dataList: this.state.dataList,
                       filterList: this.state.filterList
                })
    }
    handleSearch(key){
        if(!key){
            this.setState({filterList: this.state.dataList,
                           filtering : false
        });
            console.log(this.state.filterList);
        }
        console.log(key);
        let searchKey = key.toString().toLowerCase();
        let searchResult = [];
        for(let i = 0; i < this.state.dataList.length; i++){
            let name = this.state.dataList[i].Name.toLowerCase();
            let des = this.state.dataList[i].Description.toLowerCase();
            if(name.indexOf(searchKey)!== -1 || des.indexOf(searchKey)!== -1){
                searchResult.push(this.state.dataList[i]);
            }
        }
        this.setState({filterList: searchResult});
        if(key) {
            console.log(this.state.filterList);
            this.setState({filtering: true})
        };
    }  
    render() {
        return (
            <div className = "index" >
                <NavbarComponent />
                <FrontViewComponent dataList={this.state.filtering?this.state.filterList:this.state.dataList}
                                    filterList={this.state.filterList}
                                    handleStatus={(item)=>this.handleStatus(item)}
                                    stockHandle={(item, v)=>this.stockHandle(item, v)}
                                    deleteHandle={(v)=> this.deleteHandle(v)} 
                                    handleSearch={(key)=>this.handleSearch(key)} />
                {this.state.showTop?<TopBtnComponent />:null}
                
                
            </div>
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
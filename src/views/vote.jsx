import React, { Component } from 'react';
import Item from '../components/Item';
import {connect} from 'react-redux';

class vote extends Component {
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    render() {
        let {data} = this.props ;
        let {list} = this.state ;
        list = data.filter(item=>{
            if(item.count>0){
                return item
            }
        })
        let newShop=[];
        if(list.length){
            newShop=list.map((el,index)=>{
             return <Item key={index} item={el} isShow={false}></Item>})
        }
        return (
            <div className='vote'>
                <header>
                    <h2>主题</h2>
                    <span>朕决定投票以顺应民意</span>
                </header>
                <div className="nav">
                <button className='like' onClick={this.handle.bind(this)}>+添加喜欢的餐厅</button>
                </div>
                <div className="car">
                        {newShop}
                </div>
                <footer>
                    <button className='add' onClick={this.handleHome.bind(this)}>生成投票</button>
                </footer>
            </div>
        );
    }
    handle(){
        this.props.history.push('/shop')
    }
    handleHome(){
        this.props.history.push('/index')
    }
}
function state(state){
    return {
        data:state.data
    }
}
export default connect(state)(vote);
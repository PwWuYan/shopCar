import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';
class index extends Component {
    handleJump(){
        this.props.history.push('/shop')
    }
    render() {
        let {data} = this.props;
        let newData = data.filter(item=>{
            if(item.count>0){
                return item
            }
        })
        let newShop=[];
        if(newData.length){
            newShop=newData.map((el,index)=>{
             return <Item key={index} item={el} isShow={false}></Item>})
        }
        return (
            <div className='wrap' >
                <div className='head' onClick={this.handleJump.bind(this)}>
                    +创建投票                    
                </div>
                <div className="main">
                    <p>我创建的投票</p>
                    <div className="cont">
                        {newShop}
                    </div>
                </div>
            </div>
        );
    }
}
function state(state){
    return {
        data:state.data
    }
}
export default connect(state)(index);
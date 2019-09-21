import React, { Component } from 'react';
import {connect} from 'react-redux'
class Item extends Component {
    handleAdd(id){
        
        let {data} = this.props; 
        let newData=  data.map(item=>{
            if(item.shopId==id){
                item.count+=1;
                item.type=true
            }
            return item
        })
        this.props.dispatch({
            type:'GET_LIST',
            data:newData
        })
    }
    handleSub(id){
        let {data} = this.props; 
        let newData=  data.map(item=>{
            if(item.shopId==id){
                if(item.count==1){
                    item.type=false
                }
                if(item.count>0){
                    item.count-=1
                }
                
            }
            return item
        })
        this.props.dispatch({
            type:'GET_LIST',
            data:newData
        })
    }
    handleDel(id){
        let {data} = this.props
        let newData= data.map((item,index)=>{
            if(item.shopId===id){
                item.count=0
            }
            return item
        })
        this.props.dispatch({
            type:"GET_LIST",
            data:newData
        })
    }
    render() {
        let {item,isShow} = this.props;
        return (
                <dl>
                <dt>
                    <img src={item.defaultPic} alt=""/>
                </dt>
                <dd>
                    <h4>{item.shopName}</h4>
                    <span>￥{item.shopPower}人</span>
                    <li>{item.mainRegionName}</li>
                </dd>
                <div style={{display:isShow?"block":'none'}}>
                <button className='sub' onClick={this.handleSub.bind(this,item.shopId)}>-</button>
                <span className='count'>{item.count}</span>
                <button className='add' onClick={this.handleAdd.bind(this,item.shopId)}>+</button>
                </div>
                <div style={{display:isShow?"none":'block'}}>
                    <button className='del' onClick={this.handleDel.bind(this,item.shopId)}>删除</button>
                </div>
                
            </dl>
         
        );
    }
}
function state(state){
    return {
        data:state.data
    }
}
export default connect(state)(Item);
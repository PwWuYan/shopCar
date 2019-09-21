import React, { Component } from 'react';
import {connect} from 'react-redux';
import Item from '../components/Item';
class shop extends Component {
    constructor(props){
        super(props)
        this.state={
            type:false,
            sum:0
        }
    }
    render() {
        let {data} = this.props;
        let newList = data.map((item,index)=>{
            return <Item key={index} item={item} isShow={true}></Item>
        })
        let flag = data.some(item=>item.type)
        let ind =data.reduce((pre,val)=>{
            return pre+val.count
        },0)
        let shopList = data.filter(item=>{
            if(item.count>0){
                return item
            }
        })
        let newShop=[];
        if(shopList.length){
            newShop=shopList.map((el,index)=>{
             return <Item key={index} item={el} isShow={true}></Item>})

        }
        let {type,sum} = this.state
        sum=data.reduce((prev,val)=>{
        return prev+val.count*val.shopPower
    },0)
     
        return (
            <div className='shop'>
                <div className="shopHead">
                    <input type="text" name="" id="" placeholder="🔍输入商户名、地点、找优惠"/>
                    <ul>
                        <li>附近</li>
                        <li>美食</li>
                        <li>智能排序</li>
                    </ul>
                </div>
                <div className="main">
                    {newList}
                </div>
                <div className="foot">
                    <span className='span' onClick={this.handleChange.bind(this)}>
                        <p className='cont'>
                            {ind}
                        </p>
                    </span>
                    <button disabled={!flag} className={flag?'active':''} onClick={this.handle.bind(this)}>
                        确认添加
                    </button>
                    <div className='shopcar' style={{display:type?'block':'none'}}>
                        <div className='box'>
                             {newShop}
                             <span>
                                 总价:{sum}
                             </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
    handle(){
        this.props.history.push('/vote')
    }
    handleChange(){
        let {type} = this.state;
        this.setState({
            type:!type
        })
    }
}
function state(state){
    return {
        data:state.data
    }
}
export default connect(state)(shop);
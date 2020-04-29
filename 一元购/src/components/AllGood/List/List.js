import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { call_cart_action, del_cart_action } from '../../../store/store';
class List extends Component {
    render() {
        // console.log(this.props.history.location.state);

        let list = this.props.history.location.state;
        return (
            <div className="list">
                {
                   list.content.map((item, index) => {
                        return (
                            <Link key={index} className="item" to={{pathname:'/detail',state:item}}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <p>￥{item.price}</p>
                                </div>
                                <button className={`btn ${this.props.cartList.find((v)=>{return v.id===item.id}) ?'active' :''}`} onClick={(e)=>{e.preventDefault();this.props.add(item)}}>加入购物车</button>
                                {/* {
                                    this.props.cartList.find(v=>{return  v.id===item.id}) ? <button className='btn' onClick={(e)=>{e.preventDefault();this.props.del(item.id)}}>已加购物车</button>
                                    :<button className='btn' onClick={(e)=>{e.preventDefault();this.props.add(item)}}>加入购物车</button>
                                } */}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
export default  connect(
    (state)=>{
        return {
            cartList:state.list,
            flag:state.flag
        }
    },
    (dispatch)=>{
        return {
            add(item){
                dispatch(call_cart_action(item));
            },
            del(id){
                dispatch(del_cart_action(id));
            }
        }
    }
)(List)
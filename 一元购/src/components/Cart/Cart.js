import React, { Component } from 'react'
import TabBar from '../common/TabBar/TabBar';
import Header from '../common/Header/Header';
import { connect } from 'react-redux';
import { change_flag_action, next_action, prev_action, radio_action, sure_action } from '../../store/store';

class Cart extends Component {
    render() {
        // console.log(this.props.cartList);
        let cartList = this.props.cartList;

        // 常规处理方式  计件
        let num = 0;
        let price = 0;
        cartList.map(item => {
            if (item.flag) {
                num += item.count;
                price += (item.count * item.price);
            }
        })
        //上部代码为 计件 处理
        return (
            <div className='com'>
                <Header title='购物车'></Header>
                <div className="main">
                    <div className="cart-content">
                        <div className="cart-list">
                            {cartList.length ?
                                cartList.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            {/* 单选区 */}
                                            {/* <span className={`span ${this.props.flag ? 'active' : ''}`}>v</span> */}
                                            <span className={`span ${item.flag ? 'active' : ''}`} onClick={() => { this.props.radio(item.id) }}>v</span>
                                            <img src={item.img} alt="" />
                                            <div>
                                                <p>{item.title}</p>
                                                <p>￥{item.price}</p>
                                            </div>
                                            <div className='cart-btn'>
                                                <button onClick={() => { this.props.prev(item.id) }}>-</button>
                                                <span>{item.count}</span>
                                                <button onClick={() => { this.props.next(item.id) }}>+</button>
                                            </div>
                                        </div>
                                    )
                                }) : <div className="loading">购物车还未有商品！</div>
                            }
                        </div>
                        {
                            cartList.length ?
                            <div className="cart-footer">
                                {/* 全选区 */}
                                <p><span className={`span ${this.props.flag ? 'active' : ''}`} onClick={() => { this.props.changeFlag() }}>v</span> 全选</p>

                                {/* 计件 */}
                                {/* 常规处理方式 */}
                                {/* <p>共选中<b className='b-num'>{num}</b>件商品</p>
                                <p>总计:￥<b className='b-num'>{price.toFixed(2)}</b></p> */}

                                {/* reduce 函数运用 进行 计件 处理 */}
                                <p>共选中<b className='b-num'>{this.props.cartList.reduce((total, item) => {
                                    if (item.flag) {
                                        return total + item.count;
                                    } else {
                                        return total;
                                    }
                                }, 0)}</b>件商品</p>
                                <p>总计:￥<b className='b-num'>{this.props.cartList.reduce((total, item) => {
                                    if (item.flag) {
                                        return (total + item.count * item.price);
                                    } else {
                                        return total;
                                    }
                                }, 0).toFixed(2)}</b></p>
                            </div> : ''
                        }
                    </div>

                </div>
                <TabBar></TabBar>
                {
                    this.props.maskFlag &&
                    <div className="mask">
                        <div className="mask-div">
                            <h4>提示</h4>
                            <p>是否删除该商品？</p>
                            <div>
                                <button onClick={() => { this.props.sure(1) }}>确定</button>
                                <button onClick={() => { this.props.sure(0) }}>取消</button>
                            </div>
                        </div>
                    </div>
                }

            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            cartList: state.list,
            flag: state.flag,
            maskFlag: state.maskFlag,
        }
    },
    (dispatch) => {
        return {
            changeFlag() {
                dispatch(change_flag_action())
            },
            next(id) {
                dispatch(next_action(id));
            },
            prev(id) {
                dispatch(prev_action(id));
            },
            radio(id) {
                dispatch(radio_action(id));
            },
            sure(num) {
                dispatch(sure_action(num));
            }
        }
    }
)(Cart)

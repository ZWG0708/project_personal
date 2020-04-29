import React, { Component } from 'react'
import Axios from 'axios';
import { connect } from 'react-redux';
import { collect_action, call_collect_action } from '../../../sotre/sotre';

class Collect extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        Axios.get('/list').then(res => {
            this.setState({
                list: res.data.list,
            })
        })
    }
    render() {
        return (
            <div className="collect">
                <div className="collect-header">
                    <h3>本店精品</h3>
                </div>
                <div className="main">
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div key={item.id} className="item">
                                    <img src={item.img} alt="" />
                                    <div>
                                        <p>{item.title}</p>
                                        <p>￥{item.price}</p>
                                    </div>
                                    {
                                        this.props.lists.find((v, index) => { return v.id === item.id })
                                            ? <button className="collect-btn" onClick={() => { this.props.callCollect(item.id) }}>已收藏</button>
                                            : <button className="collect-btn" onClick={() => { this.props.collect(item) }}>收藏</button>
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="footer">
                    <button className="collect-foot">我的收藏</button>
                    {/* 因在本组件内去做展示,不去做跳转  跳转时解注下列代码 修改跳转地址 */}
                    {/* <button className="collect-foot" onClick={() => { this.props.history.push('/collect') }}>我的收藏</button> */}
                </div>
            </div>
        )
    }
}



export default connect(
    (state) => {
        return {
            lists: state,
        }
    },
    (dispatch) => {
        return {
            collect(item) {
                dispatch(collect_action(item));
            },
            callCollect(id) {
                dispatch(call_collect_action(id));
            }
        }
    }
)(Collect)


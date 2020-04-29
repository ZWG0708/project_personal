import React, { Component } from 'react'
import { connect } from 'react-redux';
import {call_collect_action} from '../../../sotre/sotre';
class MyCollect extends Component {
    render() {
        return (
            <div className='my-collect'>
                <div className="collect-header">
                    <h3>我的收藏</h3>
                </div>
                <div className="content">
                    {
                        this.props.list.length ? this.props.list.map((item, index) => {
                            return (
                                <div key={index} className="item">
                                    <img src={item.img} alt="" />
                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <p>{item.count}</p>
                                    </div>
                                    <button className="collect-btn" onClick={() => { this.props.callCollect(item.id) }}>取消收藏</button>
                                </div>
                            )
                        }) : <div className="hint">还没有收藏任何趣听！</div>
                    }
                </div>
            </div>
        )
    }
}


export default connect(
    (state) => {
        return {
            list: state,
        }
    },
    (dispatch) => {
        return {
            callCollect(id) {
                dispatch(call_collect_action(id));
            }
        }
    }
)(MyCollect)


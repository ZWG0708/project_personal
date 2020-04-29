import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { del_action, creat_action, amend_action } from '../../store/store';

class Table extends Component {
    render() {
        return (
            <div className="table">
                <div className="table-header">
                    <NavLink to='/home/0/add' onClick={() => { this.props.creatFlag() }}>新建</NavLink>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>标题</th>
                            <th>审核状态</th>
                            <th>点击</th>
                            <th>点发布人</th>
                            <th>更新时间</th>
                            <th>评论</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.allList.length &&
                            this.props.allList[0].content.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.state}</td>
                                        <td>{item.num}</td>
                                        <td>{item.name}</td>
                                        <td>{item.time}</td>
                                        <td></td>
                                        <td>
                                            <button onClick={() => { this.props.history.push({ pathname: '/home/0/add', state: item }); this.props.amend() }}>修改</button>
                                            <button onClick={() => { this.props.del(item.id) }}>删除</button>
                                        </td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
                {
                    this.props.allList.length && this.props.allList[0].content.length ? <div className="loading"></div> : <div className="loading">还没有任何</div>
                }
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            allList: state.allList,
        }
    },
    (dispatch) => {
        return {
            del(id) {
                dispatch(del_action(id));
            },
            creatFlag() {
                dispatch(creat_action());
            },
            amend() {
                dispatch(amend_action());
            }
        }
    }
)(Table)
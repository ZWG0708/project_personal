import React, { Component } from 'react'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { del_action, creat_action, amend_action } from '../../store/store';
import Page from './Page/Page';

class Table extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            page: 1,
            count: 2,
        }
    }

    componentDidMount() {  
        if (this.props.allList.length) {
            if(this.props.addFlag){
                this.setState({
                    page: Math.ceil((this.props.allList[0].content.length / this.state.count)),
                },()=>{
                    let lis = this.props.allList[0].content.slice((this.state.page - 1) * this.state.count, this.state.page * this.state.count);
                    this.setState({
                        list: lis,
                    },()=>{
                        
                    });
                })
            }
        }
    }
    change = (pages) => {    
        this.setState({ page: pages }, () => {
            let lis = this.props.allList[0].content.slice((this.state.page - 1) * this.state.count, this.state.page * this.state.count);
            this.setState({
                list: lis,
            })
        })
    }
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
                        {this.state.list.length &&
                            this.state.list.map((item, index) => {
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
                    {/* <tbody>
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
                    </tbody> */}
                </table>
                {
                    this.props.allList.length && <Page total={this.props.allList[0].content.length} Page={this.state.page} count={this.state.count} onchange={(pages) => { this.change(pages) }}></Page>
                }

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
            addFlag:state.addFlag,
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
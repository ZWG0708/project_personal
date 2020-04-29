import React, { Component } from 'react'

import Context from '../../../context/context';

export default class TableContent extends Component {
    render() {
        return (
            <div className="table-content">
            
                <Context.Consumer>
                    {
                        (value)=>{
                            console.log(value);
                        }
                    }
                </Context.Consumer>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td><button>修改</button><button>删除</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

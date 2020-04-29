import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div>
                    <li>首页</li>
                    <li>网站首页</li>
                </div>
                <div>
                    <li>管理员</li>
                    <li>修改密码</li>
                    <li>退出</li>
                </div>
            </div>
        )
    }
}

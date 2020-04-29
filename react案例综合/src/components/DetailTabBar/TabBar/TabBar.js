import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class TabBar extends Component {
    render() {
        return (
            <div className='tabBar'>
            {/* 只做了简易模型,模拟演示效果  该组件用于封装公用    */}
                <NavLink to='/home'>我的</NavLink>
                <NavLink to='/home'>你好</NavLink>
                <NavLink to='/home'>世界</NavLink>
                <NavLink to='/home'>我的</NavLink>
            </div>
        )
    }
}

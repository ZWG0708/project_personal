import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class TabBar extends Component {
    render() {
        return (
            <div className='tab-bar'>
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/all-good'>所有商品</NavLink>
                <NavLink to='/ovder'>最新成交</NavLink>
                <NavLink to='/cart'>购物车</NavLink>
                <NavLink to='/my'>我的</NavLink>
            </div>
        )
    }
}

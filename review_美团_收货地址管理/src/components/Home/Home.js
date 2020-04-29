import React, { Component } from 'react'
import Header from '../common/Header/Header';
import {NavLink} from 'react-router-dom';

export default class Home extends Component {
    render() {
        // console.log(this.props.history);
        
        return (
            <div className='home'>
                <Header title="个人信息" back={<span>&lt;</span>}></Header>
                <div className="home-content">
                    <NavLink to='/shipAddress'>收货地址<span>修改/添加 &gt;</span></NavLink>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import TabBar from '../common/TabBar/TabBar';
import Header from '../common/Header/Header';


export default class My extends Component {
    render() {
        return (
            <div className='com'>
                <Header title="我的"></Header>
                <div className="main">
                    <div className="my-list">
                    <li onClick={()=>{this.props.history.push('/collect')}}>我的收藏<span>&gt;</span></li>
                    </div>
                </div>
                <TabBar></TabBar>
            </div>
        )
    }
}

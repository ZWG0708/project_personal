import React, { Component } from 'react'
import TabBar from '../common/TabBar/TabBar';
import Header from '../common/Header/Header';


export default class Ovder extends Component {
    
    render() {
        return (
            <div className='com'>
                <Header title="最新成交"></Header>          
                <div className="main">
                </div>
                <TabBar></TabBar>
            </div>
        )
    }
}

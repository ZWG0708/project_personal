import React, { Component } from 'react'
import TabBar from '../common/TabBar/TabBar';
import Header from '../common/Header/Header';
import MySwiper from '../MySwiper/MySwiper';



export default class Home extends Component {
  
    render() {
        return (
            <div className='com'>
                 <Header title='首页' theme="light"></Header>              
                <div className="main">
                    <MySwiper></MySwiper>
                </div>
                <TabBar></TabBar>
            </div>
        )
    }
}


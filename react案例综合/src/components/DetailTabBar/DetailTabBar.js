import React, { Component } from 'react'
import TabBar from './TabBar/TabBar';

export default class DetailTabBar extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>TabBar组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}
                    <div className="describe-com">
                        <p className="describe">默认传参</p>
                        <TabBar></TabBar>
                    </div>
                </div>
            </div>
        )
    }
}

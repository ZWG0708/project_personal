import React, { Component } from 'react'
import Collect from './Collect/Collect';
import MyCollect from './MyCollect/MyCollect';

export default class DetailCollect extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>收藏or取消</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}
                    <div className="describe-com">
                    <p className="describe-two">批注：收藏/取消 ; 关注/取关 等功能类比相同</p>
                    </div>
                    <div className="describe-com">
                        <p className="describe">收藏or取消</p>
                        <Collect></Collect>
                    </div>
                    <div className="describe-com">
                        <p className="describe">上部的收藏展示</p>
                        <MyCollect></MyCollect>
                    </div>
                </div>
            </div>

        )
    }
}

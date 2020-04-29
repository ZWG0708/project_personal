import React, { Component } from 'react'
import Header from './Header/Header';
export default class DetailHeader extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    —  <span className='span-com'>Header组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}
                    <div className="describe-com">
                        <p className="describe">基础传参</p>
                        <Header title="我的首页"></Header>
                    </div>
                    <div className="describe-com">
                        <p className="describe">自定义模板 & 传入主题</p>
                        <Header title="我的首页" theme="dark">
                            <span onClick={() => { this.props.history.go(-1) }}>〈</span>
                        </Header>
                    </div>
                    <div className="describe-com">
                        <p className="describe">传入DOM</p>
                        <Header title="我的首页" col={<span onClick={() => { alert('获取更多') }}>...</span>}></Header>
                    </div>
                </div>

            </div>
        )
    }
}

import React, { Component } from 'react'

export default class DetailCart extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>购物车组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                        <p className="describe-two">批注：默认传参</p>
                    </div> */}
                    <div className="describe-com">
                        <p className="describe-two">批注1：思路——使用 redux 实现</p>
                        <p className="describe-two">批注2：可触发异步action 管理数据</p>
                        <p className="describe-two">批注3：案例"一元购"为购物车</p>
                    </div>
                </div>
            </div>
        )
    }
}

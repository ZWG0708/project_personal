import React, { Component } from 'react'
import Controlled from './Controlled/Controlled';

export default class DetailControlled extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>controlled组件</span> —
                    </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                            <p className="describe">默认传参</p>
                        </div> */}

                    <div className="describe-com">
                        <p className="describe-two">批注：登录,收货地址管理等功能 也是受控项 亦可实现</p>
                    </div>

                    <div className="describe-com">
                        <p className="describe">表单受控-简易演示</p>
                        <Controlled></Controlled>
                    </div>
                </div>
            </div>
        )
    }
}

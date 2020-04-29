import React, { Component } from 'react'

export default class DetailShip extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>ship组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                        <p className="describe-two">批注：默认传参</p>
                    </div> */}
                    <div className="describe-com">
                        <p className="describe-two">批注：此功能存在受控项,部分功能可做成受控组件</p>
                    </div>
                </div>
            </div>
        )
    }
}

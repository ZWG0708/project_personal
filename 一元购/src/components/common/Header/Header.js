import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className={`header ${this.props.theme==='light' ?'light' :''}`}>
                <span>{this.props.ret}</span>
                <p>{this.props.title}</p>
                <span></span>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className={`header ${this.props.theme==='dark' ? 'dark' :""}`}>
                <span className="header-span">{this.props.children}</span>
                <span>{this.props.title}</span>
                <span className="header-span">{this.props.col}</span>
            </div>
        )
    }
}

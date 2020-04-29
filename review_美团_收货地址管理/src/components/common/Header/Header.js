import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <span>{this.props.back}</span>
                <h3>{this.props.title}</h3>
                <span>{this.props.more}</span>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor() {
        super();
        this.state = {
            val: "",
        }
    }
    changeVal = (e) => {
        this.setState({
            val: e.target.value,
        })
    }
    render() {
        return (
            <div className="controlled">
                <input type="text" onChange={(e) => { this.changeVal(e) }} defaultValue={this.state.val} placeholder="请输入" />
                <p>{this.state.val}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Page extends Component {
    static defaultProps = {//默认值
        count: 10,//默认每页数据量
        total: 10,//默认数据总量
    }
    constructor() {
        super();
        this.state = {
            page: 1,//默认当前页
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            page: nextProps.Page,
        })
    }
    componentDidMount() {
        if (this.props.page && this.props.page>=1 && this.props.page <= Math.ceil((this.props.total / this.props.count))) {
            this.setState({
                page: this.props.page
            }, () => {                
                this.props.onchange(this.state.page)
            })
        }
    }
    prev = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1,
            }, () => {
                this.props.onchange(this.state.page)
            })
        }
    }
    next = () => {
        if (this.state.page < Math.ceil((this.props.total / this.props.count))) {
            this.setState({
                page: this.state.page + 1,
            }, () => {
                this.props.onchange(this.state.page)
            })
        }
    }
    current = (page) => {
        this.setState({
            page: page,
        }, () => {
            this.props.onchange(this.state.page)
        })
    }
    render() {
        let arr = [];
        for (let i = 1; i <= Math.ceil((this.props.total / this.props.count)); i++) {
            arr.push(i);
        }
        return (
            <div className="page">
                <li onClick={() => { this.prev() }}>&lt;</li>
                {
                    arr.length &&
                    arr.map((item, index) => {
                        return (
                            <li onClick={() => { this.current(item) }} className={this.state.page === item ? 'active' : ''} key={index}>{item}</li>
                        )
                    })
                }
                <li onClick={() => { this.next() }}>&gt;</li>
            </div>
        )
    }
}

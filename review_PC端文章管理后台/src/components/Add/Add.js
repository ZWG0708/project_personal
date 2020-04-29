import React, { Component } from 'react'
import { connect } from 'react-redux';
import { amend_action, add_action } from '../../store/store';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            title: '',
            name: "",
        }
    }
    componentDidMount() {
        if (this.props.history.location.state) {
            console.log(this.props.history.location.state);
            let item = this.props.history.location.state;
            this.setState({
                id: item.id,
                title: item.title,
                name:item.name,
            })
        }
    }
    render() {
        // console.log(this.props.flag);


        return (
            <div className='add'>
                <li>
                    <span className="title-content">分类：</span>
                    <select name="" id="">
                        <option value="">1</option>
                    </select>
                </li>
                <li>
                    <span className="title-content">标题：</span>
                    <input type="text" onChange={(e) => { this.setState({ title: e.target.value }) }} defaultValue={this.state.title} placeholder="请输入" />
                </li>
                <li>
                    <span className="title-content">作者：</span>
                    <input type="text" onChange={(e) => { this.setState({ name: e.target.value }) }} defaultValue={this.state.name} placeholder="请输入" />
                </li>
                <li>
                    <span className="title-content">缩略图：</span>
                    <input type="file" name="" id="" />
                </li>
                <li>
                    <span className="title-content">内容：</span>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </li>
                <li>
                    <span className="title-content"></span>
                    <button onClick={() => { this.props.history.push('/home/0/table'); this.props.add(this.state) }}>提交</button>
                    <button onClick={() => { this.props.history.push('/home/0/table') }}>返回</button>
                </li>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            flag: state.flag,
            allList: state.allList,
        }
    },
    (dispatch) => {
        return {
            add(item) {
                dispatch(add_action(item))
            }
        }
    }
)(Add)

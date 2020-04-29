import React, { Component } from 'react'
import Header from '../common/Header/Header';
import { connect } from 'react-redux';
import { change_flag_action, address_action, del_data_action, del_action } from '../../store/store';

// antd-mobile
import { Toast } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';

class Amend extends Component {
    constructor() {
        super();
        this.state = {
            val1: '',
            val2: '',
            val3: '',
            val4: '',
        }
    }

    render() {
        
        // console.log(this.props.allList[this.props.currIndex]);
        // {id: 1, name: "却无法对", tel: "当前", city: "短纤维却无法", sex: "女士"}
        let item = this.props.allList[this.props.currIndex];
        return (
            <div className="amend">
                <Header title={this.props.allFlag ? "编辑收货地址" : '新建收货地址'} more={this.props.allFlag ? <span onClick={() => { this.props.delData() }}>删除</span> : ''} back={<span onClick={() => { this.props.history.go(-1) }}>&lt;</span>}></Header>
                <div className="amend-content">
                    <div className="content">
                        <li>
                            <label htmlFor="">收货地址：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ val1: e.target.value }) }}
                                defaultValue={this.props.allFlag ? item.city : this.state.val1}
                                placeholder='请填写地址' />
                        </li>
                        <li>
                            <label htmlFor="">门牌号：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ val2: e.target.value }) }}
                                defaultValue={this.props.allFlag ? item.city : this.state.val2}
                                placeholder='详细地址,例：16号5层501室' />
                        </li>
                        <li>
                            <label htmlFor="">联系人：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ val3: e.target.value }) }}
                                defaultValue={this.props.allFlag ? item.name : this.state.val3} />
                        </li>
                        <li>
                            <label htmlFor=""></label>
                            <span><span
                                onClick={() => { this.props.changeFlag() }}
                                className={`span ${this.props.sexFlag ? '' : 'active'}`}>
                            </span>先生</span>
                            <span><span
                                onClick={() => { this.props.changeFlag() }}
                                className={`span ${this.props.sexFlag ? 'active' : ''}`}>
                            </span>女士</span>
                        </li>
                        <li>
                            <label htmlFor="">手机号：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ val4: e.target.value }) }}
                                defaultValue={this.props.allFlag ? item.tel : this.state.val4}
                                placeholder="填写手机号" />
                        </li>
                    </div>
                    <div className="con-btn">
                        <li><label htmlFor="">标签：</label> <span>家</span><span>公司</span><span>学校</span></li>
                    </div>
                    <button
                        onClick={() => {
                            this.props.address(this.state); Toast.success('保存成功', 1);
                            this.props.history.go(-1);
                        }}>保存地址
                    </button>
                </div>
                {
                    this.props.maskFlag &&
                    <div className="mask">
                        <div className="mask-com">
                            <div className="com-del">
                                地址删除后无法恢复
                                是否删除地址？
                            </div>
                            <div className="com-btn">
                                <button onClick={() => { this.props.del(0) }}>取消</button>
                                <button onClick={() => { this.props.del(1); this.props.history.push('/shipAddress') }}>删除</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            sexFlag: state.sexFlag,
            currIndex: state.currIndex,
            allFlag: state.flag,
            allList: state.allData,
            maskFlag: state.maskFlag,
        }
    },
    (dispatch) => {
        return {
            changeFlag() {
                dispatch(change_flag_action());
            },
            address(obj) {
                dispatch(address_action(obj));
            },
            delData() {
                dispatch(del_data_action());
            },
            del(num) {
                dispatch(del_action(num));
            }
        }
    }
)(Amend)

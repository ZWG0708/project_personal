import React, { Component } from 'react'
import Header from '../common/Header/Header';

export default class Amend extends Component {
    constructor() {
        super();
        this.state = {
            allFlag: false,
            allList: [],
            city: '',
            name: '',
            tel: '',
            id: 0,
        }
    }
    componentDidMount() {
        let allList = localStorage.getItem('allList') ? JSON.parse(localStorage.getItem('allList')) : [];
        let allFlag = JSON.parse(localStorage.getItem('allFlag')) || false;
        let id = localStorage.getItem('ship-id') ? JSON.parse(localStorage.getItem('ship-id')) : allList.length;
        this.setState({
            allFlag: allFlag,
            id: id,
        });
        if (allFlag) {
            let item = this.props.history.location.state;
            this.setState({
                city: item.city,
                name: item.name,
                tel: item.tel,
                id: item.id,
                maskFlag: false,
            })
        }
    }
    render() {
        return (
            <div className="amend">
                <Header title={this.state.allFlag ? '编辑收货地址' : '新建收货地址'} more={this.state.allFlag ? <span onClick={() => { this.delData(); }}>删除</span> : ''} back={<span onClick={() => { this.props.history.go(-1) }}>&lt;</span>}></Header>
                <div className="amend-content">
                    <div className="content">
                        <li>
                            <label htmlFor="">收货地址：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ city: e.target.value }) }}
                                defaultValue={this.state.city}
                                placeholder='请填写地址' />
                        </li>
                        <li>
                            <label htmlFor="">联系人：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ name: e.target.value }) }}
                                defaultValue={this.state.name} 
                                placeholder="填写联系人"/>
                        </li>
                        <li>
                            <label htmlFor="">手机号：</label>
                            <input type="text"
                                onChange={(e) => { this.setState({ tel: e.target.value }) }}
                                defaultValue={this.state.tel}
                                placeholder="填写手机号" />
                        </li>
                    </div>
                    <button
                        onClick={() => {
                            this.address();
                            this.props.history.go(-1);
                        }}>保存地址
                    </button>
                </div>
                {
                    this.state.maskFlag &&
                    <div className="mask">
                        <div className="mask-com">
                            <div className="com-del">
                                地址删除后无法恢复
                                是否删除地址？
                            </div>
                            <div className="com-btn">
                                <button onClick={() => { this.del(false) }}>取消</button>
                                <button onClick={() => { this.del(true); this.props.history.push('/shipAddress') }}>删除</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
    address = () => {//新建 / 修改 数据
        let allList = localStorage.getItem('allList') ? JSON.parse(localStorage.getItem('allList')) : [];
        if (this.state.allFlag) {
            let currIndex = allList.findIndex((item) => { return item.id === this.state.id });
            if (currIndex !== -1) {
                allList.splice(currIndex, 1, {
                    city: this.state.city,
                    name: this.state.name,
                    tel: this.state.tel,
                    id: this.state.id,
                })

                // 此方法首先进行深拷贝 再删除对象的多余属性 整体传输
                // let state=JSON.parse(JSON.stringify(this.state));
                // delete state. allFlag;
                // delete state. allList;
                // allList.splice(currIndex,1,state);
            }
        } else {
            allList.push({
                city: this.state.city,
                name: this.state.name,
                tel: this.state.tel,
                id: this.state.id,
            });
            this.setState({
                id: this.state.id + 1,
            }, () => {
                localStorage.setItem('ship-id', JSON.stringify(this.state.id));
            })
        }
        localStorage.setItem('allList', JSON.stringify(allList));
    }
    delData = () => {//删除弹框
        this.setState({
            maskFlag: true,
        });
    }
    del = (bool) => {//删除数据
        if (bool) {
            let allList = localStorage.getItem('allList') ? JSON.parse(localStorage.getItem('allList')) : [];
            let currIndex = allList.findIndex((item, id) => { return item.id === this.state.id });
            if (currIndex !== -1) {
                allList.splice(currIndex, 1);
            }
            localStorage.setItem('allList', JSON.stringify(allList));
        } else {
            this.setState({
                maskFlag: false,
            });
        }
    }
}
import React, { Component } from 'react'
import Header from '../common/Header/Header';
import Axios from 'axios';

export default class ShipAddress extends Component {
    constructor(){
        super();
        this.state={
            allList:[],
        }
    }
    componentDidMount(){
        // axios 可请求默认地址数据
        // Axios.get('/list').then(res=>{
        //     localStorage.setItem('allList',JSON.stringify(res.data.list));
        // })
    }
    render() {
        let allList = localStorage.getItem('allList') ? JSON.parse(localStorage.getItem('allList')) : [];
        return (
            <div className='ship-address'>
                <Header title="我的收货地址" back={<span onClick={() => { this.props.history.push('/home') }}>&lt;</span>}></Header>
                <div className="ship-content">
                    {allList.length ?
                        allList.map((item, index) => {
                            return (
                                <div key={item.id} className="ship-item">
                                    <div className="ads">
                                        <p>{item.name}<span>{item.tel}</span></p>
                                        <p className="city">{item.city}</p>
                                    </div>
                                    <div className="edit" onClick={() => { this.edit(); this.props.history.push({pathname:'/amend',state:item}) }}>编辑</div>
                                </div>
                            )
                        }) : <div className="loading">还没有任何收货地址</div>
                    }
                </div>
                <div className="footer">
                    <p onClick={() => {this.allFlag(); this.props.history.push('/amend') }}>新建收货地址</p>
                </div>
            </div>
        )
    }
    allFlag=()=>{//新建
        localStorage.setItem('allFlag',false); 
    }
    edit=()=>{//编辑
        localStorage.setItem('allFlag',true); 
    }
}

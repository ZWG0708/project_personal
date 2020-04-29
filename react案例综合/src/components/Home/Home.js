import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    componentDidMount() {

        //跳转模板
        // <div className="overall">
        //     <h2 className="title-com">
        //         <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
        //         — <span className='span-com'>BScroll组件</span> —
        //         </h2>
        //     <div className="content-com">
        //         {/* <div className="describe-com">
        //                 <p className="describe">默认传参</p>
        //                 <p className="describe-two">批注：默认传参</p>
        //             </div> */}
        //     </div>
        // </div>

    }
    render() {
        return (
            <div className="home">
                <h2 className="home-title">
                    React案例
                    <img src="/img/1.png" alt="" />
                </h2>
                <div className="home-content">
                    <NavLink to="/detail-header">Header组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-swiper">Swiper组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-table">Table组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-lazy">组件懒加载<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-better-scroll">better-scroll组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-paging">分页器组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-collect">收藏or取消<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-tabBar">TabBar组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-controlled">受控组件<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-cart">购物车<span className="ret">&gt;</span></NavLink>
                    <NavLink to="/detail-ship">收货地址管理<span className="ret">&gt;</span></NavLink>
                </div>
            </div>
        )
    }
}

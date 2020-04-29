import React, { Component } from 'react'
import MySwiper from './MySwiper/MySwiper';
import Axios from 'axios';


export default class DetailSwiper extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            count: 5,
        }
    }
    componentDidMount() {
        Axios.post('/swiper-list', { count: this.state.count }).then(res => {
            this.setState({
                list: res.data.list,
            })
        })
    }
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    —  <span className='span-com'>Swiper组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}

                    {/* 接口传参-轮播-水平轮播 */}
                    <div className="describe-com">
                        <p className="describe">接口传参-轮播-水平轮播</p>
                        <MySwiper list={this.state.list}></MySwiper>
                    </div>


                    {/* 该部分执行后 更改后 实例直接改变  效果实现失败 */}
                    {/* 接口传参-轮播-垂直平轮播 传入参数 direction */}
                    {/* <div className="describe-com">
                        <p className="describe">接口传参-轮播-水平轮播</p>
                        <MySwiper list={this.state.list} direction='vertical'></MySwiper>
                    </div> */}
                </div>
            </div>
        )
    }
}

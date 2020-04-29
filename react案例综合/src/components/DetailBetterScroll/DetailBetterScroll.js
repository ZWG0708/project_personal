import React, { Component } from 'react'
import BetterScroll from './BetterScroll/BetterScroll';
import Axios from 'axios';

export default class DetailBetterScroll extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            count: 10,
            list: [],
        }
    }

    adds = (page,bs) => {
        this.setState({
            page: page,
        }, () => {
            Axios.post('/bScroll-list',{page:this.state.page,count:this.state.count}).then(res=>{
                // console.log(res.data);
                this.setState({
                    list:this.state.list.concat(res.data.list),
                },()=>{
                    bs.finishPullUp();
                    bs.refresh();
                })
            });
        })
    }
    componentDidMount() {
        Axios.post('/bScroll-list', { page: this.state.page, count: this.state.count }).then(res => {
            console.log(res.data);
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
                    — <span className='span-com'>BScroll组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}

                    {/* 接口传参 */}
                    <div className="describe-com">
                        <p className="describe">接口传参</p>
                        <BetterScroll list={this.state.list} page={this.state.page} adds={this.adds}></BetterScroll>
                    </div>

                    <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div>
                </div>
            </div>
        )
    }
}



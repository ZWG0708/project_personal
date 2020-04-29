import React, { Component } from 'react'
import Pagination from './Pagination/Pagination';
import Axios from 'axios';
export default class DetailPagination extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            count: 10,
            list: [],
            total: 0,
            // dis: [],
        }
    }
    componentDidMount() {
        Axios.post('/paging-list', { page: this.state.page, count: this.state.count }).then(res => {
            // console.log(res.data);
            this.setState({
                list: res.data.list,
                total: res.data.total,
                // dis: res.data
            }, () => {
                // console.log(this.state.dis);

            });
        })
    }
    page_up = (pages) => {
        // console.log(pages);
        this.setState({
            page: pages,
        })
    }
    page_down = (pages) => {
        console.log(pages);
        this.setState({
            page: pages,
        })
    }

    render() {
        // let arr = [];
        // for (let i = 0; i < this.state.list.length; i++) {
        //     if (this.state.dis.count) {
        //         arr.push(i)
        //     }
        // }
        // console.log(arr);
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>Pagination组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}

                    {/* 分页器  传入-页数-总数-条数 */}
                    <div className="describe-com">
                        <p className="describe">传入-页数-总数-条数</p>
                        <Pagination page={this.state.page} total={this.state.total} count={this.state.count} page_down={this.page_down} page_up={this.page_up}></Pagination>


                        {/* 组件抛出 onChange  接口 回调执行  */}
                        {/* 定义事件 onChange 在 Pagination 组件内部执行 抛出当前页数 */}
                        {/* <Pagination page={this.state.page} total={this.state.total} count={this.state.count} onChange={(page)=>{console.log(page);}}></Pagination> */}
                    </div>
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                        {
                            arr.map((item,index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })
                        }
                    </div> */}
                </div>
            </div>
        )
    }
}

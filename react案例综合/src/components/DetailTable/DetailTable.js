import React, { Component } from 'react'
import TableContent from './TableContent/TableContent';
import Pagination from '../DetailPagination/Pagination/Pagination';
import Axios from 'axios';

// import Context from '../../context/context';

export default class DetailTable extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            count: 10,
            list: [],
            total: 0,
        }
    }
    componentDidMount() {
        Axios.post('/table-list', { page: this.state.page, count: this.state.count }).then(res => {
            // console.log(res.data);
            this.setState({
                list: res.data.list,
                total: res.data.total,
            });
        })
    }
    page_up = (pages) => {
        // console.log(pages);
        this.setState({
            page: pages,
        },()=>{
            Axios.post('/table-list', { page: this.state.page, count: this.state.count }).then(res => {
                // console.log(res.data);
                this.setState({
                    list: res.data.list,
                    total: res.data.total,
                });
            })
        })
    }
    page_down = (pages) => {
        console.log(pages);
        this.setState({
            page: pages,
        },()=>{
            Axios.post('/table-list', { page: this.state.page, count: this.state.count }).then(res => {
                // console.log(res.data);
                this.setState({
                    list: res.data.list,
                    total: res.data.total,
                });
            })
        })
    }

    render() {
        // console.log(this.state.page);
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    —  <span className='span-com'>Table组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}

                    <div className="describe-com">
                        <p className="describe">table传参</p>
                        {/* 跨组件传参 */}
                        <TableContent list={this.state.list}></TableContent>
                        <Pagination page={this.state.page} total={this.state.total} count={this.state.count} page_down={this.page_down} page_up={this.page_up}></Pagination>
                    </div>
                </div>
            </div>
        )
    }
}

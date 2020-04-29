import React, { Component } from 'react'
import Axios from 'axios';

export default class LazyList extends Component {
    constructor(){
        super();
        this.state={
            list:[],
        }
    }
    componentDidMount(){
        Axios.get('/lazy-list').then(res=>{
            this.setState({
                list:res.data.list,
            })
        })
    }
    render() {
        return (
            <div className="lazy-list">
                {
                    this.state.list.map((item,index)=>{
                        return (
                            <div key={item.id} className="lazy-list-item">
                                <img src={item.img} alt=""/>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

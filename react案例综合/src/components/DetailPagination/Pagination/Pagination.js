import React, { Component } from 'react'
// import Context from '../../../context/context';

export default class Pagination extends Component {
    constructor(){
        super();
        this.state={
            page:1,
        }
    }
    prev=()=>{    
        if(this.state.page>1){
            this.setState({
                page:this.state.page-1,
            },()=>{
                //  {/* 组件抛出 onChange  接口 回调执行  */}
                //  this.props.onChange(this.state.page);

                this.props.page_up(this.state.page)
            })
        }
    }
    next=(total,count)=>{
        if(this.state.page<(total/count)){
            this.setState({
                page:this.state.page+1,
            },()=>{
                //  {/* 组件抛出 onChange  接口 回调执行  */}
                //  this.props.onChange(this.state.page);

                    this.props.page_down(this.state.page);
            })
        }
        console.log(this.props);
    }
    componentDidMount(){
        let {page}=this.props;
        this.setState({
            page:page,
        })       
    }
 
    render() {
        let {total,count}=this.props;
        return (
            <div className="paging">
                <span className="spans" onClick={()=>{this.prev()}}>&lt;</span>
                <p><b>{this.state.page}</b>/<b>{total/count}</b></p>
                <span className="spans" onClick={()=>{this.next(total,count)}}>&gt;</span>
                {/* <Context.Provider value={this.state.page}></Context.Provider> */}
            </div>
        )
    }
}

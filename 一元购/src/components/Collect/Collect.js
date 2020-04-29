import React, { Component } from 'react'
import Header from '../common/Header/Header';
import { connect } from 'react-redux';

class Collect extends Component {
    render() {
        // console.log(this.props.collectList);
        
        return (
            <div className='com'>
                <Header title="我的收藏" ret={<span onClick={() => { this.props.history.go(-1) }}>&lt;</span>}></Header>
                <div className="collect-main">
                {   this.props.collectList.length 
                   ? this.props.collectList.map(item=>{
                        return (
                            <div key={item.id} className="item">
                                <img src={item.img} alt=""/>
                                <div>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        )
                    }) : <div className="loading">还没有收藏任何商品呦！</div>

                }
                </div>
            </div>
        )
    }
}



export default connect(
    (state)=>{
        return {
            collectList:state.collectList,
        }
    },
    (dispatch)=>{
        return {
            
        }
    }
)(Collect)

import React, { Component } from 'react'
import Header from "../common/Header/Header";
import { connect } from 'react-redux';
import { call_cart_action, collect_action, del_collect_action } from '../../store/store';

class Detail extends Component {
  render() {
    // console.log(this.props.history.location.state);
    let item = this.props.history.location.state;
    return (
      <div className="detail-home">
        <div className="com">
          <Header ret={<span className="ret" onClick={() => { this.props.history.go(-1) }}>&lt;</span>}></Header>
          <div className="main">
            <div className="detail-item">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
              {/* 点击收藏 */}
              {
                this.props.collectList.find(v => { return v.id === item.id })
                  ? <p className='collect active' onClick={() => { this.props.del_collect(item.id) }}>❤</p>
                  : <p className='collect' onClick={() => { this.props.collect(item) }}>♡</p>
              }
            </div>
          </div>
        </div>
        <div className="footer">
          <button className={`${this.props.cartList.find((v) => { return v.id === item.id }) ? 'active' : ''}`} onClick={() => { this.props.add(item) }}>加入购物车</button>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      cartList: state.list,
      collectList: state.collectList,
    }
  },
  (dispatch) => {
    return {
      add(item) {
        dispatch(call_cart_action(item));
      },
      collect(item) {
        dispatch(collect_action(item));
      },
      del_collect(id){
        dispatch(del_collect_action(id));
      }

    }
  }
)(Detail)

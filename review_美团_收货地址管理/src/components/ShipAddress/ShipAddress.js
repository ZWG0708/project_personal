import React, { Component } from 'react'
import Header from '../common/Header/Header';
import { connect } from 'react-redux';
import { req_action, edit_action, all_flag_action } from '../../store/store';

class ShipAddress extends Component {
    componentDidMount() {
        if (this.props.allList.length <= 0 && this.props.num===0) {
            this.props.reqData();
        }

    }
    render() {
        // console.log(this.props.allList);

        return (
            <div className='ship-address'>
                <Header title="我的收货地址" back={<span onClick={() => { this.props.history.push('/home') }}>&lt;</span>}></Header>
                <div className="ship-content">
                    {this.props.allList.length ?
                        this.props.allList.map((item, index) => {
                            return (
                                <div key={item.id} className="ship-item">
                                    <div className="ads">
                                        <p>{item.name}<span>{item.tel}</span></p>
                                        <p className="city">{item.city}</p>
                                    </div>
                                    <div className="edit" onClick={() => { this.props.edit(item.id); this.props.history.push('/amend') }}>
                                        编辑
                                    </div>
                                </div>
                            )
                        }) : <div className="loading">还没有任何收货地址</div>
                    }

                </div>
                <div className="footer">
                    <p onClick={() => { this.props.allFlag(); this.props.history.push('/amend') }}>新建收货地址</p>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            allList: state.allData,
            num: state.num,
        }
    },
    (dispatch) => {
        return {
            edit(id) {
                dispatch(edit_action(id));
            },
            allFlag() {
                dispatch(all_flag_action());
            },
            reqData() {
                dispatch(req_action());
            }
        }
    }
)(ShipAddress)

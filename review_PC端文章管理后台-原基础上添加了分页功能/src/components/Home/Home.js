import React, { Component } from 'react'
import Header from '../Header/Header';
import SideLeft from '../SideLeft/SideLeft';
import SideRight from '../SideRight/SideRight';
import { Switch, Route, Redirect, } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import { req_action } from '../../store/store';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
        }
    }
    componentDidMount() {
        this.props.reqData();
    }
    render() {
        return (
            <div className='home'>
                <Header></Header>
                <div className="home-content">
                <SideLeft list={this.props.allList}></SideLeft>
                    <Switch>
                        <Route path='/home/:index' component={SideRight}></Route>
                     {
                         this.props.allList.length && <Redirect to="/home/0"></Redirect>
                     }
                    </Switch>
                </div>
            </div>
        )
    }
}


export default connect(
    (state)=>{
        return {
            allList:state.allList
        }
    },
    (dispatch)=>{
        return {
           reqData(){
            dispatch(req_action());
           }
        }
    }
)(Home)

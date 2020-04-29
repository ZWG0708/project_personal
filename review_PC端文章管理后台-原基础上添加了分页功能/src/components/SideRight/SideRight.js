import React, { Component } from 'react'
import Table from '../Table/Table';
import Add from '../Add/Add';
import {Switch,Route,Redirect,NavLink} from 'react-router-dom';
export default class SideRight extends Component {
    render() {
        return (
            <div className="side-right">
            <div className="side-right-header">首页</div>
                <Switch>
                    <Route path="/home/0/table" component={Table}></Route>
                    
                    <Route path="/home/0/add" component={Add}></Route>
                    {
                        this.props.match.params.index == 0 && <Redirect to='/home/0/table'></Redirect>
                    }
                </Switch>
            </div>
        )
    }
}

import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}

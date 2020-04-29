import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
import ShipAddress from '../components/ShipAddress/ShipAddress';
import Amend from '../components/Amend/Amend';

export default class Router extends Component {
    render() {
        return (
            <Switch>
               <Route path="/home" component={Home}></Route>
               <Route path="/shipAddress" component={ShipAddress}></Route>
               <Route path="/amend" component={Amend}></Route>
               <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}

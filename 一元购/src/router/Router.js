import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
import AllGood from '../components/AllGood/AllGood';
import Ovder from '../components/Ovder/Ovder';
import Cart from '../components/Cart/Cart';
import My from '../components/My/My';
import Detail from '../components/Detail/Detail';
import Collect from '../components/Collect/Collect';

export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/all-good" component={AllGood}></Route>
                <Route path="/ovder" component={Ovder}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/my" component={My}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Route path="/collect" component={Collect}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}

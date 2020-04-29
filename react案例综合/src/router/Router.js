import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import DetailHeader from '../components/DetailHeader/DetailHeader';
import DetailSwiper from '../components/DetailSwiper/DetailSwiper';
import DetailTable from '../components/DetailTable/DetailTable';
import DetailLazy from '../components/DetailLazy/DetailLazy';
import DetailBetterScroll from '../components/DetailBetterScroll/DetailBetterScroll';
import DetailPagination from '../components/DetailPagination/DetailPagination';
import DetailCollect from '../components/DetailCollect/DetailCollect';
import DetailTabBar from '../components/DetailTabBar/DetailTabBar';
import DetailControlled from '../components/DetailControlled/DetailControlled';
import DetailCart from '../components/DetailCart/DetailCart';
import DetailShip from '../components/DetailShip/DetailShip';


export default class Router extends Component {
    render() {
        return (
            <Switch>
                <Route path='/home' component={Home}></Route>
                <Route path='/detail-header' component={DetailHeader}></Route>
                <Route path='/detail-swiper' component={DetailSwiper}></Route>
                <Route path='/detail-table' component={DetailTable}></Route>
                <Route path='/detail-lazy' component={DetailLazy}></Route>
                <Route path='/detail-better-scroll' component={DetailBetterScroll}></Route>
                <Route path='/detail-paging' component={DetailPagination}></Route>
                <Route path='/detail-collect' component={DetailCollect}></Route>
                <Route path='/detail-tabBar' component={DetailTabBar}></Route>
                <Route path='/detail-controlled' component={DetailControlled}></Route>
                <Route path='/detail-cart' component={DetailCart}></Route>
                <Route path='/detail-ship' component={DetailShip}></Route>
                <Redirect to="/home"></Redirect>
            </Switch>
        )
    }
}

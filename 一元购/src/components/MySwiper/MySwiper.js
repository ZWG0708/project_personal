import React, { Component } from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default class MySwiper extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src="https://dummyimage.com/100x100" alt=""/></div>
                    <div className="swiper-slide"><img src="https://dummyimage.com/100x100" alt=""/></div>
                    <div className="swiper-slide"><img src="https://dummyimage.com/100x100" alt=""/></div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

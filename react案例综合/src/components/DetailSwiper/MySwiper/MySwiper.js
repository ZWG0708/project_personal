import React, { Component } from 'react'
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default class MySwiper extends Component {
    static defaultProps={//默认props 定义轮播方向
        direction:"horizontal",
    }
    componentDidMount() {
        // new Swiper('.swiper-container', {
        //     direction: this.props.direction,
        //     loop: true,
        //     pagination: {
        //         el: '.swiper-pagination',
        //     },
        // });
    }
    componentDidUpdate(){//horizontal 水平轮播  //vertical  垂直轮播
        new Swiper('.swiper-container', {
            // direction: this.props.direction,
            loop: true,
            autoplay:true,
            pagination: {
                el: '.swiper-pagination',
            },
        });
    }
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <div key={item.id} className="swiper-slide"><img src={item.img} alt="" /></div>
                            )
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        )
    }
}

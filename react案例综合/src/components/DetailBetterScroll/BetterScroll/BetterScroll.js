import React, { Component } from 'react'
import BScroll from 'better-scroll';
export default class BetterScroll extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            count: 10,
        }
    }
    componentDidUpdate() {
        // let { page, adds, list } = this.props;
        // let bs = new BScroll('.wrapper', {
        //     pullDownRefresh: true,
        //     pullUpLoad: true,
        // });

        // bs.on('pullingDown', () => {
        //     console.log('pullingDown');
        //     bs.finishPullDown();
        //     bs.refresh();
        // })
        // bs.on('pullingUp', () => {
        //     console.log('pullingUp');
        //     page += 1;
        //     adds(page,bs);
        //     // bs.finishPullUp();
        //     // bs.refresh();
        // })

    }
    componentDidMount() {
        let { page, adds } = this.props;
        let bs = new BScroll('.wrapper', {
            pullDownRefresh: true,
            pullUpLoad: true,
        });

        bs.on('pullingDown', () => {
            console.log('pullingDown');

            bs.finishPullDown();
            bs.refresh();
        })
        bs.on('pullingUp', () => {
            console.log('pullingUp');
            page += 1;
            adds(page, bs);
            // bs.finishPullUp();
            // bs.refresh();
        })

    }
    render() {
        return (
            <div className="wrapper">
                <ul className="content">
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li key={index}>{item.id}-{item.name}-{item.title}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

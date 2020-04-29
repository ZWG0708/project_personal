import React, { Component, Suspense } from 'react'
import Loadable from 'react-loadable';

// react-loadable 懒加载
let LazyList = Loadable({
    loader: () => import('./LazyList/LazyList'),
    loading: () => <div className="loading">loading...</div>
});

// React.lazy 懒加载
let LazyLists = React.lazy(() => import('./LazyList/LazyList'));

export default class DetailLazy extends Component {
    render() {
        return (
            <div className="overall">
                <h2 className="title-com">
                    <span className="home-back" onClick={() => { this.props.history.push('/home') }}>〈</span>
                    — <span className='span-com'>Lazy组件</span> —
                </h2>
                <div className="content-com">
                    {/* <div className="describe-com">
                        <p className="describe">默认传参</p>
                    </div> */}

                    {/* react-loadable 懒加载*/}
                    <div className="describe-com">
                        <p className="describe">react-loadable 懒加载</p>
                        <LazyList></LazyList>
                    </div>
                    
                    {/* React.lazy 懒加载 */}
                    <div className="describe-com">
                        <p className="describe">React.lazy 懒加载</p>
                        <Suspense fallback={<div className="loading...">Loading...</div>}>
                            <LazyLists></LazyLists>
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import TabBar from '../common/TabBar/TabBar';
import Header from '../common/Header/Header';
import {Switch,NavLink,Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { all_action } from '../../store/store';
import List from './List/List';

class AllGood extends Component {
    componentDidMount(){
        this.props.reqData();
        // console.log(this.props.data);
    }
    render() {
        // console.log(this.props.data);

        return (
            <div className='com'>
             <Header title="所有商品"></Header>          
            <div className="main">
                <div className="all-good">
                    <div className="all-list">
                        {
                            this.props.data.map((item,index)=>{
                                return (
                                    <NavLink to={{pathname:`/all-good/${index}`,state:item}} key={index}>{item.nav}</NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="all-content">
                        <Switch>
                            <Route path='/all-good/:index' component={List}></Route>
                            {
                                this.props.data.length && <Redirect to={{pathname:'/all-good/0',state: this.props.data[0]}}></Redirect>
                            }
                            
                        </Switch>
                    </div>
                </div>
            </div>
            <TabBar></TabBar>
        </div>
        )
    }
}



export default connect(
    (state)=>{
        return {
            data:state.dataList,
        }
    },
    (dispatch)=>{
        return {
            reqData(){
                dispatch(all_action())
            }
        }
    },
    
)(AllGood)


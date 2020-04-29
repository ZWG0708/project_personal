import React, { Component } from 'react'
import {NavLink} from 'react-router-dom';
export default class SideLeft extends Component {
    render() {
        return (    
            <div className="side-left">
                <h2>菜单</h2>
                {
                    this.props.list.map((item,index)=>{
                        return (
                            <NavLink key={item.id} to={{pathname:`/home/${index}`,state:item}}>{item.navTitle}</NavLink>
                        )
                    })
                }
            </div>
        )
    }
}

import React,{Component} from 'react';
import Router from '../router/Router';

class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				<Router></Router>
            </div>
        )
    }
}

export default App;


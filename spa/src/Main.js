import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import {Button} from 'semantic-ui-react';

class Main extends Component{
    render(){
        return (<HashRouter>
             <div>
                <h1 id="title">SPA</h1>
                <ul className="header">
                    <li><NavLink to="/home"> <Button secondary size = 'big'>home </Button></NavLink></li>
                    <li><NavLink to="/stuff"> <Button secondary size = 'big'>stuff </Button></NavLink></li>
                    <li><NavLink to="/contact"> <Button secondary size = 'big'>contact </Button></NavLink></li>
                    <li><NavLink to="/about"> <Button secondary size = 'big'>about </Button></NavLink></li>
                    
                </ul>
                <div className = "content">
                    <Route path= "/home" component={Home}></Route>
                    <Route path= "/contact" component={Contact}></Route>
                </div>
            </div>
        </HashRouter>
        );
    }
}
export default Main;
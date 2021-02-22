import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import {Button} from 'semantic-ui-react';

class Main extends Component{
    render(){
        return (<HashRouter>
             <div>
                <h1>SPA</h1>
                <ul className="header">
                    <li><NavLink to="/1"> <Button secondary size = 'big'>home </Button></NavLink></li>
                    <li><NavLink to="/2"> <Button secondary size = 'big'>stuff </Button></NavLink></li>
                    <li><NavLink to="/3"> <Button secondary size = 'big'>contact </Button></NavLink></li>
                    <li><NavLink to="/4"> <Button secondary size = 'big'>about </Button></NavLink></li>
                    
                </ul>
                <div className = "content">
                    <Route path= "/1" component={Home}></Route>
                </div>
            </div>
        </HashRouter>
        );
    }
}
export default Main;
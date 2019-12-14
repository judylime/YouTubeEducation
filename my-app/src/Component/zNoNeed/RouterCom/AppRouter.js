import React, { Component } from 'react';
import NavBar from './NavBar';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Post from './Post';

class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <NavBar/>
                    {/* <h1>This is page</h1> */}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/About" component={About}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route path = "/:post_id" component={Post}/>
                    </Switch>

                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter

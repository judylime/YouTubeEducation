import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"

import Navbar from "../MainPage/NavbarLogInTrue"
import Home from '../Home/Home';
import VideoManager from '../VideoManager/VideoManager';
import Account from '../Account/Account';
import Login from '../MainPage/MainLogin';

class MainOld extends Component {
    render() {
        return (
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/VideoManager" component={VideoManager}/>
                    <Route path="/Account" component={Account}/>
                    <Route path="/Login" component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default MainOld;
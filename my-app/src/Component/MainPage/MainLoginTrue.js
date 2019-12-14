import React, { Component } from 'react';
import {Route, Switch,Redirect} from "react-router-dom"
import Home from '../Home/Home';
import Account from "../Account/Account"
import VideoManager from '../VideoManager/VideoManager';


const RouteFallback = (props) => {
    // console.log('route fallback with location: ', props.location);
    return <Redirect to={ {
        pathname: '/',
        from: props.location
    }} />
}

class MainLoginTrue extends Component {

    render() {
        return (
                <Switch>
                    <Route exact path="/" component = {Home}/>
                    <Route path="/VideoManager" component={VideoManager}/>
                    <Route path="/Account" component={Account}/> 
                    <Route component={RouteFallback}/> 
                </Switch>
        );
    }
}

export default MainLoginTrue;

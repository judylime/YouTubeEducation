import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainSignin from './MainSignin';
import {Route, Switch,Redirect} from "react-router-dom"
import {userLogIn,userLogOut} from "../aAction/actionUserState"
import "../../style/Main.css"
import MainSignUp from './MainSignUp';

// class MainLoginFalse extends Component {
//     render() {
//         return (
//                 <div className="login">
//                     <MainSignin userLogIn={this.props.userLogIn}/>
//                 </div>
//         );
//     }
// }

class MainLoginFalse extends Component {

    render() {
        const RouteFallback = (props) => {
            // console.log('route fallback with location: ', props.location);
            return <Redirect to={ {
                pathname: '/',
                from: props.location
            }} />
        }
        const SignIn = (props)=>{
            // console.log('route SignIn with location: ', props.location);
            return <MainSignin userLogIn={this.props.userLogIn} userState={this.props.userState}/>
        }
        const SignUp =(props)=> {
            // console.log('route SignUp with location: ', props.location);
            return <MainSignUp userLogIn={this.props.userLogIn} userState={this.props.userState}/>}
        return (
                <Switch>
                    <Route exact path="/" component = {SignIn}/>
                    <Route path="/SignIn" component = {SignIn}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route component={RouteFallback}/> 
                </Switch>

        );
    }
}

function mapStateToProps(state) {
    return {
        userState:state.userState
    };
}

function mapDispatchToProps(dispatch){
    return{
        userLogIn:(userState)=>dispatch(userLogIn(userState)),
        userLogOut:(userState)=>dispatch(userLogOut(userState)),
        }
}
export default connect(
    mapStateToProps,mapDispatchToProps
)(MainLoginFalse);
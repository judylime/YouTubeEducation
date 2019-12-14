import React, { Component } from 'react';
//import MainSignUp from "../MainPage/MainSignUp"
import {connect} from "react-redux";

class Account extends Component {
    render() {
        return (
            <div>
                <div className="center">Account</div>
                <div>{this.props.userState.loginState}</div>
                <h1>{this.props.userState.username}</h1> 
                {/* <MainSignUp/>*/}
                {/* <SearchPage/> */}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        userState:state.userState
    };
}


export default connect(
    mapStateToProps
)(Account);

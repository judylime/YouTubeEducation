import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../../style/MainPage.css"
import MainLoginFalse from './MainLoginFalse';
import MainLoginTrue from './MainLoginTrue';
// import {BrowserRouter, Route, Switch} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import NavbarLogInFalse from './NavbarLogInFalse';
import NavbarLogInTrue from './NavbarLogInTrue';

class Main extends Component {
  

  render() {
    // console.log(this.props.userState.loginState)
    let Navbar;
    let Body;
      if(this.props.userState.loginState===true){
          Navbar = <NavbarLogInTrue/>
          Body = <MainLoginTrue/>
      }else{ 
          Navbar = <NavbarLogInFalse/>
          Body =<MainLoginFalse/>
      }



    return (
      <BrowserRouter>
        <div className="wrapper">
          <header className="header">
            {Navbar}
          </header>
          <div className="body">
            <div className="aside-left"></div>
            <div className="main">
             {Body}
            </div>
            <div className="aside-right"></div>
          </div>
          <footer className="footer"></footer>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps=(state)=>{
    return {
        userState:state.userState
    };
}
export default connect(
    mapStateToProps
)(Main);
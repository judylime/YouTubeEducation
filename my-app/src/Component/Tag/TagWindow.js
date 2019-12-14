import React, { Component } from 'react';
import TagShow from './TagShow';
import {connect} from "react-redux"
import { Button } from 'antd';
class TagWindow extends Component {

    state={
        display:false,
        userTags:[],
        currentUserTags:[]
    }

    updatUserTags=(newUserTags)=>{
            // console.log(newUserTags)
            let userTags=newUserTags
            this.setState({
                userTags:userTags,
                currentUserTags:userTags
            })
    }
    openWindow=()=>{
        this.setState({
            display:true,
            userTags:this.props.userTags,
            currentUserTags:this.props.userTags
        })
        //send request to get tags from db
    }
    closeWindow=()=>{
        this.setState({display:false})
    }
    render() {
        // console.log("tagWindow show this.props.userTags",this.props.userTags)
        // console.log("tagWindow show this.state.userTags",this.state.userTags)
        return (
            <div className="tag">
                <Button 
                    className="TagButton"
                    type="primary" shape="circle"
                    onClick={this.openWindow}>
                    Tag
                </Button>
                {/* <button onClick={this.openWindow}>{this.props.name}</button> */}
                <TagShow 
                    show={this.state.display}
                    className="TagWindow"
                    closeWindow={this.closeWindow}
                    userTags={this.state.userTags}
                    currentUserTags={this.state.currentUserTags}
                />
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        userTags: state.userTags
    }
}

export default connect(mapStateToProps)(TagWindow);
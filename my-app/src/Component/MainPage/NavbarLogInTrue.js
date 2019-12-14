import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom"
import "../../style/MainPage.css"
import {connect} from "react-redux";
import {getUserVideoList,getUserVideoALL,setDisplayVideo} from "../../Component/aAction/actionGetUserVideoList"



class NavbarLogInTrue extends Component {
    handelClickVM=()=>{
        console.log("click VideoManager button")
        let getData=[]
        let {userState,userVideoList} = this.props
        //http://localhost:8080/YouTube/video/display?name=sissi@gmail.com   
        let urlVideoDisplay="/YouTube/video/display?name="+userState.username
        console.log("urlVideoDisplay",urlVideoDisplay)
        try{
            fetch(urlVideoDisplay)
            .then((response) => response.json())
            .then((videos)=>{
                //set video lsit to store data
                this.props.getUserVideoList(videos)
                console.log("urlVideoDisplay",urlVideoDisplay)
                console.log("get requst video",videos)
                console.log("this.props.userVideoList in HandelClick",this.props.userVideoList)
                //get each video's tags array
                let videoList=this.props.userVideoList 
                videoList.map((data)=>{
                    let vid=data.id
                    let uid=userState.username
                    let urlGetTags="/YouTube/tag/getTags?uid="+uid+"&vid="+vid
                    //console.log("Get Tags url:",urlGetTags)
                    try{
                        fetch(urlGetTags)
                        .then((response) => response.json())
                        .then((tags)=>{
                            let thisVideo={
                                ...data,
                                tags:tags
                            }
                            //console.log("Get thisVideo:",thisVideo)
                            getData=[...getData,thisVideo]
                            this.props.getUserVideoALL(getData) 
                            //console.log("Get getData:",getData)
                        })
                    }catch (error) {
                        console.log("Get Tags error")
                        }
                    })
                    //Set Default First row
                    //get default notes book
                    
                    console.log("vidoe",videos)
                    if(videos.length!==0){
                        let video=videos[0]
                        let vid=video.id
                        let uid=this.props.userState.username
                        let urlGetNotepad="/YouTube/notepad/getContent?uid="+uid+"&vid="+vid
                        try{
                            fetch(urlGetNotepad)
                            .then((response) => response.text())
                            .then((notes)=>{
                                let defaultVideo = {video:video, notes:notes}
                                this.props.setDisplayVideo(defaultVideo)
                                //console.log("Get display Vidoe:",this.props.displayVideo)
                            })
                        }catch (error) {
                            console.log("user dufault note display error")
                        } 
                    }

                     
            
                })
        }catch (error) {
            console.log("Get Tags error")
        }
    }
    render() {
        return (
            <nav className="Navbar">
                <div className="ProjectName">
                <Link  to="/">Youtube Education</Link>
                </div>
                <div className="Menue">
                    <Link className="MenueItem" to="/">Home</Link>
                    <NavLink 
                        className="MenueItem" to="/VideoManager" 
                        onClick={this.handelClickVM}
                        >
                        VideoManager
                    </NavLink>
                    <NavLink className="MenueItem" to="/Account">Account</NavLink>
                </div>
            </nav>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        userState:state.userState,
        userVideoList:state.userVideoList,
        UserVideoTag:state.UserVideoTag,
        displayVideo: state.displayVideo
    }
}
function mapDispatchToProps(dispatch){
    return{
        getUserVideoList:(userVideoList)=>dispatch(getUserVideoList(userVideoList)),
        getUserVideoALL:(UserVideoTag)=>dispatch(getUserVideoALL(UserVideoTag)),
        setDisplayVideo:(displayVideo)=>dispatch(setDisplayVideo(displayVideo))
        }
}
export default  connect(mapStateToProps,mapDispatchToProps)(NavbarLogInTrue);
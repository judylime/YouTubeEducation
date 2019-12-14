import React, { Component } from 'react';
import UserVideoList from './UserVideoList';
import {connect} from "react-redux";
import "../../style/VideoManager.css"
//import {setDisplayVideo} from "../../Component/aAction/actionGetUserVideoList"
import { Button } from 'antd';
//import SingleVideoButton from '../Home/SingleVideoButton';
import {setTagWindowDisplay,userTagsList} from "../aAction/actionEditTags"
import TagPopWindow from '../Tag/TagPopWindow';

class VideoManager extends Component {
    state = {
        selectVideoId:"",
        notepadContent:"",
        tagWindowDisplay :false,
    }

   componentWillReceiveProps(newProps) {
         console.log('Component WILL RECEIVE PROPS!')
        //  console.log("newProps",newProps)
        //  console.log("this.state",this.state)
        //  console.log("this.props",this.props)
         if(newProps.displayVideo.video!==""&&this.props.displayVideo.video===""){
             this.setState({
                selectVideoId:newProps.displayVideo.video,
                notepadContent:newProps.displayVideo.notes
             })
             //console.log("this.state",this.state)
         }
   }
    setselectVideoId=(newVideo)=>{
        //console.log("newId",newVideo)
        this.setState({
            selectVideoId:newVideo
        })
        let vid=newVideo.id
        let uid=this.props.userState.username
        let urlGetNotepad="/YouTube/notepad/getContent?uid="+uid+"&vid="+vid
        try{
            fetch(urlGetNotepad)
            .then((response) => response.text())
            .then((nots)=>{
                console.log("Get select Notepad data:",nots)
                this.setState({
                    notepadContent:nots
                })
                //console.log("State Notes:",this.state.notepadContent)
            })
        }catch (error) {
            console.log("user select note display error")
        }
    }
    handleChagne=(event)=>{
        //console.log(event.target.value)
        this.setState({
            notepadContent: event.target.value
        })
    }
    handleSubmit=(event)=>{
        // console.log(event.target)
        //hold keywords in search text
        event.preventDefault();
        //set keywords also get data from backend
        //YouTube/notepad/edit?vid=v2&uid=111@gmail.com&text=test user1 video2 
        let vid=this.state.selectVideoId.id
        let uid=this.props.userState.username
        let text = this.state.notepadContent
        let urlEditNotepad="/YouTube/notepad/edit?vid="+vid+"&uid="+uid+"&text="+text
        console.log(urlEditNotepad)
        try{
            fetch(urlEditNotepad)
            .then((response) => response.json())
            .then(data=>{
                //set global redux data of videolist
                // this.props.getVideoList(data)
                console.log("edit note success")
                console.log(data)
            })
        }catch (error) {
            console.log("search error")
        }
    }
    handleClickOpenTag=()=>{
        //get this video's user tages
        //if unlike, set null, if liked, send request
        let vid=this.state.selectVideoId.id
        let uid=this.props.userState.username
        let urlGetTags="/YouTube/tag/getTags?uid="+uid+"&vid="+vid
        //console.log("Get Tags url:",urlGetTags)
        try{
            fetch(urlGetTags)
            .then((response) => response.json())
            .then((tags)=>{
                this.props.userTagsList(tags)
            })
        }catch (error) {
            console.log("Get Tags error")
        }
        this.setTagWindowDisplay(true)
        //this.props.setCurrentVideo(this.state.selectVideoId)
    }
    setTagWindowDisplay=(display)=>{
        this.setState({
            tagWindowDisplay:display
        })
    }
    handleClickRemoveVideo=()=>{
        let vid=this.state.selectVideoId.id
        let uid=this.props.userState.username
        //get tag first
        let urlGetTags="/YouTube/tag/getTags?uid="+uid+"&vid="+vid
        console.log("Get Tags url:",urlGetTags)
        try{
            fetch(urlGetTags)
            .then((response) => response.json())
            .then((tags)=>{
                console.log("Current Tags",tags)
                //delete tag of this video and this user
                tags.map(()=>tag=>{
                    let tid= tag
                    let urlRemoveTag="/YouTube/tag/delete?uid="+uid+"&vid="+vid+"&tid="+tid
                    let options = {
                        method: 'DELETE',//post请求
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                        }}
                    try{
                        fetch(urlRemoveTag,options)
                        .then((response) => response.json())
                        .then(()=>{
                            console.log("urlRemoveTag",urlRemoveTag)
                        })
                    }catch (error) {
                        console.log("add tag error")
                    }
                })
            })
        }catch (error) {
            console.log("Get Tags error")
            }
        //send delete video request to server
        let removedVideo="/YouTube/video/delete?id="+vid
        let options = {
            method: 'DELETE',//post请求
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }
        }
        try{
            fetch(removedVideo,options)
            .then((response) => response.json())
            .then(()=>{
                console.log("removedVideo",removedVideo)
            })
        }catch (error) {
            console.log("add tag error")
        }
    }
    render() {
        return (      
            <div className="videoMbody">
                <TagPopWindow
                    tagWindowDisplay={this.state.tagWindowDisplay}
                    setTagWindowDisplay={this.setTagWindowDisplay}
                    currentVideo={this.state.selectVideoId}
                />
                <div className="videoMleft">
                    <div className="videoSinglePlayer" >
                        <iframe 
                            title = {this.state.selectVideoId.id+"url"}
                            key="id"
                            width="100%" height="100%"
                            src={"https://www.youtube.com/embed/"+this.state.selectVideoId.id}>
                        </iframe>
                    </div>
                    <div className="videoNote">
                        <form 
                            className="videoNoteForm"
                            onSubmit={this.handleSubmit}>
                            <div className="tagButton">
                                    <Button 
                                        className="VTagButton"
                                        type="primary" shape="circle"
                                        onClick={this.handleClickOpenTag} 
                                    >Tag</Button>
                                    <Button 
                                        className="VRemoveButton"
                                        type="default" 
                                        onClick={this.handleClickRemoveVideo} 
                                    >Remove Video</Button>
                                    
                                </div>
                            <div className="videoNoteFormMenue">
                                <label className="videoNoteFormLable">Notes</label>   
                                <Button className="videoNoteFormButton" type="primary">Save</Button>   
                            </div>
                            <input 
                                className="videoNoteFormInput"
                                type="Note" 
                                placeholder="Input Notes"
                                value={this.state.notepadContent}
                                onChange={this.handleChagne}/>   
                                        
                        </form>
                    </div>
                </div>
                <div className="videoMright">
                    <div className="videoList">
                        <UserVideoList 
                            setselectVideoId={this.setselectVideoId}
                        />
                    </div>
                    
                </div>
                {/* <SingleVideoPlayer/> */}
                
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        userState:state.userState,
        userVideoList:state.userVideoList,
        UserVideoTag:state.UserVideoTag,
        displayVideo: state.displayVideo,
        displayTagWindow:state.displayTagWindow,
    }
}
function mapDispatchToProps(dispatch){
    return{
        setTagWindowDisplay:(displayTagWindow)=>dispatch(setTagWindowDisplay(displayTagWindow)),
        userTagsList:(userTags)=>dispatch(userTagsList(userTags))
        }
}
export default  connect(mapStateToProps,mapDispatchToProps)(VideoManager);
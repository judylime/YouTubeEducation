import React, { Component } from 'react';
import SignleVideoContainer from './SignleVideoContainer';
import TagPopWindow from '../Tag/TagPopWindow';
import {connect} from "react-redux"
//get data and map to show each video pannel


const data = [
    {id: "0KlRgFEEz0g", url: "https://www.youtube.com/embed/0KlRgFEEz0g", title: "What Is React?", thumbnail: "https://i.ytimg.com/vi/0KlRgFEEz0g/default.jpg"}
    ,{id: "2dZiMBwX_5Q", url: "https://www.youtube.com/embed/2dZiMBwX_5Q", title: "Java Programming Tutorial 1 - Introduction to Java", thumbnail: "https://i.ytimg.com/vi/2dZiMBwX_5Q/default.jpg"}
    ,{id: "Ptbk2af68e8", url: "https://www.youtube.com/embed/Ptbk2af68e8", title: "O que o JavaScript é capaz de fazer? - Curso JavaScript #01", thumbnail: "https://i.ytimg.com/vi/Ptbk2af68e8/default.jpg"}
    ,{id: "bWDtPnNkutw", url: "https://www.youtube.com/embed/bWDtPnNkutw", title: "CSS Tutorial for Beginners - 08 - Font Family", thumbnail: "https://i.ytimg.com/vi/bWDtPnNkutw/default.jpg"}
    ,{id: "TgqeRTwZvIo", url: "https://www.youtube.com/embed/TgqeRTwZvIo", title: "What is UI vs. UX Design? A Practical Example in Under 6 Minutes", thumbnail: "https://i.ytimg.com/vi/TgqeRTwZvIo/default.jpg"}
    ,{id: "sXU1Os7cVEI", url: "https://www.youtube.com/embed/sXU1Os7cVEI", title: "Live UI/UX Design with Cindy Zheng - 1 of 3", thumbnail: "https://i.ytimg.com/vi/sXU1Os7cVEI/default.jpg"}
    ,{id: "n8FfeGF6_UA", url: "https://www.youtube.com/embed/n8FfeGF6_UA", title: "Live UI/UX Design with Matt D. Smith - hosted by Paul Trani 1/3", thumbnail: "https://i.ytimg.com/vi/n8FfeGF6_UA/default.jpg"}
    ,{id: "A2DdLAxvBiU", url: "https://www.youtube.com/embed/A2DdLAxvBiU", title: "How To Do UX User Research", thumbnail: "https://i.ytimg.com/vi/A2DdLAxvBiU/default.jpg"}    
]

class SearcheVideoDisplay extends Component {
    state={
        tagWindowDisplay :false,
        currentVideo:""
    }
    setTagWindowDisplay=(display)=>{
        this.setState({
            tagWindowDisplay:display
        })
    }
    setCurrentVideo=(video)=>{
        this.setState({
            currentVideo:video
        })
    }
    render() {
        console.log("props.searchVideoList",this.props.searchVideoList)
        let searchVideoList = (this.props.searchVideoList.length===0) ? 
            (data):(this.props.searchVideoList)
        // const searchVideoList=this.props.searchVideoList
        const videoDisplay = searchVideoList.length ? (
            searchVideoList.map(video=>{
                return (
                    <SignleVideoContainer 
                        key={video.id+"SV"} video={video}
                        setTagWindowDisplay={this.setTagWindowDisplay}
                        tagWindowDisplay={this.state.tagWindowDisplay}
                        setCurrentVideo={this.setCurrentVideo}
                        />
                );
            })

        ):(
            <div></div>
        )
        return(
            <div  className="SearchVideoContainer">
                {videoDisplay}
                <TagPopWindow
                    tagWindowDisplay={this.state.tagWindowDisplay}
                    setTagWindowDisplay={this.setTagWindowDisplay}
                    currentVideo={this.state.currentVideo}
                />
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        searchVideoList:state.searchVideoList
    }
}

export default  connect(mapStateToProps)(SearcheVideoDisplay);
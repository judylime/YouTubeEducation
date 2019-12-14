import React, { Component } from 'react';
//import Axios from 'axios';
import {getVideoList} from "../aAction/actionGetVideoList"
import {connect} from "react-redux"

class SearchWords extends Component {
    
    handleClick=()=>{
        //Axios.get("http://localhost:8080/YouTube/search")
        console.log("this.props.searchKeyword",this.props.searchKeyword)
        const keyword = this.props.searchKeyword
        fetch("/YouTube/search/"+keyword)
        .then((response) => response.json())
        .then(res=>{
            console.log("SearchData",res)
            this.props.getVideoList(res)
        })
    }

    render() {
        const {videoList}=this.props
        const videoListView = videoList.length ?(
            videoList.map( video=>{
                return(
                    <div className="post"  key={video.id}>
                        <img src={video.thumbnail} alt="VideoImage" className="videoImage" float="left"/>
                        <div className="video-information">
                            <ul>video ID:{video.id}</ul>
                            <ul>title:{video.title}</ul>
                            <ul>Video thumbnail:{video.thumbnail}</ul>
                            <ul>Video url:{video.url}</ul>
                            <button>Click This Video</button>
                        </div>
                    </div>
                )
            })

        ):(
            <div className="center">Loading video</div>
        )

        return (
            <div>
                <button onClick={this.handleClick}>Get Data</button>
                {videoListView}
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        videoList:state.videoList
    }
}
function mapDispatchToProps(dispatch){
    return{
        getVideoList:(videoList)=>dispatch(getVideoList(videoList))
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchWords);


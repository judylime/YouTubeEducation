import React, { Component } from 'react';
import VidoePalyer from './VidoePalyer';
import "../../style/SearchPage.css"
import SingleVideoButton from './SingleVideoButton';

class SignleVideoContainer extends Component {
    render() {
        const {video}= this.props
        return (
            <div className="SingleVideoContainer" key={video.id}>
                <VidoePalyer 
                    className="SingleVideoDisplayr" 
                    key={video.id+"V"} 
                    url ={video.id}  
                    height= '195'
                    width='320'
                />
                <p className="SingleVideoTitle">
                    Title : {video.title} 
                </p>
                <SingleVideoButton 
                    className="SingleVideoOperation"
                    key={video.id+"VB"}
                    video={video}
                    setTagWindowDisplay={this.props.setTagWindowDisplay}
                    tagWindowDisplay={this.props.tagWindowDisplay}
                    setCurrentVideo={this.props.setCurrentVideo}
                    />
            </div>
        );
    }
}

export default SignleVideoContainer;
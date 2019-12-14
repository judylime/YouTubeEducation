import React, { Component } from 'react';
import Rocket from "../../source/rocket.png"
import '../../index.css';

class VideoList extends Component {
    render(props) {
        return (
            <div>
                <img src={Rocket} alt="VideoImage" className="videoImage" float="left"/>
                <div className="video-information">
                    
                    <ul>Information</ul>
                    <button>Click This Video</button>
                </div>
                {/* <img src={Rocket} alt="VideoImage" className="videoImage" float="left"/>
                <img src="https://i.ytimg.com/vi/SrVV73gTBpk/default.jpg" alt="VideoImage" className="videoImage" float="left"/>
                <div className="video-information">
                    <ul>Title</ul>
                    <ul>Information</ul>
                    <button>Click This Video</button>
                </div> */}
            </div>
        )
    }
}

export default VideoList;
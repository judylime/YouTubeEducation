import React, { Component } from 'react';
import VidoePalyer from '../Home/VidoePalyer';

class SingleVideoPlayer extends Component {
    render() {
        return (
            <div>
                <VidoePalyer 
                            key="fnlJw9H0xAM" 
                            url ="fnlJw9H0xAM"
                            height= '360'
                            width='640'
                        />
                <div className="videolist">This is Video List</div>
            </div>
        );
    }
}

export default SingleVideoPlayer;
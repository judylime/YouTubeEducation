import React, { Component } from 'react';
import YouTube from '@u-wave/react-youtube';

class VidoePalyer extends Component {
    render() {
        return (
            <div>
            <YouTube
                video={this.props.url}
                height= {this.props.height}
                width={this.props.width}
                />
            </div>
        );
    }
}

export default VidoePalyer;
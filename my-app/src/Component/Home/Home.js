import React, { Component } from 'react';
import SearchVideo from './SearchVideo';
import "../../style/SearchPage.css"

class Home extends Component {
    render() {

        return (
            <div>
                <SearchVideo/>
                {/* <TagWindow/> */}
            </div>
        );
    }
}

export default Home;
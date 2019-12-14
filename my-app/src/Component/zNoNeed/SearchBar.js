import React, { Component } from 'react';
import SearchWords from './SearchWords';
import {Input} from "antd";


const {Search} = Input;
class SearchBar extends Component {
    state={searchKeyword:""}

    handelSearch=(keyword)=>{
        this.setState({
            searchKeyword:keyword
        });
        console.log(this.state)
        
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onSearch={value => this.setState({searchKeyword:value})}
                />
                <SearchWords searchKeyword={this.state.searchKeyword}/>
            </div>
        );
    }
}

export default SearchBar;
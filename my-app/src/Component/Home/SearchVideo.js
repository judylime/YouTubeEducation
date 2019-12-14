import React from 'react';
import {connect} from "react-redux"
import {getVideoList} from "../aAction/actionGetVideoList"
import { Button } from 'antd';
import SearcheVideoDisplay from './SearcheVideoDisplay';
//including searchbar and video show pannel


class SearchVideo extends React.Component {
    state = {
        keywords:"",
    }
    
    handleChagne=(event)=>{
        this.setState({
            keywords: event.target.value
        })
    }
    handleSubmit=(e)=>{
        //hold keywords in search text
        e.preventDefault();
        //set keywords also get data from backend
        let url="/YouTube/search/"+this.state.keywords
        console.log("search url",url)
        try{
            fetch(url)
            .then((response) => response.json())
            .then(data=>{
                //set global redux data of videolist
                this.props.getVideoList(data)
                console.log(data)
            })
        }catch (error) {
            console.log("search error")
        }
    }
    render() {
        return (
            <div className="HomePageBody">
                <form className="searchbar" onSubmit={this.handleSubmit}>
                    <input  className="searchbarInput"
                            type="text" placeholder="Input Keywords"
                            onChange={this.handleChagne} 
                            value={this.state.keywords}/>   
                    <Button 
                        className="searchbarButton"
                        type="primary" icon="search" size="large" >Search</Button>               
                </form>
                {/* <SearchVideoList searchVideoList={this.props.searchVideoList}/> */}
                <SearcheVideoDisplay/>
            </div>
        )
    }
}
// mapStateToProps：将state映射到组件的props中
const mapStateToProps=(state)=>{
    return{
        searchVideoList:state.searchVideoList
    }
}
// mapDispatchToProps：将dispatch映射到组件的props中
function mapDispatchToProps(dispatch){
    return{
        getVideoList:(searchVideoList)=>dispatch(getVideoList(searchVideoList))
        /*dispatch(setPageTitle(data)) 等价于：
        dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
        }
}
//connect绑定store从而监听
export default  connect(mapStateToProps,mapDispatchToProps)(SearchVideo);
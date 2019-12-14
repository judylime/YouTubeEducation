import {addPost} from "./postActions"
import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from "axios"

class GetData extends Component {
    handleClick=()=>{
        let getid = Math.floor(Math.random()*100);
        axios.get("https://jsonplaceholder.typicode.com/posts/"+getid)
        .then(respose=>{
            this.props.addPost(respose.data)
            console.log("Respos data",respose.data)
        })
        console.log("props data",this.props)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Get Data</button>
                {/* <div className="center">{this.state.id}</div>
                <div className="center">{this.state.title}</div>
                <div className="center">{this.state.body}</div> */}
            </div>
        );
    }
    
}

const  mapStateToProps = (state) => {
    console.log(state)
    return {
        post: state.post
    }
}

function mapDispatchToProps(dispatch){
    return{
        addPost:(post)=>dispatch(addPost(post))
        }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetData)
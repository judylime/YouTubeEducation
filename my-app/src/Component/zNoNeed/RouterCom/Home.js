import React from 'react';
//import axios from "axios"
import {Link} from "react-router-dom"
import Rocket from "../source/rocket.png"
import {connect} from "react-redux"
import GetData from '../redux/GetData';

class Home extends React.Component {

    render() {
        // console.log(this.props)
        // console.log("LogeData")
        const{posts} = this.props;
        const postList = posts.length ?(
            posts.map(post=>{
                return (
                    <div className="post card" key={post.id}>
                        <img src={Rocket} alt="A Pokeball" />
                        <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                        </Link>
                        <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ):(
            <p>No data</p>
        );
        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                <p>This is hoem page</p>
                <GetData/>
                {postList}
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}
export default connect(mapStateToProps)(Home);
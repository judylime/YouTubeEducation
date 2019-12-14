// import React, { Component } from 'react';

// class Login extends Component {
//     state={
//         userName:"1111",
//         passWords:"2222"
//     }
//     handleChange=(e)=>{
//         //console.log("event",e.target)
//         this.setState({
//             [e.target.id]:e.target.value
//         })
//     }
//     handelSubmit=(e)=>{
//         e.preventDefault();
//         console.log("state",this.state)
//         //example url:http://localhost:8080/YouTube/login?name=1111&pwd=2222
//         const url="/YouTube/login?name="+this.state.userName+"&pwd="+this.state.passWords
//         console.log("url",url)
//         fetch(url)
//         .then((response) => response.json())
//         .then(()=>{
//             //set global redux data of videolist
//             console.log('success')
//             //console.log("searchVideoList",this.state.searchVideoList)
//         // })
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handelSubmit}>
//                     <label>userName</label>
//                     <input type="text" name="userName" id="userName" onChange={this.handleChange} value={this.state.userName}/><br/>
//                     <label>passWords</label>
//                     <input type="text" name="passWords" id="passWords" onChange={this.handleChange} value={this.state.passWords}/><br/>
//                     <button onClick={this.handelSubmit}>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

// export default Login;
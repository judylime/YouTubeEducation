//import axios from "axios"

// function getDataFetch(){
//   let getid = Math.floor(Math.random()*10);
//   axios.get("https://jsonplaceholder.typicode.com/posts/"+getid)
//   .then(respose=>{
//       this.setState({
//           id:getid,
//           title:respose.data.title,
//           body: respose.data.body
//       });
//       console.log("this.state",respose)
//   })
  
// }


const initState={
    posts:[
        {id: '1', title: 'Squirtle Laid an Egg',body:"body 0001"},
        {id: '2', title: 'Charmander Laid an Egg',body:"body 0002"},
        {id: '3', title: 'a Helix Fossil was Found',body:"body 0003"},
    ]
    
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    console.log("initState",initState);
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    if(action.type ==="ADD_Data"){
      return{
        ...state,
        posts:[...state.posts,action.post]
      }
    }
    return state;
  }
  

  export default rootReducer

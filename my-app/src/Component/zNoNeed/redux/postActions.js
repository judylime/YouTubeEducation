export const deletePost = (id) =>{
    return {
        type:"DELETE_POST",
        id:id
    }
}


export const addPost = (post) =>{
    return {
        type:"ADD_Data",
        post:post
    }
}



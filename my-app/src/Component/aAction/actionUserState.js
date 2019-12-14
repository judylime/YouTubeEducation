//get user information
export const userLogIn=(userState)=>{    
    return{
        type:"LOG_IN",
        userState: userState
    }
}
//set user information to default
export const userLogOut=()=>{
    const defaultUserState=   
        {   loginState: false,
            username: null,
        }
    return{
        type:"LOG_OUT",
        userState: defaultUserState
    }
}
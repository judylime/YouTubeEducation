
const initeUserTagsState=["tag1","tag2","tag3","tag4"]
const initSearchVideoListState =[]

const initUSerState=
   {    loginState: false,
        username: null
        // Password: null,
        // Email: null,
    }

const initUserVideoTag=[
    {id: "", url: "", title: "", thumbnail: "", tags:[]}
]

const initState = {
    userState:initUSerState,
    searchVideoList:initSearchVideoListState,
    userTags: initeUserTagsState,
    userVideoList:[{id: "", url: "", title: "", thumbnail: ""}],
    //userVideoListTEST:testtUserVideoList2,
    UserVideoTag:null,
    displayVideo:{video:"",notes:""},
    currentVideo:"",
    displayTagWindow:false,

}
const myRootReducer = (state=initState,action) => {
    console.log("Current Action:",action);
    if(action.type==="ADD_DATA"){
        console.log("Global root state",state)
    }
    if(action.type ==="GET_VIDEOLIST"){
        return{
            ...state,
            searchVideoList:action.searchVideoList
            //videoList: state.videoList.concat(action.videoList)
            //videoList:[...state.videoList,action.videoList]
        }
    }
    if(action.type ==="GET_USERVIDEOLIST"){
        return{
            ...state,
            userVideoList:action.userVideoList
        }
    }
    if(action.type ==="GET_USERVIDEOAll"){
        return{
            ...state,
            UserVideoTag:action.UserVideoTag
        }
    }
    if(action.type ==="SET_DISPLAYVIDEO"){
        return{
            ...state,
            displayVideo:action.displayVideo
        }
    }
    if(action.type ==="SET_CURRENTVIDEO"){
        return{
            ...state,
            setCurrentVideo:action.setCurrentVideo
            //videoList: state.videoList.concat(action.videoList)
            //videoList:[...state.videoList,action.videoList]
        }
    }
    if(action.type ==="EDIT_TAGS"){
        console.log("user tags list",state.userTags)
        return{
            ...state,
            userTags:action.userTags
        }
    }
    if(action.type ==="SET_TAGWINDOWDISPLAY"){
        return{
            ...state,
            displayTagWindow:action.displayTagWindow
        }
    }
    if(action.type ==="LOG_IN"){
        //console.log("User state",state.userState)
        return{
            ...state,
            userState:action.userState
        }
    }else  if(action.type ==="LOG_OUT"){
        console.log("User state",state.userState)
        return{
            ...state,
            userState:action.userState
        }
    }
    return state;
};

export default myRootReducer;
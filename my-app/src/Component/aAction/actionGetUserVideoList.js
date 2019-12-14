export const getUserVideoList=(userVideoList)=>{
    return{
        type:"GET_USERVIDEOLIST",
        userVideoList: userVideoList
    }
}

export const getUserVideoALL=(UserVideoTag)=>{
    return{
        type:"GET_USERVIDEOAll",
        UserVideoTag: UserVideoTag
    }
}

export const setDisplayVideo=(displayVideo)=>{
    return{
        type:"SET_DISPLAYVIDEO",
        displayVideo: displayVideo
    }
}

export const setCurrentVideo=(currentVideo)=>{
    return{
        type:"SET_CURRENTVIDEO",
        currentVideo: currentVideo
    }
}
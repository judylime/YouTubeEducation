export const userTagsList=(userTags)=>{
    return{
        type:"EDIT_TAGS",
        userTags: userTags
    }
}

export const setTagWindowDisplay=(displayTagWindow)=>{
    return{
        type:"SET_TAGWINDOWDISPLAY",
        displayTagWindow: displayTagWindow
    }
}

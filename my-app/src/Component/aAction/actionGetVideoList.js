export const getVideoList=(searchVideoList)=>{
    return{
        type:"GET_VIDEOLIST",
        searchVideoList: searchVideoList
    }
}
// import React, { Component } from 'react';
// import {connect} from "react-redux"
// import TagWindow from '../Tag/TagWindow';
// import VidoePalyer from './VidoePalyer';
// import "../../style/SearchPage.css"
// import { Icon ,Button } from 'antd';

// const data = [
//     {id: "PkZNo7MFNFg", url: "https://www.youtube.com/embed/PkZNo7MFNFg", title: "Learn JavaScript - Full Course for Beginners", thumbnail: "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg"}
//     ,{id: "W6NZfCO5SIk", url: "https://www.youtube.com/embed/W6NZfCO5SIk", title: "JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour [2019]", thumbnail: "https://i.ytimg.com/vi/W6NZfCO5SIk/default.jpg"}
//     ,{id: "Ptbk2af68e8", url: "https://www.youtube.com/embed/Ptbk2af68e8", title: "O que o JavaScript é capaz de fazer? - Curso JavaScript #01", thumbnail: "https://i.ytimg.com/vi/Ptbk2af68e8/default.jpg"}
//     ,{id: "Ukg_U3CnJWI", url: "https://www.youtube.com/embed/Ukg_U3CnJWI", title: "Learn JavaScript in 12 Minutes", thumbnail: "https://i.ytimg.com/vi/Ukg_U3CnJWI/default.jpg"}
//     ,{id: "hdI2bqOjy3c", url: "https://www.youtube.com/embed/hdI2bqOjy3c", title: "JavaScript Crash Course For Beginners", thumbnail: "https://i.ytimg.com/vi/hdI2bqOjy3c/default.jpg"}
//     ,{id: "upDLs1sn7g4", url: "https://www.youtube.com/embed/upDLs1sn7g4", title: "What is JavaScript?", thumbnail: "https://i.ytimg.com/vi/upDLs1sn7g4/default.jpg"}
//     ,{id: "RqQ1d1qEWlE", url: "https://www.youtube.com/embed/RqQ1d1qEWlE", title: "Curso Javascript para Principiantes", thumbnail: "https://i.ytimg.com/vi/RqQ1d1qEWlE/default.jpg"}
//     ,{id: "10WnvBk9sZc", url: "https://www.youtube.com/embed/10WnvBk9sZc", title: "JavaScript interview with a Google engineer", thumbnail: "https://i.ytimg.com/vi/10WnvBk9sZc/default.jpg"}
//     ,{id: "ylakWC0VcEM", url: "https://www.youtube.com/embed/ylakWC0VcEM", title: "Как выучить JavaScript? Самый аху#### способ!", thumbnail: "https://i.ytimg.com/vi/ylakWC0VcEM/default.jpg"}
//     ,{id: "nItSSTwBvSU", url: "https://www.youtube.com/embed/nItSSTwBvSU", title: "What is JavaScript?", thumbnail: "https://i.ytimg.com/vi/nItSSTwBvSU/default.jpg"}
//     ,{id: "ylakWC0VcEM", url: "https://www.youtube.com/embed/ylakWC0VcEM", title: "Как выучить JavaScript? Самый аху#### способ!", thumbnail: "https://i.ytimg.com/vi/ylakWC0VcEM/default.jpg"}
//     ,{id: "nItSSTwBvSU", url: "https://www.youtube.com/embed/nItSSTwBvSU", title: "What is JavaScript?", thumbnail: "https://i.ytimg.com/vi/nItSSTwBvSU/default.jpg"}
//     ]

// const HeartSvg = () => (
//     <svg width="2em" height="2em" fill="currentColor" viewBox="0 0 1024 1024">
//       <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
//     </svg>
//   );
// const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

// class SearchVideoList extends Component {
//     state={
//         likeIconColor:"white"
//     }

//     handleClickFavorite=(v,e)=>{
//         //console.log(v)
//         // /favorite?name=A&id=B&tittle=C&thumbnail=D&url=E
//         let name=this.props.userState.username
//         let id=v.id
//         let url=v.url
//         let title=v.title
//         // let thumbnail=v.thumbnail

//         if(e.target.style.color===""){
//             //need to like video
//             //send request
//             //if request success, set color to hotpink
//             e.target.style.color="hotpink"              
//             let urlFavorite="/YouTube/favorite/?name="+name+"&id="+id+"&title="+title+"&url="+url
//                             //+"&thumbnail="+thumbnail
//             console.log("urlFavorite",urlFavorite)
//             try{
//                 fetch(urlFavorite)
//                 .then((response) => response.json())
//                 .then(()=>{
//                     console.log("favorite video",name,id)
//                 })
//             }catch (error) {
//                 console.log("favorite video error")
//                 e.target.style.color=""
//             }
//             console.log("Like color",e.target.style.color)
//         }else{
//             //need to remove video from list
//             //send request to server
//             //set color back
//             e.target.style.color=""
//             console.log("Remove color",e.target.style.color)
//         }



        
//         // let urlFavorite="/YouTube/favorite/?name="+name+"&id="+id+"&title="+title+"&url="+url
//         //                 //+"&thumbnail="+thumbnail
//         // console.log("urlFavorite",urlFavorite)
//         // try{
//         //     fetch(urlFavorite)
//         //     .then((response) => response.json())
//         //     .then(()=>{
//         //         console.log("favorite video",name,id)
//         //     })
//         // }catch (error) {
//         //     console.log("favorite video error")
//         // }
//     }


//     render() {
//         //const {searchVideoList}=this.props
//         const searchVideoList=data
//         const videoListView = searchVideoList.length ?(
//             searchVideoList.map( video=>{
//                 return(
//                     <div className="SingleVideoContainer"  key={video.id}>
//                         {/* <iframe src={video.url}></iframe> */}
//                         <VidoePalyer 
//                             className="SingleVideoDisplayr" 
//                             key={video.id} 
//                             url ={video.id} 
//                             height= '195'
//                             width='320'
//                         />
//                         <div className="SingleVideoInformation">
//                             <p className="SingleVideoTitle">
//                                 Title : {video.title} 
//                             </p>
//                             <div className="SingleVideoOperation">
//                                 <TagWindow 
//                                     className="SingleVideoTag"
//                                     key={video.id} 
//                                     name="Tag"
//                                     vidoId={video.id} 
//                                 />
//                                 <Button 
//                                         className="SingleVideoLike"  
//                                         type="link" 
//                                         onClick={(e) => this.handleClickFavorite(video,e)}>
//                                     <HeartIcon/>
//                                 </Button>
//                             </div>
                       
//                         </div>
                        
//                     </div>
//                 )
//             })

//         ):(
//             <div className="videoShow">Loading video</div>
//         )

//         return (
//             <div className="videoShow" >
//                 {/* <h4>Search Result</h4> */}
//                 {videoListView}
//             </div>
//         );
//     }
// }

// const mapStateToProps=(state)=>{
//     return{
//         videoList:state.videoList,
//         userState:state.userState
//     }
// }

// export default connect(mapStateToProps)(SearchVideoList);


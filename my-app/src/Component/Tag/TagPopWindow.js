import React, { Component } from 'react';
import "../../style/SearchPage.css"
import TagEdit from './TagEdit';
import {connect} from "react-redux"
import { Button } from 'antd';
class TagPopWindow extends Component {
        state={
                addTags:[],
                removeTags:[],
                currentTags:this.props.userTags
            } 
        handleClickCloseTag=()=>{
            this.props.setTagWindowDisplay(false)
        }
        render() {     
            return (
                <div className="TagWindow"
                    style={{
                        transform:this.props.tagWindowDisplay ?"translateY(0)":"translateY(-100vh)",
                        opacity:this.props.tagWindowDisplay ? "1":0
                    }}
                > 
                    <div className="TagWindowOperation">
                        <p className="TagWindowTittle">Tags</p>
                        <Button className="TagWindowClose"
                                onClick={this.handleClickCloseTag}
                                type="primary" icon="close" 
                        ></Button>
                    </div>
                    <TagEdit
                        userTags={this.props.userTags} 
                        currentVideo={this.props.currentVideo}
                    />
                    {/* <br/>
                    <button className="left" onClick={this.handleUpdateTgas.bind(this)}>Save</button>
                    <button className="right" onClick={this.props.closeWindow}>Cancle</button> */}
                </div>
            );
        }
    }
    const mapStateToProps=(state)=>{
        return{
            userTags: state.userTags
        }
    }
    
    export default connect(mapStateToProps)(TagPopWindow);

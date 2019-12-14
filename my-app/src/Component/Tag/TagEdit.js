import React, { Component } from 'react';
import { Tag, Input, Tooltip, Icon } from 'antd';
import {connect} from "react-redux"
import {userTagsList} from "../aAction/actionEditTags"
import "../../style/SearchPage.css"

class TagEdit extends Component {
    state = {
        inputVisible: false,
        inputValue: ''
      };
    showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
        };
    saveInputRef = input => (this.input = input);
    handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
        };
    handleInputConfirm = () => {
        //add tags to addtags array 
        console.log("handleInputConfirm")
        const { inputValue } = this.state;
        let  UserTags  = this.props.userTags;
        if (inputValue) {
            //if (inputValue && UserTags.indexOf(inputValue) === -1) {   
            UserTags = [...UserTags,inputValue];
            this.props.userTagsList(UserTags)
            //send add tag request
            let uid=this.props.userState.username
            let vid=this.props.currentVideo.id
            let name=inputValue
            let urlAddTag="/YouTube/tag/add?uid="+uid+"&vid="+vid+"&name="+name
            try{
                fetch(urlAddTag)
                .then((response) => response.json())
                .then(()=>{
                    console.log("urlAddTag",urlAddTag)
                })
            }catch (error) {
                console.log("add tag error")
            }
        }
        this.setState({
            inputVisible: false,
            inputValue: '',
            });

    };
    handleClose = removedTag => {
        const leftTags = this.props.userTags.filter(tag => tag !== removedTag);
        this.props.userTagsList(leftTags)
        //send remove requst for server
        let uid=this.props.userState.username
        let vid=this.props.currentVideo.id
        let tid= removedTag
        let urlRemoveTag="/YouTube/tag/delete?uid="+uid+"&vid="+vid+"&tid="+tid
        let options = {
            method: 'DELETE',//post请求
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            }}
        try{
            fetch(urlRemoveTag,options)
            .then((response) => response.json())
            .then(()=>{
                console.log("urlRemoveTag",urlRemoveTag)
            })
        }catch (error) {
            console.log("add tag error")
        }

        };
        

    render() {
        //console.log("Testdata.props",this.props)

        const{userTags}=this.props
        const {inputVisible, inputValue } = this.state;
        //<div className="TagWindowEditWindow" >
        //console.log("userTags",this.state.userTags);
        return (
            <div className="TagWindowEditWindow" >
                <div>
                {inputVisible && (
                    <Input
                        className="TagWindowSingleTag"
                        ref={this.saveInputRef}
                        type="text"
                        size="small"
                        style={{ width: 78 }}
                        value={inputValue}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputConfirm}
                        onPressEnter={this.handleInputConfirm}
                    />
                )}
                {!inputVisible && (
                    <Tag 
                        className="TagWindowSingleTag"
                        onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                        <Icon type="plus" /> New Tag
                    </Tag>
                )}
                </div>

                {userTags.map((tag, index) => {
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag 
                            className="TagWindowSingleTag"
                            key={tag} closable={index !== -1} onClose={() => this.handleClose(tag)}>
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip 
                            className="TagWindowSingleTag"
                            title={tag} key={tag}>
                        {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                })}

            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        videoList:state.videoList,
        userState:state.userState,
        userTags: state.userTags
    }
}
function mapDispatchToProps(dispatch){
    return{
        userTagsList:(userTags)=>dispatch(userTagsList(userTags))
        }
}
export default connect(mapStateToProps,mapDispatchToProps)(TagEdit);

import React, { Component } from 'react';
import "../../style/SearchPage.css"
import TagEdit from './TagEdit';
import { Button } from 'antd';

class TagShow extends Component {
    state={
            addTags:[],
            removeTags:[],
            currentTags:this.props.userTags
        } 
    componentWillReceiveProps(props){
        // console.log("componentWillReceiveProps,old stete",this.state)
        // console.log("componentWillReceiveProps",props.userTags)
        return(
            this.setState({
                currentTags:props.userTags   
               })
            //console.log("componentWillMount,new stete",this.state)
        )

    }
    setAddTags=(newAddTags)=>{
        //console.log("currentTags",this.state.currentTags.length)
        const newTagId=this.state.currentTags.length+1
        //add user id, video id to request
        const newTag={tagId:newTagId,tagName:newAddTags}
        this.setState({
            addTags:[...this.state.addTags,newTag],
            currentTags:[...this.state.currentTags,newTag]
        })
        console.log("newAddTags",newTag);
    }
    setRemoveTags=(newRemoveTages)=>{
        console.log("newRemoveTages",newRemoveTages);
        const newCurrentTags=this.state.currentTags.filter(tag=>tag.tagName!==newRemoveTages.tagName);
        //console.log("TagShow");
        this.setState({
            //add removeTags in array
            currentTags:newCurrentTags,
            removeTags:this.state.removeTags.concat(newRemoveTages)
        })
        //console.log("this.state.removeTags",this.state.removeTags);
    }

    handleUpdateTgas(){
        console.log("Send Post to update tags");
        console.log("this.state",this);
        const{addTags,removeTags} = this.state;
        // const data = { username: 'example' };

        if(addTags.length>0){
            console.log("Send Post to Add tags");
            //send add tags request
            const addTagsurl = 'https://example.com/profile';

            const addTagsdata = {vidoId:this.props.vidoId,addTags:addTags};
            console.log("addTags:",addTags)
            try {
                fetch(addTagsurl, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(addTagsdata) // data can be `string` or {object}!
                    ,headers: {'Content-Type': 'application/json'}
                })
                .then(response=>response.json())
                .then((json)=>{
                    console.log('Add tags Success:', JSON.stringify(json));
                })
            } catch (error) {
            console.error('Error:', error);
            }
        }
        if(removeTags.length>0){
            console.log("Send Post to Remove tags");
            //send remove tags request
            const removeTagsurl = 'https://example.com/profile';
            const removeTagsdata = {vidoId:this.props.vidoId,removeTags:removeTags};
            console.log("removeTags:",removeTags)
            try {
                fetch(removeTagsurl, {
                    method: 'POST', // or 'PUT'
                    body: JSON.stringify(removeTagsdata) // data can be `string` or {object}!
                    ,headers: {'Content-Type': 'application/json'}
                })
                .then(response=>response.json())
                .then((json)=>{
                    console.log('Add tags Success:', JSON.stringify(json));
                })
            } catch (error) {
            console.error('Error:', error);
            }
        }
        this.props.closeWindow()
    }
    render() {
        console.log("TagShow.props",this.props)       
        return (
            <div className="TagWindow"
                style={{
                    transform:this.props.show ?"translateY(0)":"translateY(-100vh)",
                    opacity:this.props.show ? "1":0
                }}
            > 
                <div className="TagWindowOperation">
                    <p className="TagWindowTittle">Tags</p>
                    <Button className="TagWindowClose"
                            onClick={this.props.closeWindow}
                            type="primary" icon="close" 
                    ></Button>
                </div>
                
                <TagEdit
                    userTags={this.state.currentTags} 
                    setRemoveTags={this.setRemoveTags}
                    setAddTags={this.setAddTags}
                />
                {/* <br/>
                <button className="left" onClick={this.handleUpdateTgas.bind(this)}>Save</button>
                <button className="right" onClick={this.props.closeWindow}>Cancle</button> */}
            </div>
        );
    }
}

export default TagShow;
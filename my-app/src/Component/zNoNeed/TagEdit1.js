import React, { Component } from 'react';
import { Tag, Input, Tooltip, Icon } from 'antd';
import "../../style/SearchPage.css"

class TagEdit extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputVisible: false,
            inputValue: ''
          };
    }

      showInput = () => {
        this.setState({ inputVisible: true }, () => this.input.focus());
      };
      handleInputChange = e => {
        this.setState({ inputValue: e.target.value });
      }; 
      handleInputConfirm = () => {
        //create new tag,set this tag information
        //set props current tags and add tags
        
        const { inputValue } = this.state;
        //add tags to addtags array
        let  tags  = this.props.userTags;
        console.log("inputValue",inputValue)
        if (inputValue && tags.indexOf(inputValue) === -1) {
            this.props.setAddTags(inputValue);
        }
        console.log("handleInputConfirm")
        this.setState({
          inputVisible: false,
          inputValue: '',
        });
      };
    
      saveInputRef = input => (this.input = input);
    //remove tags
    handleClose = (removedTag) => {
        console.log("removedTag",removedTag);
        this.props.setRemoveTags(removedTag);
        //this.props.setCurrentTags(newCurrentTags)
        // console.log("Tagdata after remove props",this.props)
      };

    render() {
        //console.log("Testdata.props",this.props)

        const{userTags}=this.props
        const {inputVisible, inputValue } = this.state;
        //console.log("userTags",this.state.userTags);
        return (
            <div className="TagWindowEditWindow" >
                {userTags.map((tag)=>{
                    const isLongTag = tag.tagName.length>20;
                    const tagElem=(
                        <Tag 
                            className="TagWindowSingleTag"
                            key = {tag.tagName} 
                            closable={tag.tagID !== 0} 
                            onClose={() => this.handleClose(tag)}
                            >
                        {isLongTag ? `${tag.tagName.slice(0, 20)}...` : tag.tagName}
                        </Tag>
                    )
                    return isLongTag? (
                        <Tooltip className="TagWindowAddNowTag"
                            title={tag.tagName} key={tag.tagName}>
                        {tagElem}
                        </Tooltip>
                    ):(
                        tagElem
                    );
                    
                })}
                {
                inputVisible && (
                <Input
                    ref={this.saveInputRef}
                    type="text"
                    size="large"
                    style={{ width: 78 }}
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputConfirm}
                    onPressEnter={this.handleInputConfirm}
                />
                )}
                {!inputVisible && (
                    <div className="TagWindowNewTag">
                        <Tag  
                            onClick={this.showInput} 
                            style={{ background: '#fff', borderStyle: 'dashed'}}
                        >
                        <Icon type="plus" /> New Tag
                        </Tag>
                    </div>
                )}
            </div>
        );
    }
}

export default TagEdit;
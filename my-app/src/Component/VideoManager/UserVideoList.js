import React from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Icon,Tag  } from 'antd';
import Highlighter from 'react-highlight-words';
import "../../style/VideoManager.css"
import {getUserVideoALL} from "../../Component/aAction/actionGetUserVideoList"


class UserVideoList extends React.Component {
  state = {
    //search tittle
    searchText: '',
    searchedColumn: '',
    //search tags
    filteredInfo: null,
    sortedInfo: null,
  }

  //search tittle
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text,record) => (
      (this.state.searchedColumn === dataIndex) ? (
            <div className="videoListRowTittle">
               <div className="videoTitle">
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
               </div>
               <iframe 
                title = {record.id+"url"}
                 className="videoPlayerList"
                 key={record.id+"url"}
                 src={"https://www.youtube.com/embed/"+record.id}>
               </iframe>
        </div>
      ):(
          <div className="videoListRowTittle">
               <div className="videoTitle">
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text.toString()}
                />
               </div>
               <iframe 
                  title = {record.id+"url"}
                 className="videoPlayerList"
                 key="url"
                 src={"https://www.youtube.com/embed/"+record.id}>
               </iframe>
        </div>
      )
    ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };

  //search tags
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  //select row change video
  onClickRow = (record,index) => {
    return{onClick:()=>{
          // console.log("record",record)
          // console.log(index)
          this.props.setselectVideoId(record)
    }
  }};
  

  render() {
    console.log("Rendering TABLE!!!!!!!!!!!!!!!")
    //set tags filter
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
      // rowSelection object indicates the need for row selection
    //get tag list
    // const renderContent=(value,row)=>{
    //   let singleVideoTags=[];
    //   console.log("renderContent  value",value)
    //   //value is dataIndex data, row is record = index data
    //   //console.log("renderContent",row)
    //   let vid=row.id
    //   let uid=this.props.userState.username
    //   let urlGetTags="/YouTube/tag/getTags?uid="+uid+"&vid="+vid
    //   //console.log("Get Tags url:",urlGetTags)
    //   try{
    //       fetch(urlGetTags)
    //       .then((response) => response.json())
    //       .then((tags)=>{
    //             console.log("Get Tags:",tags)
    //             singleVideoTags=tags
    //             console.log("Get singleVideoTags:",singleVideoTags)
    //             return(
    //               <p>singleVideoTags</p>
    //             )
    //       })
    //   }catch (error) {
    //       console.log("Get Tags error")
    //   }
    //   // return (
    //   //   <span>
    //   //     <p>{singleVideoTags.toString()}</p>
    //   //     {singleVideoTags.map(tag => (
    //   //       <Tag color="blue" key={tag}>
    //   //         {tag.toString()}
    //   //       </Tag>
    //   //     ))}
    //   //   </span>
    //   // )
    // };
    //set tittle colums
    const columns = [
      {
        title: 'title',
        dataIndex: 'title',
        key: 'title',
        width: '65%',
        ...this.getColumnSearchProps('title'),
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',

        filters: [{ text: 'Tags1', value: 'Tags1' }, { text: 'Maya', value: 'Maya' }],
        filteredValue: filteredInfo.tags || null,
        onFilter: (value, record) => (
          record.tags.includes(value),
          console.log("Filrter",record.tags.includes(value))
        ),
        ellipsis: true,

        render: (tags,record) => (
          //console.log("record,",record),
          <span className="tagTable">
            {tags.map(tag => {
              return (
                <Tag color="blue" key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
    ];
    return <Table 
        columns={columns} 
        dataSource={this.props.UserVideoTag}
        //dataSource={this.state.data}
        rowKey={record => record.id}
        expandedRowRender={record => <p style={{ margin: 0 }}>{record.url}</p>}
        onChange={this.handleChange} 
        onRow={this.onClickRow}  
        scroll={{ x: 300 , y: 700 }}
        pagination={ {
                      position:"top",
                      pageSize: 10, // 默认每页显示数量
                      //showSizeChanger: true, // 显示可改变每页数量
                      //pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
                      //showTotal: total => `Total ${total} items`, // 显示总数
                      //showSizeChange: (current, pageSize) => this.pageSize = pageSize, // 改变每页数量时更新显示
                    }}
    />;
  }
}

function mapStateToProps(state) {
  return {
      userTags:state.userTags,
      userState:state.userState,
      userVideoList:state.userVideoList,
      UserVideoTag:state.UserVideoTag
  };
}
function mapDispatchToProps(dispatch){
  return{
      getUserVideoALL:(UserVideoTag)=>dispatch(getUserVideoALL(UserVideoTag))
      }
}

export default connect(
  mapStateToProps,mapDispatchToProps
)(UserVideoList);
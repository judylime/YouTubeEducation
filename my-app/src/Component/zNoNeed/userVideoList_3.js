import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Input, Button, Icon,Tag  } from 'antd';
import Highlighter from 'react-highlight-words';
import "../../style/VideoManager.css"
import store from "../Reducer/Store"
import {getUserVideoALL} from "../../Component/aAction/actionGetUserVideoList"


let needtable=[]
class UserVideoList extends React.Component {
  state = {
    //search tittle
    searchText: '',
    searchedColumn: '',
    //search tags
    filteredInfo: null,
    sortedInfo: null,
    //get data
    //userTags:this.props.userTags,
  }
//   componentDidMount() {
//     console.log('Component DID MOUNT!')
//     //console.log("this.state",this.state)
//     console.log("this.props.UserVideoTag",this.props.UserVideoTag)
// }
// componentWillReceiveProps(newProps) {
//      console.log('Component WILL RECEIVE PROPS!')
//      //console.log("this.state",this.state)
//      console.log("newProps",newProps)
//      console.log("newProps UserVideoTag",newProps.UserVideoTag)
//      console.log("this.props.UserVideoTag",this.props.UserVideoTag)
//     //  needtable=this.props.tableData
//     //  console.log("needtable",needtable)
// }
// shouldComponentUpdate(newProps, newState) {
//     console.log('Component shouldComponentUpdate UPDATE!');
//      //console.log("this.state",this.state)
//      console.log("newProps",newProps)
//      console.log("newState",newState)
//      console.log("this.props.UserVideoTag",this.props.UserVideoTag)
//      return true;
// }
// componentWillUpdate(nextProps, nextState) {
//      console.log('Component WILL UPDATE!');
//      //console.log("this.state",this.state)
//      console.log("nextProps",nextProps)
//      console.log("nextState",nextState)
//      console.log("this.props.UserVideoTag",this.props.UserVideoTag)
     
// }
// componentDidUpdate(prevProps, prevState) {
//      console.log('Component DID UPDATE!')
//      console.log("prevProps",prevProps)
//      console.log("prevState",prevState)
//      //console.log("this.state",this.state)
//      console.log("this.props.UserVideoTag",this.props.UserVideoTag)

// }
// componentWillUnmount() {
//       console.log('Component WILL UNMOUNT!')
//       //console.log("this.state",this.state)
//       console.log("this.props",this.props)

// }
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
    // render: text =>
    //   this.state.searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
    //       searchWords={[this.state.searchText]}
    //       autoEscape
    //       textToHighlight={text.toString()}
    //     />
    //   ) : (
    //     text
    //   ),
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
                 className="videoPlayerList"
                 key="url"
                 src={record.url}>
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
                 className="videoPlayerList"
                 key="url"
                 src={record.url}>
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
    const renderContent=(value,row,index)=>{
      let singleVideoTags=[];
      console.log("renderContent  value",value)
      //value is dataIndex data, row is record = index data
      //console.log("renderContent",row)
      let vid=row.id
      let uid=this.props.userState.username
      let urlGetTags="/YouTube/tag/getTags?uid="+uid+"&vid="+vid
      //console.log("Get Tags url:",urlGetTags)
      try{
          fetch(urlGetTags)
          .then((response) => response.json())
          .then((tags)=>{
                console.log("Get Tags:",tags)
                singleVideoTags=tags
                console.log("Get singleVideoTags:",singleVideoTags)
                return(
                  <p>singleVideoTags</p>
                )
          })
      }catch (error) {
          console.log("Get Tags error")
      }
      // return (
      //   <span>
      //     <p>{singleVideoTags.toString()}</p>
      //     {singleVideoTags.map(tag => (
      //       <Tag color="blue" key={tag}>
      //         {tag.toString()}
      //       </Tag>
      //     ))}
      //   </span>
      // )
    };
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
        dataIndex: 'tags',
        key: 'id',
        //render:renderContent
        // (text,record) => (
        //   ()=>{
        //     //get this video tags list
        //     let vid=record.id
        //     let uid=this.props.userState.username
        //     let urlGetTags="/YouTube/tag/getTags?uid="+uid+"&vid="+vid
        //     console.log("Get Tags url:",urlGetTags)
        //     try{
        //         fetch(urlGetTags)
        //         .then((response) => response.json())
        //         .then((tags)=>{
        //             console.log("Get Tags:",tags)
        //         })
        //     }catch (error) {
        //         console.log("Get Tags error")
        //     }
        //   },

        
        // filters: [{ text: 'Tag1', value: 'Tag1' }, { text: 'Tag2', value: 'Tag2' }],
        // filteredValue: filteredInfo.id || null,
        // onFilter: (value, record) => record.id.includes(value),
        // //sorter: (a, b) => a.id.length - b.id.length,
        // sortOrder: sortedInfo.columnKey === 'Tag1' && sortedInfo.order,
        // ellipsis: true,
        //render:renderContent
      },
      // {
      //   title: 'id',
      //   dataIndex: 'id',
      //   key: 'id',
      //   filters: [{ text: 'v2', value: 'v2' }, { text: 'v6', value: 'v6' }],
      //   filteredValue: filteredInfo.id || null,
      //   onFilter: (value, record) => record.id.includes(value),
      //   //sorter: (a, b) => a.id.length - b.id.length,
      //   sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order,
      //   ellipsis: true,
      // },
    ];
    return <Table 
        columns={columns} 
        dataSource={this.props.userVideoList}
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
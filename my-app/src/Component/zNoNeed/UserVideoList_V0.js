// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import SearchVideoList from '../Home/SearchVideoList';
// import 'antd/dist/antd.css';
// import { Table, Input, Button, Icon,Tag } from 'antd';
// import Highlighter from 'react-highlight-words';
// import "../../style/VideoManager.css"

// class UserVideoList extends Component {
//     state = {
//         searchText: '',
//         searchedColumn: '',
//         filteredInfo: null,
//         sortedInfo: null,
//         userTags:this.props.userTags,
//         testData: null
//       };
    
//       getColumnSearchProps = dataIndex => ({
//         filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//           <div style={{ padding: 8 }}>
//             <Input
//               ref={node => {
//                 this.searchInput = node;
//               }}
//               placeholder={`Search Tittle`}
//               value={selectedKeys[0]}
//               onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//               onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//               style={{ width: 200, marginBottom: 8, display: 'block' }}
//             />
    
//             <Button
//               type="primary"
//               onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//               icon="search"
//               size="small"
//               style={{ width: 90, marginRight: 8 }}
//             >
//               Search
//             </Button>
//             <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//               Reset
//             </Button>
//           </div>
//         ),
//         filterIcon: filtered => (
//           <Icon type="search" style={{ color: filtered ? '#50a9fc' : undefined }} />
//         ),
//         onFilter: (value, record) =>(
//           record[dataIndex]
//           .toString()
//           .toLowerCase()
//           .includes(value.toLowerCase())
//         ),
//         onFilterDropdownVisibleChange: visible => {
//           if (visible) {
//             setTimeout(() => this.searchInput.select());
//           }
//         },
//         render: (text,record) => (
//           (this.state.searchedColumn === dataIndex) ? (
//                 <div className="videoListRowTittle">
//                    <div className="videoTitle">
//                     <Highlighter
//                         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//                         searchWords={[this.state.searchText]}
//                         autoEscape
//                         textToHighlight={text.toString()}
//                     />
//                    </div>
//                    <iframe 
//                      className="videoPlayerList"
//                      key="url"
//                      src={record.url}>
//                    </iframe>
//             </div>
//           ):(
//               <div className="videoListRowTittle">
//                    <div className="videoTitle">
//                     <Highlighter
//                         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//                         searchWords={[this.state.searchText]}
//                         autoEscape
//                         textToHighlight={text.toString()}
//                     />
//                    </div>
//                    <iframe 
//                      className="videoPlayerList"
//                      key="url"
//                      src={record.url}>
//                    </iframe>
//             </div>
//           )
//         ),
//       });
    
//       handleSearch = (selectedKeys, confirm, dataIndex) => {
//         confirm();
//         this.setState({ 
//           searchText: selectedKeys[0],
//           searchedColumn: dataIndex,
//           });
//       };
    
//       handleReset = clearFilters => {
//         clearFilters();
//         this.setState({ searchText: '' });
//       };
    
//       handleChange = (pagination, filters, sorter) => {
//         console.log('Various parameters', pagination, filters, sorter);
//         this.setState({
//           filteredInfo: filters,
//           sortedInfo: sorter,
//         });
//       };

//       render() {
//           //get user all tags to make a filter
//           console.log("Render store.userVideolist",this.props.userVideoList)
//           //console.log("Render store.TestVideo",this.props.userVideoListTEST)
//           const fiters = this.state.userTags.map(tags => {
//             const container = {};
//             container.text = tags.tagName;
//             container.value = tags.tagName;;       
//             return container;
//           })    
//           //set colums
//           let { sortedInfo, filteredInfo } = this.state;
//           sortedInfo = sortedInfo || {};
//           filteredInfo = filteredInfo || {};
//           const columns = [
//             {
//               title: "Title",
//               dataIndex: 'title',
//               key: 'title',
//               width: "65%" ,
//               ...this.getColumnSearchProps('title'),
//             },
//             // {
//             //   title: 'Title',
//             //   dataIndex: 'title',
//             //   key:"id",
//             //   width: "65%" ,
//             //   render:(text,record)=>(
//             //     <div className="videoListRowTittle">
//             //       <div className="videoTitle">{record.title}</div>
//             //       <iframe 
//             //         className="videoPlayerList"
//             //         key="url"
//             //         src={record.url}>
//             //       </iframe>
//             //     </div>
//             //   )
//             // },
//             {
//               title: "Tags",
//               dataIndex: 'title',
//               key: 'title',
//             },
    


//           // {
//           //   title:"Tags",
//           //   dataIndex:"videoTags",
//           //   key:"videoTags",
//           //   filters: fiters,
//           //   filteredValue: filteredInfo.videoTags || null,
//           //   onFilter: (value, record) => record.videoTags.includes(value),
//           //   sorter: (a, b) => a.videoTags.length - b.videoTags.length,
//           //   sortOrder: sortedInfo.columnKey === 'videoTags' && sortedInfo.order,
//           //   ellipsis: true,
//           //   render:videoTags => (
//           //       <span>
//           //       {videoTags.map(tag => (
//           //           <Tag color="blue" key={tag}>
//           //           {tag}
//           //           </Tag>
//           //       ))}
//           //       </span>
//           //   )}

//         ];
//         return (
//                 <Table
//                     className="videoListTable" 
//                     //rowClassName="videoListTableColumns"
//                     columns={columns} 
//                     //expandedRowRender={record => <p style={{ margin: 0 }}>{record.url}</p>}
//                     //expandIconAsCell={false} expandIconColumnIndex={-1}
//                     dataSource={this.props.userVideoList} 
//                     onChange={this.handleChange} 
//                     rowKey={record => record.id}
//                     scroll={{ x: 300 , y: 700 }}
//                     pagination={ {
//                       position:"top",
//                       pageSize: 10, // 默认每页显示数量
//                       //showSizeChanger: true, // 显示可改变每页数量
//                       //pageSizeOptions: ['10', '20', '30', '40'], // 每页数量选项
//                       //showTotal: total => `Total ${total} items`, // 显示总数
//                       //showSizeChange: (current, pageSize) => this.pageSize = pageSize, // 改变每页数量时更新显示
//                     }}
//                 />
//             );
//       }
// }

// function mapStateToProps(state) {
//     return {
//         userTags:state.userTags,
//         userVideoList:state.userVideoList,
//         userVideoListTEST:state.userVideoListTEST
//     };
// }
// export default connect(
//     mapStateToProps,
// )(UserVideoList);
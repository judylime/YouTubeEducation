import React from 'react';
import {connect} from "react-redux"
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon,Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import "../../style/VideoManager.css"

// const data = [
//     {
//       key: '1',
//       title: 'John',
//       address: 'New York No. 1 Lake Park',
//       videoTags: ['nice', 'developer',"loser"],
//     },
//     {
//       key: '2',
//       title: 'Jim',
//       address: 'London No. 1 Lake Park',
//       videoTags: ['loser'],
//     },
//     {
//       key: '3',
//       title: 'Joe',
//       address: 'Sidney No. 1 Lake Park',
//       videoTags: ['cool', 'teacher'],
//     },
//   ];


  //const testData = this.props.userVideoList
class VideoList2 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    filteredInfo: null,
    sortedInfo: null,
    userTags:this.props.userTags,
    testData: this.props.userVideoList
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search Tittle`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 200, marginBottom: 8, display: 'block' }}
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
    onFilter: (value, record) =>(
      record[dataIndex]
      .toString()
      .toLowerCase()
      .includes(value.toLowerCase())
    ),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text => (
    (this.state.searchedColumn === dataIndex) ?
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[this.state.searchText]}
        autoEscape
        textToHighlight={text.toString()}
      />
      : text
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

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  render() {
      //get user all tags to make a filter
      const fiters = this.state.userTags.map(tags => {
        const container = {};
        container.text = tags.tagName;
        container.value = tags.tagName;;       
        return container;
      })    

      let { sortedInfo, filteredInfo } = this.state;
      sortedInfo = sortedInfo || {};
      filteredInfo = filteredInfo || {};
      const columns = [
      {
        title: "Title",
        dataIndex: 'title',
        key: 'title',
        ...this.getColumnSearchProps('title'),
      },
      {
        title:"Tags",
        dataIndex:"videoTags",
        key:"videoTags",
        filters: fiters,
        filteredValue: filteredInfo.videoTags || null,
        onFilter: (value, record) => record.videoTags.includes(value),
        sorter: (a, b) => a.videoTags.length - b.videoTags.length,
        sortOrder: sortedInfo.columnKey === 'videoTags' && sortedInfo.order,
        ellipsis: true,
        // onFilter: (value, record) => {
        //   // const tags = record.videoTags.map(tag=>return tag.tagName);
        // },
        render:videoTags => (
            <span>
            {videoTags.map(tag => (
                <Tag color="blue" key={tag}>
                {tag}
                </Tag>
            ))}
            </span>
        )}
      // {
      //   title: 'Tags1',
      //   key: 'videoTags',
      //   dataIndex: 'videoTags',
      //   render: videoTags => (
      //     <span>
      //     {videoTags.map(tag => (
      //       <Tag color="blue" key={tag.tagName}>
      //         {tag.tagName}
      //       </Tag>
      //     ))}
      //     </span>
      //   ),
      // },
      // {
      //   title:"Tags",
      //   dataIndex:"videoTags",
      //   key:"videoTags",
      //   filters: fiters,
      //   filteredValue: filteredInfo.videoTags || null,
      //   onFilter: (value, record) => record.videoTags.includes(value),
      //   sorter: (a, b) => a.videoTags.length - b.videoTags.length,
      //   sortOrder: sortedInfo.columnKey === 'videoTags' && sortedInfo.order,
      //   ellipsis: true,
      //   render:videoTags => (
      //       <span>
      //       {videoTags.map(tag => (
      //       <Tag color="blue" key={tag}>
      //         {tag}
      //       </Tag>
      //     ))}
      //       </span>
      //   )}
    ];
    return (
        <div>
            <div>
            </div>
            <Table columns={columns} dataSource={this.state.testData} onChange={this.handleChange} />
        </div>
        );
  }
}

const mapStateToProps=(state)=>{
    return{
        userTags:state.userTags,
        userVideoList:state.userVideoList
    }
}

export default  connect(mapStateToProps)(VideoList2);
          
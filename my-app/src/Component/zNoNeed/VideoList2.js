import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Input, Button, Icon,Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import "../../style/VideoManager.css"

const { Column, ColumnGroup } = Table;
const data = [
    {
      key: '1',
      name: 'John',
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer',"loser"],
    },
    {
      key: '2',
      name: 'Jim',
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe',
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

class VideoList2 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    filteredInfo: null,
    sortedInfo: null,
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
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: "tittle",
        dataIndex: 'name',
        key: 'name',
        ...this.getColumnSearchProps('name'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title:"Tags",
        dataIndex:"tags",
        key:"tags",
        render:tags => (
            <span>
            {tags.map(tag => (
                <Tag color="blue" key={tag}>
                {tag}
                </Tag>
            ))}
            </span>
        )},
        {
            title:"Tags",
            dataIndex:"tags",
            key:"tags",
            filters: [{ text: 'nice', value: 'nice' }, { text: 'loser', value: 'loser' }],
            filteredValue: filteredInfo.tags || null,
            onFilter: (value, record) => record.tags.includes(value),
            sorter: (a, b) => a.tags.length - b.tags.length,
            sortOrder: sortedInfo.columnKey === 'tags' && sortedInfo.order,
            ellipsis: true,
            render:tags => (
                <span>
                {tags.map(tag => (
                    <Tag color="blue" key={tag}>
                    {tag}
                    </Tag>
                ))}
                </span>
            )}
    ];
        // console.log(this.state.testData)
    // console.log("data",data)
      // {
      //   title: "tittle",
      //   dataIndex: 'name',
      //   key: 'videoID',
      //   ...this.getColumnSearchProps('name'),
      // },
      // {
      //   title:"Tags",
      //   dataIndex:"tags",
      //   key:"tags",
      //   filters: fiters,
      //   filteredValue: filteredInfo.tags || null,
      //   onFilter: (value, record) => record.tags.includes(value),
      //   sorter: (a, b) => a.tags.length - b.tags.length,
      //   sortOrder: sortedInfo.columnKey === 'tags' && sortedInfo.order,
      //   ellipsis: true,
      //   render:tags => (
      //       <span>
      //       {tags.map(tag => (
      //           <Tag color="blue" key={tag}>
      //           {tag}
      //           </Tag>
      //       ))}
      //       </span>
      //   )}
    return (
        <div>
            <div>
            </div>
            <Table columns={columns} dataSource={data} onChange={this.handleChange} />
        </div>
        );
  }
}
export default VideoList2;

          
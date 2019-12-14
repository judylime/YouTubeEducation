

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import { Table, Input, Button, Icon } from 'antd';
// import Highlighter from 'react-highlight-words';

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//   },
//   {
//     key: '2',
//     name: 'Joe Black',
//   },
//   {
//     key: '3',
//     name: 'Jim Green',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//   },
// ];

// class PageVideoManager extends React.Component {
//   state = {
//     searchText: '',
//     searchedColumn: '',
//   };

//   getColumnSearchProps = dataIndex => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           ref={node => {
//             this.searchInput = node;
//           }}
//           placeholder={`Search Tittle`}
//           value={selectedKeys[0]}
//           onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{ width: 200, marginBottom: 8, display: 'block' }}
//         />

//         <Button
//           type="primary"
//           onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//           icon="search"
//           size="small"
//           style={{ width: 90, marginRight: 8 }}
//         >
//           Search
//         </Button>
//         <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//           Reset
//         </Button>
//       </div>
//     ),
//     filterIcon: filtered => (
//       <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
//     ),
//     onFilter: (value, record) =>(
//       record[dataIndex]
//       .toString()
//       .toLowerCase()
//       .includes(value.toLowerCase())
//     ),
//     onFilterDropdownVisibleChange: visible => {
//       if (visible) {
//         setTimeout(() => this.searchInput.select());
//       }
//     },
//     render: text => (
//     (this.state.searchedColumn === dataIndex) ?
//       <Highlighter
//         highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//         searchWords={[this.state.searchText]}
//         autoEscape
//         textToHighlight={text.toString()}
//       />
//       : text
//     ),
//   });

//   handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     this.setState({ 
//       searchText: selectedKeys[0],
//       searchedColumn: dataIndex,
//       });
//   };

//   handleReset = clearFilters => {
//     clearFilters();
//     this.setState({ searchText: '' });
//   };

//   render() {
//     const columns = [
//       {
//         title: "tittle",
//         dataIndex: 'name',
//         key: 'name',
//         ...this.getColumnSearchProps('name'),
//       },
//     ];
//     return (
//         <div>
//             <div>
                
//             </div>
//             <Table columns={columns} dataSource={data} />
//         </div>
//         );
//   }
// }
// export default PageVideoManager;

          
import React, { Component } from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

class ButtonTest extends Component {
    render() {
        return (
            <div>
                <div>
                    <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default ButtonTest;
import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {NavLink } from "react-router-dom"
import "../../style/MainPage.css"

class MainSignin extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            //example url:http://localhost:8080/YouTube/login?name=1111&pwd=2222
            //                                 /YouTube/login?name=1111&pwd=2222 
            const url="/YouTube/login?name="+values.username+"&pwd="+values.password
            try {
                fetch(url)
                .then((response) => response.json())
                .then(()=>{
                    //set global redux data of videolist
                    // console.log('Login success')
                    //console.log("searchVideoList",this.state.searchVideoList)
                    //this.props.history.push( '/')
                    //set user state
                    console.log("values.username,",values.username,)
                    let newUserstate={
                        loginState: true,
                        username: values.username,
                    }
                    this.props.userLogIn(newUserstate)
                    // const curURL = window.location.href
                    // console.log("curURL",curURL)
                })
            } catch (error) {
                console.log("Login error")
            }

          }
        });
      };

    //   componentDidMount() {
    //     console.log("Signin location",this.props.location);
    //   }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item >
                        <p className="item">E-mail</p>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    
                    <Form.Item>
                        <p className="item">Password</p>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                            />,
                        )}
                    </Form.Item>

                    <Form.Item> 
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        {/* <a className="login-form-forgot" href="">
                            Forgot password
                        </a> */}
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        Or <NavLink to="/SignUp">Sign Up now!</NavLink>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create({ name: 'normal_login' })(MainSignin)
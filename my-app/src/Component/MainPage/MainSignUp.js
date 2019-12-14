
import React from 'react';
import 'antd/dist/antd.css';
import { Form,Icon,Input,Button,} from 'antd';
import { NavLink} from "react-router-dom"
import "../../style/login.css"


class MainSignUp extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let url="/YouTube/register?name="+values.username+"&pwd="+values.password
        //const url="/YouTube/register"
        let options = {
          method: 'POST',//post请求
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
          },
          // body: JSON.stringify({//post请求参数
          // name: values.username,
          // pwd: values.password,
          // })
          }
        console.log("url",url)
        try {
            fetch(url,options)
            .then((response) => response.json())
            .then(()=>{
                //set global redux data of videolist
                // console.log('Sign up success')
                // this.props.history.push( '/')
                //this.props.location.pathname="/"
                // let pathname="/"
                // window.history.pushState({},null,pathname);

                //set user state
                const newUserstate={
                    loginState: true,
                    username: values.username,
                }
                this.props.userLogIn(newUserstate)
            
            })
        } catch (error) {
            console.log("Login error")
        }
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };
  // componentDidMount() {
  //   console.log("Signup location",this.props.location);
  // }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
    <div className="login">
      <Form  className= "login-form" onSubmit={this.handleSubmit}>
        <Form.Item>
            <p className="item">E-mail</p>
            {getFieldDecorator('username', {
                rules: [
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
                ],
            })(
             <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="E-mail"
                />
            )}
        </Form.Item>
        <Form.Item hasFeedback>
            <p className="item">Password</p>
            {getFieldDecorator('password', {
                rules: [
                {
                    required: true,
                    message: 'Please input your password!',
                },
                {
                    validator: this.validateToNextPassword,
                },
                ],
            })(
                <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
                />
            )}
        </Form.Item>
        <Form.Item hasFeedback>
            <p className="item">Confirm Password</p>
            {getFieldDecorator('confirm', {
                rules: [
                {
                    required: true,
                    message: 'Please confirm your password!',
                },
                {
                    validator: this.compareToFirstPassword,
                },
                ],
            })(<Input 
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Password"
                onBlur={this.handleConfirmBlur} />)}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
             Or <NavLink to="/SignIn">Sign In now!</NavLink>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

export default Form.create({ name: 'register' })(MainSignUp);
          
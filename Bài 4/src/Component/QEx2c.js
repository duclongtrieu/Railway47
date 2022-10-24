import React from "react";
import "../Css/Exercise2.css";
// import "antd/dist/antd.css";
import { Button, Form, Input } from "antd";
class QEx2c extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }
  // handleChange = (event) => {
  //   this.setState({
  //     value: event.target.value,
  //   });
  // };

  // handleSubmit = (event) => {
  //   alert("Xin chào " + this.state.value);
  //   event.preventDefault();
  // };

  render() {
    return (
      <div className="boder-signin">
        <h4>Login Form</h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item label="User Name" name="username">
            <Input placeholder="User Name" required></Input>
          </Form.Item>
          <Form.Item label="PassWord" name="password">
            <Input placeholder="PassWord" required></Input>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default QEx2c;

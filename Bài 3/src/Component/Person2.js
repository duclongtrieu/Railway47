import { Form, Input, Button } from "antd";
import "../Css.css/Person.css";
function Person2() {
  return (
    <div>
      <header>
        <Form className="Person">
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
      </header>
    </div>
  );
}
export default Person2;

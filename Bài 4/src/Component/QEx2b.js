import React from "react";

class QEx2b extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      checked: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      checked: event.target.checked,
    });
  };
  handleChange1 = (event1) => {
    this.setState({
      value: event1.target.value,
    });
  };

  handleSubmit = (event) => {
    alert("Bạn đã chọn giới tính " + this.state.checked);
    event.preventDefault();
  };

  handleSubmit1 = (event1) => {
    alert("Bạn đã chọn loại xe " + this.state.value);
    event1.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Giới Tính:
          <label>
            <input
              type="radio"
              value={this.state.checked}
              onChange={this.handleChange}
            />
            Nam
          </label>
          <label>
            <input
              type="radio"
              checked={this.state.checked}
              onChange={this.handleChange}
            />
            Nữ
            <input type="submit" value="Đăng Ký" />
          </label>
        </form>
        <br />
        <form onSubmit={this.handleSubmit1}>
          <label>
            Loại Xe
            <select value={this.state.value} onChange={this.handleChange1}>
              <option>4 Bánh</option>
              <option>2 Bánh</option>
              <option>6 Bánh</option>
            </select>
          </label>
          <input type={"submit"} value={"Xác nhận"} />
        </form>
      </div>
    );
  }
}

export default QEx2b;

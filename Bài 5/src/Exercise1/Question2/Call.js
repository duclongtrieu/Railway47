import React from "react";
import InputName from "./InputName";

class Call extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ten: "",
    };
  }

  lapLaiTenDaDien = (tenmoi) => {
    this.setState({
      ten: tenmoi,
    });
  };

  render() {
    return (
      <div>
        <InputName
          ten={this.state.ten}
          changeInputName={this.lapLaiTenDaDien}
        />
        <div>Xin Chao {this.state.ten}</div>
      </div>
    );
  }
}

export default Call;

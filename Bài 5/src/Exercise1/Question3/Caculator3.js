import React, { Component } from "react";
import TempertureInput from "./TempertureInput";

class Caculator3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nhietdo: "", // mặc định độ C
    };
  }

  sangDoC = (fahrenheit) => {
    return ((fahrenheit - 32) * 5) / 9;
  };
  sangDoF = (celsius) => {
    return (celsius * 9) / 5 + 32;
  };

  handleCelsiusChange = (celsius) => {
    this.setState({
      nhietdo: celsius,
    });
  };
  handleFahrenheitChange = (fahrenheit) => {
    this.setState({
      nhietdo: fahrenheit,
    });
  };

  render() {
    const celsius = this.state.nhietdo === "" ? "" : this.state.nhietdo;
    const fahrenheit =
      this.state.nhietdo === "" ? "" : this.sangDoF(this.state.nhietdo);

    return (
      <div>
        <TempertureInput
          nhietdo={celsius}
          kieuNhietDo="độ C"
          batThayDoiNhietDo={this.handleCelsiusChange}
        />
        <TempertureInput
          nhietdo={fahrenheit}
          kieuNhietDo="độ F"
          batThayDoiNhietDo={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

export default Caculator3;

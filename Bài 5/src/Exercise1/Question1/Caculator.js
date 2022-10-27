import React from "react";
import BoilingVerdict from "./BoilingVerdict";

class Caculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nhietdo: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      nhietdo: e.target.value,
    });
  };

  render() {
    return (
      <fieldset>
        <legend>Điền nhiệt độ </legend>
        <input value={this.state.nhietdo} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(this.state.nhietdo)} />
      </fieldset>
    );
  }
}

export default Caculator;

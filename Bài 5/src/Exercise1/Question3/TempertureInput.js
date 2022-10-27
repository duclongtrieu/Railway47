import React from "react";

class TempertureInput extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Điền Nhiệt Độ {this.props.kieuNhietDo}</legend>
        <input
          value={this.props.nhietdo}
          onChange={(e) => this.props.batThayDoiNhietDo(e.target.value)}
        />
      </fieldset>
    );
  }
}

export default TempertureInput;

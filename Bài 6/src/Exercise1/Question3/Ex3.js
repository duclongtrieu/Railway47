import React from "react";
import ReactDOM from "react-dom";
import "./Ex3.css";
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Cảnh Báo!</div>;
}

class Ex3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      showWarning: !prevState.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ex3 />);
export default Ex3;

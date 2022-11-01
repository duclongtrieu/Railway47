import React from "react";

class Ex2 extends React.Component {
  // mounting
  constructor(props) {
    super(props);
    this.state = { message: "Ối dồi ôi" };
    console.log("contructor");
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.changeState}> Change State </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  // updating
  changeState = () => {
    this.setState({
      message: "À thế à",
    });
    console.log("Change State");
  };

  shouldComponentUpdate(newProps, newState) {
    console.log(" shouldComponentUpdate" + true);
    return true;
  }

  componentDidUpdate(newProps, newState) {
    console.log("componentDidUpdate");
  }

  // Unmouting
  componentWillUnmount() {
    console.log("componentWillUnmounting");
  }

  // error
  componentDidCatch(error, info) {
    console.log("componentDidCatch");
  }
}

export default Ex2;

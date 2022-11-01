import React, { Component } from "react";

class Ex4 extends Component {
  render() {
    return (
      <div>
        <h1>Random number:{Math.random()}</h1>
        <button onClick={() => this.forceUpdate()}>Làm mới</button>
      </div>
    );
  }
}

export default Ex4;

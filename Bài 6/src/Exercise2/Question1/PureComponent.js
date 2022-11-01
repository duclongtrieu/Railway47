import React from "react";

class Person2 extends React.PureComponent {
  renderFullName = () => {
    return `${this.props.firstName} ${this.props.lastName}`;
  };
  render() {
    console.log("Person " + this.props.id + "rendered");
    return (
      <div>
        <h1>Full Name: {this.renderFullName()}</h1>
      </div>
    );
  }
}

export default Person2;

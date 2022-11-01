import React from "react";

class Person extends React.Component {
  renderFullName = () => {
    return `${this.props.firstName} ${this.props.lastName}`;
  };
  shouldComponentUpdate(newProps, newState) {
    if (
      this.props.firstName === newProps.firstName &&
      this.props.lastName === newProps.lastName
    ) {
      return false;
    }
    return true;
  }
  render() {
    console.log("Person " + this.props.id + "rendered");
    return (
      <div>
        <h1>Full Name: {this.renderFullName()}</h1>
      </div>
    );
  }
}

export default Person;

import React from "react";
import styled from "styled-components";
class StyledComponent extends React.Component {
  render() {
    const H1 = styled.h1`
      color: Green;
      background-color: lightBlue;
      padding: 10px;
    `;
    return (
      <div>
        <H1>Full Name: Nguyễn Văn A</H1>
      </div>
    );
  }
}

export default StyledComponent;

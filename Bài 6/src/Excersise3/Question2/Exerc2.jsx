import React from "react";
import styled from "styled-components";
class Exerc2 extends React.Component {
  render() {
    const H1 = styled.h1`
      color: ${(props) => props.textColor};
      background-color: ${(props) => props.bgColor};
      padding: 10px;
    `;
    return (
      <div>
        <H1 textColor="lightblue" bgColor="yellow">
          Full Name: Nguyễn Văn A
        </H1>
      </div>
    );
  }
}

export default Exerc2;

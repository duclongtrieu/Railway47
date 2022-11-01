import styled from "styled-components";
import React from "react";
const BasicNotification = styled.p`
  color: black;
  background-color: lightblue;
  padding: 5px;
  margin: 5px;
`;
const SuccessNptification = styled(BasicNotification)`
  background: lightgreen;
`;
const ErrorNotification = styled(BasicNotification)`
  background: lightcoral;
`;
function Q3() {
  return (
    <div>
      <BasicNotification>BasicNotification</BasicNotification>
      <SuccessNptification>SuccessNptification</SuccessNptification>
      <ErrorNotification>ErrorNotification</ErrorNotification>
    </div>
  );
}

export default Q3;

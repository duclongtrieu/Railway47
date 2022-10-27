import LoiNhanContext from "./LoiNhanContext";
import React from "react";
function ChauComponent(props) {
  return (
    <div>
      <LoiNhanContext.Consumer>
        {(context) => <h1> Lời Nhắn Từ Ông: {context}</h1>}
      </LoiNhanContext.Consumer>
    </div>
  );
}
export default ChauComponent;

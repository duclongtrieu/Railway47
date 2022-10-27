import React from "react";
import { ThemeConpopnent } from "../Question2/ThemeCoponent";
import LoiNhanContext1 from "./LoiNhanContext1";
function ChauComponent1(props) {
  return (
    <LoiNhanContext1.Consumer>
      {(loinhan1) => (
        <ThemeConpopnent.Consumer>
          {({ theme, changeTheme }) => (
            <div>
              <h1
                style={{
                  backgroundColor: theme.background,
                  color: theme.foreground,
                }}
              >
                {" "}
                Message from Grandparents: {loinhan1}
              </h1>
              <button
                style={{
                  backgroundColor: theme.background,
                  color: theme.foreground,
                }}
              >
                Cháu Không Học
              </button>
              <button onClick={changeTheme}>Change Theme</button>
            </div>
          )}
        </ThemeConpopnent.Consumer>
      )}
    </LoiNhanContext1.Consumer>
  );
}
export default ChauComponent1;

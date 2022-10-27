import React from "react";
import { ThemeConpopnent, themes } from "./ThemeCoponent";
import BoComponent1 from "./BoComponent1";
import LoiNhanContext1 from "./LoiNhanContext1";

class OngComponent1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.dark,
    };
  }
  changeTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    const themeAndMethod = {
      theme: this.state.theme,
      changeTheme: this.changeTheme,
    };

    const loinhan1 = " Học Nữa Đi Cháu";

    return (
      <LoiNhanContext1.Provider value={loinhan1}>
        <ThemeConpopnent.Provider value={themeAndMethod}>
          <BoComponent1 />
        </ThemeConpopnent.Provider>
      </LoiNhanContext1.Provider>
    );
  }
}

export default OngComponent1;

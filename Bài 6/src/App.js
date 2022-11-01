import "./App.css";
import Module from "./Excersise3/Question1/Module";
import StyledComponent from "./Excersise3/Question1/StyledComponent";
import Stylesheet from "./Excersise3/Question1/Stylesheet";
import Styling from "./Excersise3/Question1/Styling";
import Exerc2 from "./Excersise3/Question2/Exerc2";
import Q3 from "./Excersise3/Question3/Q3";
import Ex1 from "./Exercise1/Question1/Ex1";
import Ex2 from "./Exercise1/Question2/Ex2";
import Ex3 from "./Exercise1/Question3/Ex3";
import Ex4 from "./Exercise1/Question4/Ex4";
import Call from "./Exercise2/Question1/Call";

function App() {
  return (
    <div>
      <h1 className="Ex">Excercise1</h1>
      <h2 className="Qest">Question1</h2>
      <Ex1 />
      <br />
      <h2 className="Qest">Question2</h2>
      <Ex2 />
      <br />
      <h2 className="Qest">Question3</h2>
      <Ex3 />
      <br />
      <h2 className="Qest">Question4</h2>
      <Ex4 />
      <br />
      <br />
      <h1 className="Ex">Excercise2</h1>
      <h2 className="Qest">Question</h2>
      {/* <Call /> */}
      <br />
      <br />
      <h1 className="Ex">Excercise3</h1>
      <h2 className="Qest">Question1 a.</h2>
      <Styling />
      <br />
      <h2 className="Qest">Question1 b.</h2>
      <p>CSS Stylesheet</p>
      <Stylesheet />
      <p>CSS Module</p>
      <Module />
      <br />
      <h2 className="Qest">Question1 c.</h2>
      <StyledComponent />
      <br />
      <br />
      <h2 className="Qest">Question2 </h2>
      <Exerc2 />
      <br />
      <br />
      <h2 className="Qest">Question3 </h2>
      <Q3 />
    </div>
  );
}

export default App;

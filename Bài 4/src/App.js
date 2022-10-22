import "./App.css";
import "./Css/Exercise1.css";
import Total from "./Component/Total";
// import "antd/dist/antd.css";
import QExercicee1 from "../src/Component/QExercicee1";

function App() {
  return (
    <div>
      <div className="border3">
        <QExercicee1 />
      </div>
      <div>
        <Total />
      </div>
    </div>
  );
}

export default App;

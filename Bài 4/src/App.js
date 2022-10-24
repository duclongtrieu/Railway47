import "./App.css";
import "./Css/Exercise1.css";
import Total from "./Component/Total";
// import "antd/dist/antd.css";
import QExercicee1 from "../src/Component/QExercicee1";
import QEx2a from "./Component/QEx2a";
import QEx2b from "./Component/QEx2b";
import QEx2c from "./Component/QEx2c";

function App() {
  return (
    <div>
      <div className="border3">
        Bài 1: Câu A
        <QExercicee1 />
      </div>
      Bài 1: Câu B
      <Total />
      <br />
      Bài 2: Câu A
      <QEx2a />
      Bài 2: Câu B
      <QEx2b />
      Bài 2: Câu C
      <QEx2c />
    </div>
  );
}

export default App;

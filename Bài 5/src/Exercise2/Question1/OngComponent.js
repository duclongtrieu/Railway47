import BoComponent from "./BoComponent";
import LoiNhanContext from "./LoiNhanContext";

function OngComponent(props) {
  const loinhan = "Học IT Nhàn Lắm";
  return (
    <LoiNhanContext.Provider value={loinhan}>
      <BoComponent />
    </LoiNhanContext.Provider>
  );
}
export default OngComponent;

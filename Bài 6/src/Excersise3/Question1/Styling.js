function Styling() {
  const Styler = {
    color: "aqua",
    backgroundColor: "pink",
  };
  return (
    <div>
      <h1
        // style={{
        //   color: "greenyellow",
        //   backgroundColor: "lightblue",
        //   padding: "10px",
        // }}
        style={Styler}
      >
        Full Name: Nguyễn Văn A
      </h1>
    </div>
  );
}
export default Styling;

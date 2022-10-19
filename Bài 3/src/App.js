import "./App.css";
import "../src/Css.css/divb1.css";
import "../src/Css.css/divb2.css";
import "../src/Css.css/divb3.css";
import "../src/Css.css/divh.css";
import "../src/Css.css/divm.css";
import "../src/Css.css/divleft.css";
import "../src/Css.css/divright.css";
import "../src/Css.css/divf.css";
import "../src/Css.css/divc.css";
import Content from "../src/Component/Readmore";
import { Row, Col } from "antd";
import React from "react";
import Person4 from "./Component/Person4";
import { useState } from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import HompPage from "./Component/HomPage";
import BodyHorizontal from "../src/Component/BodyHorizontal";
import BodyVertical from "../src/Component/BodyVertical";
import "../src/Component/Clock";
import Clock from "../src/Component/Clock";
// import Person from "./Component/Person";
// import Person1 from "./Component/Person1";
// import Person2 from "./Component/Person2";
// import Person3 from "./Component/Person3";
// import "./Css.css/parent.css";
// import React from "react";
// import { Form, Input, Button } from "antd";

//EX1
//Q1
// const divstyle = {
//   color: " pink",
// };
// function App() {
//   return React.createElement("h1", { style: divstyle }, "Hello Word");
// }

//Q2(a)
// function App(){
//   return(
//     <div>
//       <h1> Hello World</h1>
//       <p>  My frist paragraph</p>
//     </div>
//   );
// }

//Q2(b)
// function App() {
//   return (
//     <div>
//       <th> DANH SÁCH LỚP HỌC </th>
//       <ol>
//         <li>Nguyễn Ngọc Duy</li>
//         <li>Tống Quang Anh</li>
//         <li>Triệu Đức Long</li>
//         <li>Đinh Thu Loan</li>
//         <li>Nguyễn Tiến Quang</li>
//       </ol>
//       <br />
//       <ol>
//         <li>
//           {" "}
//           Cơm trưa
//           <ul>Cơm chiên hải sản</ul>
//           <ul>Cơm canh chua cá lóc</ul>
//         </li>
//         <li>
//           Tráng miệng trái cây
//           <ul>Nho</ul>
//           <ul>Xoài</ul>
//         </li>
//       </ol>
//     </div>
//   );
// }

// Q2(c);
// const css = {
//   color: "pink",
//   margin: "40px",
//   padding: "30px",
// };

// const handleshow = () => {
//   console.log("Helloooo");
// };
// function App() {
//   return (
//     <div style={css} onClick={handleshow}>
//       {" "}
//       Hellooooooo
//     </div>
//   );
// }

//Q3(a) cách 1
// function App() {
//   const h1Style = {
//     border: "solid",
//     borderColor: "pink",
//     backgroundColor: "white",
//     height: "100px",
//     color: "yellow",
//   };
//   return (
//     <div style={h1Style}>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// Q3(a) cách 2
// function App() {
//   return (
//     <div className="parent">
//       <h1>Hello World</h1>
//     </div>
//   );
// }

//Q3(b)
// function App() {
//   return (
//     <section>
//       <h2> Học lập trình web có đơn giản không</h2>
//       <img
//         src="https://reactjs.org/logo-og.png"
//         alt="avatar"
//         style={{ widh: "200px" }}
//       />
//       <p>
//         bal bla blab lba lbalb alblablalblablablalblalablabllalblbalalbalabllab
//       </p>
//       <button>Đọc Thêm</button>
//     </section>
//   );
// }

// Q3(c)
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Form>
//           <Form.Item label="User Name" name="username">
//             <Input placeholder="User Name" required></Input>
//           </Form.Item>
//           <Form.Item label="PassWord" name="password">
//             <Input placeholder="PassWord" required></Input>
//           </Form.Item>
//           <Form.Item>
//             <Button block type="primary" htmlType="submit">
//               Login
//             </Button>
//           </Form.Item>
//         </Form>
//       </header>
//     </div>
//   );
// }

//Q4(a)
// function App() {
//   return (
//     <div>
//       <Person />
//     </div>
//   );
// }

//EX2
//Q1(a)
// function App() {
//   return (
//     <div>
//       <Person1 />
//       <Person1 />
//       <Person1 />
//     </div>
//   );
// }

//Q1(c)
// function App() {
//   return (
//     <div>
//       <Person1 />
//       <Person2 />
//       <Person3 />
//     </div>
//   );
// }

//Q1(d)
// function App() {
//   return (
//     <div>
//       <div className="divh">header</div>
//       <div className="divm">menu</div>
//       <div>
//         <div className="divleft">
//           <div className="divb1">body1</div>
//           <div className="divb2">body2</div>
//         </div>

//         <div className="divright">
//           <div className="divb3">body3</div>
//         </div>
//         <div className="divc">content</div>
//       </div>
//       <div className="divf">footer</div>
//     </div>

//     <div>
//       <Row>
//         <Col lg={12}>
//           <div className="divh">header</div>
//         </Col>
//       </Row>

//       <Row>
//         <Col lg={12}>
//           <div className="divm">menu</div>
//         </Col>
//       </Row>

//       <Row>
//         <Col lg={6} className="divleft">
//           <div className="divb1">body1</div>
//           <div className="divb2">body2</div>
//         </Col>
//         <Col lg={6} className="divright">
//           <div className="divb3">body3</div>
//         </Col>
//       </Row>

//       <Row>
//         <Col lg={2}>
//           <div className="divf">footer</div>
//         </Col>
//       </Row>
//     </div>
//   );
// }

//EX4
//Q1+2+3
// function App() {
//   return (
//     <div>
//       <Person4 fullname="Nguyen Van A" age="24" />
//       <Person4 fullname="Nguyen Van B" age="25">
//         {" "}
//         Sống để ăn
//       </Person4>
//       <Person4 fullname="Nguyen Van C" age="26">
//         {" "}
//         Ăn để sống
//       </Person4>
//     </div>
//   );
// }

//Q4
// const changeDirection = () => {};

// function App() {
//   return (
//     <div>
//       <button onClick={() => changeDirection("horizontal")}>
//         Thay đổi dao diện 1
//       </button>
//       <button onClick={() => changeDirection("horizontal")}>
//         Thay đổi dao diện 2
//       </button>

//       <HompPage
//         top={<Header />}
//         main={
//           this.state.direction === "verical" ? (
//             <BodyVertical />
//           ) : (
//             <BodyHorizontal />
//           )
//         }
//         bottom={<Footer />}
//       />
//     </div>
//   );
// }

//EX5
//Q1(a)
// function App() {
//   return (
//     <div>
//       <Clock />
//     </div>
//   );
// }

//Q2
function App() {
  return (
    <div>
      <Content />
    </div>
  );
}
export default App;

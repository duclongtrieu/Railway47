import React from "react";
import "../Css.css/Person.css";
Person4.defaultProps = {
  children: "Không có lý tưởng sống",
};

function Person4(props) {
  return (
    <div className="Person">
      <h1> Full Name: {props.fullname} </h1>
      <p>Age: {props.age}</p>
      <p>Year of Birth: {new Date().getFullYear() - props.age}</p>
      <p>Sologan: {props.children}</p>
    </div>
  );
}
export default Person4;

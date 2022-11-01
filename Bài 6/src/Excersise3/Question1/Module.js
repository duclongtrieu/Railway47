import React from "react";
import styles from "./style.css";
class Module extends React.Component {
  render() {
    console.log(styles);
    return (
      <div>
        <h1 className={styles.fullName}>Full Name: Nguyễn Văn A</h1>
      </div>
    );
  }
}

export default Module;

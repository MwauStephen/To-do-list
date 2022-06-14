import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "submit"}
      onClick={props.Onclick}
      //   type={props.type ? "submit" : "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;

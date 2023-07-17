import React from "react";

//css
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <>
      <div className={styles["backdrop"]} onClick={props.onClose}></div>
      <div className={styles["content"]}>{props.children}</div>
    </>
  );
};

export default Modal;

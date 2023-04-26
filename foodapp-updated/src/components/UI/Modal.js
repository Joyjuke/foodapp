import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
      {/* 첫번째 인수 (child)는 요소, 문자열, fragment 같은 renderable React child입니다. 두번째 인수 (container)는 DOM 요소 */}
    </Fragment>
  );
};

export default Modal;

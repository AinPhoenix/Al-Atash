import React from 'react';
import { Children } from 'react/cjs/react.production.min';
import classes from './Modal.module.css';
function Modal({ show, onClose, text, img }) {
  if (!show) {
    return null;
  }
  return (
    <div className={classes.modalWrapper}>
      <div className={classes.modal} style={{ backgroundImage: `url(${img})` }}>
        <button onClick={onClose} className={`${classes.btnClose} btn-close`}></button>
        {text}
      </div>
    </div>
  );
}

export default Modal;

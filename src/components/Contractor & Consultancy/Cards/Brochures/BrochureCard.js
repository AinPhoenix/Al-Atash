import React from 'react';
import Modal from './Modal/Modal';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
import classes from './BrochureCard.module.css';
function BrochureCard(img, title) {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button
        className={classes.btn}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})`,
        }}
        onClick={() => setShow(true)}
      ></button>

      <Modal show={show} img={img} onClose={() => setShow(false)}></Modal>
    </div>
  );
}

export default BrochureCard;

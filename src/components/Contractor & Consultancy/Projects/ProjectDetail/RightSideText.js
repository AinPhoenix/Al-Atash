import React from 'react';
import classes from './RightSideText.module.css';

const RightSideText = ({ client, yearcompleted, title, img }) => {
  return (
    <div className={classes.parent} style={{}}>
      <div className={classes.imgbox} style={{}}>
        <img className={classes.imgboximg} style={{}} alt="" src={img} />
      </div>

      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>
          {title}
        </div>
        <div className={classes.childh2} style={{}}>
          Client:
        </div>
        <div className={classes.childp} style={{}}>
          {client}
        </div>
        <div className={classes.childh2} style={{}}>
          Project Type:
        </div>
        <div className={classes.childp} style={{}}>
          {yearcompleted}
        </div>
      </div>
    </div>
  );
};

export default RightSideText;

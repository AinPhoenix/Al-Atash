import React from 'react';
import classes from "./LeftSideText.module.css"
const LeftSideText = ({img,title,text}) => {
  return <div className={classes.parent} style={{}}>
      
    
      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>{title}</div>
        <div className={classes.childp} style={{}}>{text} </div>
 
      </div>
      <div className={classes.imgbox} style={{}}>
      <img className={classes.imgboximg} style={{ }} alt="" src={img} />
      </div>
  </div>;
};

export default LeftSideText;
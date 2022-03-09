import React from 'react';
import LaptopDevice from "../../../images/Estimation & Management/Laptop Device.png";
import classes from "./Intro.module.css";

const Intro = () => {
  return <div className={classes.parent} style={{}}>
    
      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>Al-ATASH</div>
        <div className={classes.childh2} style={{}}>Estimation & Management</div>
        <div className={classes.childp} style={{}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.
        </div>
        <div className={classes.imgalign} style={{}}>
              <a href="" >
                <button  className={classes.childbtn} style={{}}>
                  See More
                </button>
              </a>
        </div>
      </div>

      <div className={classes.imgbox} style={{}}>
      <img className={classes.imgboximg} style={{ }} alt="" src={LaptopDevice} />
      </div>
    
  </div>;
};

export default Intro;

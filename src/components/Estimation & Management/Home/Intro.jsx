import React from 'react';
import LaptopDevice from '../../../images/Estimation & Management/Laptop Device.png';
import classes from './Intro.module.css';

const Intro = () => {
  return (
    <div className={classes.parent} style={{}}>
      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>
          Al-ATASH
        </div>
        <div className={classes.childh2} style={{}}>
          Estimation & Management
        </div>
        <div className={classes.childp} style={{}}>
          Al Atash Building Estimation was established under the umbrella of Al Atash Group with its various other
          sub-companies working in a diverse market. The company offers financial consultancy for future construction of
          residential and commercial buildings, landscapes, parks, societies, industries, HVAC installation, designing,
          and all kinds of other infrastructures.
        </div>
        {/* <div className={classes.imgalign} style={{}}>
              <a href="" >
                <button  className={classes.childbtn} style={{}}>
                  See More
                </button>
              </a>
        </div> */}
      </div>

      <div className={classes.imgbox} style={{}}>
        <img className={classes.imgboximg} style={{}} alt="" src={LaptopDevice} />
      </div>
    </div>
  );
};

export default Intro;

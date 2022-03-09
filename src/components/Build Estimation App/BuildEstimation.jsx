import React from 'react';

import BackgroundPic from '../../images/Estimation App/BackgroundPic.png';
import MobileDevice from '../../images/Estimation App/MobileDevice.png';
import MainLogo from '../../images/Estimation App/Estimation App.png';

import classes from './BuildEstimation.module.css';

const BuildEstimation = () => {
  return (
    <div className={classes.backgroundBorder} style={{ backgroundImage: `url(${BackgroundPic})` }}>
      <div className={`container ${classes.logo}`}>
        <img className={classes.logosrc} alt="App Logo" src={MainLogo} />
      </div>
      <div className={`container ${classes.flexd}`}>
        <div className={classes.flexbox1}>
          <div className={classes.textalign} style={{ backgroundColor: 'transparent' }}>
            <h1 className={classes.h1}>Calculate Building</h1>
            <h1 className={classes.h1}>Estimate</h1>
            <p>
              Al-Atash Group Of Estimation & Management built the Building Estimation app as a Free app which provide
              his users accurate estimation of cost and building materials of any kind of construction. By providing
              some basic measurements i.e. length, breath or height user can get the fast and accurate result about
              constructing site, in which he can get the information about that how much materials will required and
              what will be the estimation of cost.
            </p>
            <div className={classes.btn}>
              <a href="https://play.google.com/store/apps/details?id=com.civilworks.application&hl=en">
                <button className={classes.button}>
                  Download Now <i class="fa fa-arrow-right" style={{ paddingLeft: '20px' }}></i>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className={classes.flexbox2}>
          <img className={classes.MobileD} alt="Mobile Branding" src={MobileDevice} />
        </div>
      </div>
    </div>
  );
};

export default BuildEstimation;

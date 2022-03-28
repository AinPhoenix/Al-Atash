import React from 'react';

import classes from './LowerSection.module.css';

import infa from './../../../images/Estimation & Management/infrastruture.jpg';

const LowerSection = () => {
  return (
    <div className={classes.section}>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Frame + Gray Structure</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Finishing</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Furnish</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Electrical</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Plumbing</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Hvac</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Security</div>
      </div>
      <div className={classes.card}>
        <img src={infa} />
        <div className={classes.card_title}>Solar</div>
      </div>
    </div>
  );
};

export default LowerSection;

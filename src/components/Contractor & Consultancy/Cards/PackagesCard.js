import React from 'react';
import classes from './PackagesCard.module.css';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';

import { Link } from 'react-router-dom';
const PackagesCard = ({}) => {
  return (
    <div>
      <div className={classes.parent} style={{}}>
        <div
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})` }}
        ></div>
      </div>
      <div className={classes.btn}>
        <div className={classes.h1}>Economy Class</div>
        <div className={classes.childbtn}>
          <div className={classes.p1}>PKR 10000/-</div>
          <div className={classes.p1}>Pr Square Foot</div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;

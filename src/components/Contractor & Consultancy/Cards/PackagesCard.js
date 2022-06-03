import React from 'react';
import classes from './PackagesCard.module.css';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';

import { Link } from 'react-router-dom';
const PackagesCard = ({ img, title, measure, price }) => {
  return (
    <div>
      <div className={classes.parent} style={{}}>
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})` }}></div>
      </div>
      <div className={classes.btn}>
        <div className={classes.h1}>{title}</div>
        <div className={classes.childbtn}>
          <div className={classes.p1}>PKR {price}/-</div>
          <div className={classes.p1}>{measure}</div>
        </div>
      </div>
    </div>
  );
};

export default PackagesCard;

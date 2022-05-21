import React from 'react';
import classes from './OffersCardMoreWidth.module.css';
import { Link } from 'react-router-dom';
const OffersCardMoreWidth = ({img,text,link}) => {
    return<div >
        <div className={classes.parent} style={{}}>
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})`}}></div>
            <Link to={link} className={classes.btn}>{ text}</Link>
        </div>
  </div>;
};

export default OffersCardMoreWidth;
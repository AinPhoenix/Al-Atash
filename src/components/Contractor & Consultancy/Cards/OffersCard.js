import React from 'react';
import classes from './OffersCard.module.css';
const OffersCard = ({img,text,link}) => {
    return<div >
        <div className={classes.parent} style={{}}>
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})`}}></div>
            <a href={link} style={{}}>{ text}</a>
        </div>
  </div>;
};

export default OffersCard;

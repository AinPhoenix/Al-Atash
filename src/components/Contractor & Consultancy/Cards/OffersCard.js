import React from 'react';
import classes from './OffersCard.module.css';
import { Link } from 'react-router-dom';
const OffersCard = ({ id, img, text }) => {
  return (
    <div>
      <div className={classes.parent} style={{}}>
        <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})` }}></div>
        <Link to={`/ContractorConsultancy/services/${id}`} className={classes.btn}>
          {text}
        </Link>
      </div>
    </div>
  );
};

export default OffersCard;

import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ServicesCard.module.css';

const ServicesCard = ({ id, img, cmpTitle }) => {
  return (
    <div className={classes.parent} style={{}}>
      <div style={{}}>
        <img className={classes.img} style={{}} alt="" src={img} />
      </div>
      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>
          {cmpTitle}
        </div>
        <div>
          {/* <a href={Link} className={classes.btn} style={{}}></a> */}
          <Link to={`/estimationManagement/services/${id}`} className={classes.btn}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

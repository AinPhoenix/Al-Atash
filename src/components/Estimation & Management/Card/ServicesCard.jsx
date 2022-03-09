import React from 'react';

import classes from './ServicesCard.module.css';

const ServicesCard = ({key, img, cmpTitle, Link}) => {
  return (
       <div className={classes.parent} style={{}}>
    <div style={{}}>
      <img className={classes.img} style={{}} alt="" src={img} />
      </div>
        <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>
            {cmpTitle}
        </div>
        <div >
          <a href={Link} className={classes.btn} style={{}}>View Details</a>
        </div>
    
        </div>
    </div>

  );
};

export default ServicesCard;

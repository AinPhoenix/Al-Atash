import React from 'react';
import classes from './ServicesCard.module.css';
import exterior from "../../../images/Estimation & Management/ser/exterior.jpg";
const ServicesCard = () => {
  return <div>
    <div className={classes.parentflex} style={{ }}>
      <div className={classes.childflex1} style={{  }}>
              <div className={classes.child1img } style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`}} ></div>
      </div>
      <div className={classes.childflex2} style={{ }}>
        <div className={classes.child2text} style={{}}>
          <h1 style={{}}>Architect & Interiors</h1>
          <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.</p>
          <a href='' style={{}}>View More</a>
        </div>
      </div>
    </div>
    
  </div>;
};

export default ServicesCard;

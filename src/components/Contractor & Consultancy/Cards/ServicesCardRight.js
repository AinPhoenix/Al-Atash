import React from 'react';
import classes from './ServicesCardRight.module.css';
const ServicesCardRight = ({img,title,text,link}) => {
  return <div>
    <div className={classes.parentflex} style={{ }}>
      <div className={classes.childflex1} style={{  }}>
              <div className={classes.child1img } style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})`}} ></div>
      </div>
      <div className={classes.childflex2} style={{ }}>
        <div className={classes.child2text} style={{}}>
          <h1 style={{}}>{ title}</h1>
          <p style={{}}>{ text}</p>
          <a href={link} style={{}}>View More</a>
        </div>
      </div>
    </div>
    
  </div>;
};

export default ServicesCardRight;

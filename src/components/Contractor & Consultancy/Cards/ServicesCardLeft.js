import React from 'react';
import classes from './ServicesCardLeft.module.css';
import { Link } from 'react-router-dom';
const ServicesCardLeft = ({img,title,text,link}) => {
  return <div>
    <div className={classes.parentflex}  >
      <div className={classes.childflex1}  >
              <div className={classes.child1img } style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})`}} ></div>
      </div>
      <div className={classes.childflex2}  >
        <div className={classes.child2text}  >
          <h1  >{ title}</h1>
          <p  >{ text}</p>
          <Link className={classes.btn} to={link} >View More</Link>
        </div>
      </div>
    </div>
    
  </div>;
};

export default ServicesCardLeft;

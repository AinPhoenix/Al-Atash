import React from 'react';
import { Link } from 'react-router-dom';
import classes from './LeftSideTextBtn.module.css';
const LeftSideText = ({ img, title, text, link }) => {
  return (
    <div className={classes.parent} style={{}}>
      <div className={classes.child} style={{}}>
        <div className={classes.childh1} style={{}}>
          {title}
        </div>
        <div className={classes.childp} style={{}}>
          {text}{' '}
        </div>
        <div className={classes.padding} style={{}}></div>
        {link === '' ? (
          ''
        ) : (
          <div className={classes.btnbox} style={{}}>
            <Link className={classes.btn} to={link}>
              View More
            </Link>
          </div>
        )}
      </div>
      <div className={classes.imgbox} style={{}}>
        <img
          className={classes.imgboximg}
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${img})' }}
          alt=""
          src={img}
        />
      </div>
    </div>
  );
};

export default LeftSideText;

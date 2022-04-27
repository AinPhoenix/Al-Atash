import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.screen}>
      <span>↓</span>
      <span className={classes.span1}>↓</span>
      <span className={classes.span2}>↓</span>
      <span className={classes.span3}>↓</span>
      <span className={classes.span4}>↓</span>
    </div>
  );
};

export default Loader;

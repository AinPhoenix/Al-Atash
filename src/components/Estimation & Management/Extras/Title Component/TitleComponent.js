import React from 'react';
import classes from '../../Extras/Title Component/TitleComponent.module.css';

const TitleComponent = ({ title }) => {
  return (
    <div className={classes.main}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleComponent;

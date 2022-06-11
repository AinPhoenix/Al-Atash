import React from 'react';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
import classes from './Introslide.module.css';

const Introslide = () => {
  return (
    <div style={{ width: '100%' }}>
      <div
        className={classes.parent}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
        }}
      >
        <div className={classes.child} style={{}}>
          <h1 style={{}}>Al Atash Contractor & Consultancy</h1>
          <p style={{}}>
            AL ATASH GROUP is a trusted name in the house construction and consultancy industry. With the extensive
            experience in the field since 2011, Al-Atash Group has made a name for itself providing high quality
            Construction and Building services to its clientele.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introslide;

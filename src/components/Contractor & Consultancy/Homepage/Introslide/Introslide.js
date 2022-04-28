import React from 'react';
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";
import classes from './Introslide.module.css';

const Introslide = () => {
  return <div style={{ width: '100%' }}>
    <div className={classes.parent} style={{
     backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`
    }}>
      <div className={classes.child} style={{}}>
        <h1 style={{}}>Al Atash Contractor & Consultancy</h1>
        <p style={{}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.</p>
      </div>
    </div>
  </div>;
};

export default Introslide;

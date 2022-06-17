import React from 'react';
import RightSideText from '../../Cards/RightSideText';
import exterior from '../../../../images/Contractor & Consultancy/architect.png';
import whereto from '../../../../images/Contractor & Consultancy/pngs/whereto.png';
import LeftSideText from '../../Cards/LeftSideText';
import classes from './Whatwedo.module.css';
export default function Whatwedo() {
  return (
    <div>
      <div
        className={classes.whatwedo}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
        }}
      >
        WHAT WE DO
      </div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',

          width: '90%',

          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        <br />
        <RightSideText
          text="The property or the plot is purchased by the names of the investors to make them safe and secure for their interests. Investor has complete right to sale the project after the completion (as agreed with each other)."
          title="How to Invest  "
          img={whereto}
        />
        <LeftSideText
          text="Investing in construction is an idea of joint venture of financers and service provider.     
          When an investor has the property or plot and wants us to invest on it then we arrange the funds for the construction.
          
          When an investor has funds then we arrange property or plot to construct with us."
          title="Where to Invest"
          img={exterior}
        />
      </div>
      <br />
    </div>
  );
}

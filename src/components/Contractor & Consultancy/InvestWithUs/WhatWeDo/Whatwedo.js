import React from 'react';
import RightSideText from '../../Cards/RightSideText';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
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
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis."
          title="How to Invest  "
          img={exterior}
        />
        <LeftSideText
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis."
          title="Where to Invest"
          img={exterior}
        />
      </div>
      <br />
    </div>
  );
}

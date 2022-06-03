import React from 'react';
import RightSideText from '../../Cards/RightSideText';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
import LeftSideText from '../../Cards/LeftSideText';
export default function Whatwedo() {
  return (
    <div>
      <div
        style={{
          width: '100%',
          padding: '3vh 0',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '6.5vh',
          color: 'white',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        WHAT WE DO
      </div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          rowGap: '2vh',
          width: '90%',
          columnGap: '10%',
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

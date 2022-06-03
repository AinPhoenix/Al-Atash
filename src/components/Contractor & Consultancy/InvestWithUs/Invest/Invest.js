import React from 'react';
import RightSideText from '../../Cards/RightSideText';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';

export default function Invest() {
  return (
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
      <RightSideText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis."
        title="Invest with Us"
        img={exterior}
      />
    </div>
  );
}

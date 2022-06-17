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
        text="Al-Atash Group has the dynamic platform for the investors, individuals and companies to field of the construction, but they are deficient, Al-Atash Group give a very good and safe opportunity for them. Al-Atash Group finds the best opportunity to buy properties or plots for the investors."
        title="Invest with Us"
        img={exterior}
      />
    </div>
  );
}

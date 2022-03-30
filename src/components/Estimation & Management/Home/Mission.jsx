import React from 'react';
import MissionImg from '../../../images/Estimation & Management/Mission1.png';
import RightSideText from '../Card/RightSideText';
const Title = 'OUR MISSION';
const Text =
  'Our mission is to offer effective financial analysis for our clients by opting for the new ideas, hands-on experience, and diverse ways of thinking. With our fierce commitment to the clients’ success and budget, we give them the strategies they need.';

const Mission = () => {
  return (
    <div>
      <RightSideText text={Text} title={Title} img={MissionImg} />
    </div>
  );
};

export default Mission;

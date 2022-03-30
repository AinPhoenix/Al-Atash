import React from 'react';
import VisionImg from '../../../images/Estimation & Management/Vision1.jpeg';
import LeftSideText from '../Card/LeftSideText';

const Text =
  'Our vision is to set leading standards, quality, and reliability in our consultancy for future construction by bringing innovative solutions and research in our methods.';
const Title = 'OUR VISION';

const Vision = () => {
  return (
    <div>
      <LeftSideText text={Text} img={VisionImg} title={Title} />
    </div>
  );
};

export default Vision;

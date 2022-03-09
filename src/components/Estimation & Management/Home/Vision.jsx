import React from 'react';
import VisionImg from "../../../images/Estimation & Management/Vision1.jpeg";
import LeftSideText from '../Card/LeftSideText';

const Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const Title = "OUR VISION";

const Vision = () => {
  return <div>
      <LeftSideText text={Text} img={VisionImg} title={Title}/>
      </div>
};

export default Vision;
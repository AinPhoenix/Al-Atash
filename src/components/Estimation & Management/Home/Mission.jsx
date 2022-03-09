import React from 'react';
import MissionImg from "../../../images/Estimation & Management/Mission1.png";
import RightSideText from "../Card/RightSideText";
const Title="OUR MISSION";
const Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";

const Mission = () => {
  return <div>
    <RightSideText text={Text} title={Title} img={MissionImg}/>
  </div>;
};

export default Mission;
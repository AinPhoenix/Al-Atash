import React from 'react';
import MissionImg from '../../../images/Estimation & Management/Mission1.png';
import VisionImg from '../../../images/Estimation & Management/Vision1.jpeg';
import LeftSideText from '../../Estimation & Management/Card/LeftSideText';
import classes from '../Vision&Mision/ContractorConsultancyMissionVisionPage.module.css';
import RightSideText from '../../Estimation & Management/Card/RightSideText';
const Title = 'OUR VISION';
const Text =
  'Our vision is to turn into the main development specialist organization in Pakistan and connect with worldwide business sectors and become a universally perceived and confided in substance. To arrive at this objective we endeavor to be the best bidder and to convey the best quality of value.';
const Title1 = 'OUR MISSION';
const Text1 =
  'We have confidence in building dependable business associations with our clients and at Al Atash Group, every single client is significant.';

const ContractorConsultancyMissionVisionPage = () => {
  return (
    <div>
      <LeftSideText text={Text} img={VisionImg} title={Title} />
      <RightSideText text={Text1} img={MissionImg} title={Title1} />
      <div className={classes.parent}>
        <div className={classes.child}>
          <div className={classes.childh1}>Why Choose Us</div>
          <div className={classes.childp}>
            Al-Atash has the dynamic platform for the investors, individuals and companies to field of the construction,
            but they are deficient, MSCC give a very good and safe opportunity for them. Al-Atash finds the best
            opportunity to buy properties or plots for the investors.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractorConsultancyMissionVisionPage;

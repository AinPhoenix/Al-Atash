import React from 'react';
import MissionImg from '../../../images/Estimation & Management/Mission1.png';
import VisionImg from '../../../images/Estimation & Management/Vision1.jpeg';
import LeftSideText from "../../Estimation & Management/Card/LeftSideText";
import classes from "../Vision&Mision/ContractorConsultancyMissionVisionPage.module.css";
import RightSideText from "../../Estimation & Management/Card/RightSideText";
const Title = 'OUR VISION';
const Text =
    'Our vision is to become the leading construction service provider in Pakistan and reach out to International markets and become a globally recognized and trusted entity. To reach this goal we strive to be the best bidder and to deliver the highest standard of quality.';
const Title1 = 'OUR MISSION';
const Text1 =
    'Our mission is to offer effective financial analysis for our clients by opting for the new ideas, hands-on experience, and diverse ways of thinking. With our fierce commitment to the clients’ success and budget, we give them the strategies they need.';
  
const ContractorConsultancyMissionVisionPage = () => {
    return <div>
        <LeftSideText text={Text} img={VisionImg} title={Title} />
        <RightSideText text={Text1} img={MissionImg} title={Title1} />
        <div className={classes.parent} >
            <div className={classes.child}>
                <div className={classes.childh1}>Why Choose Us</div>
            <div className={classes.childp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.
            </div>

            </div>
        </div>
  </div>;
};

export default ContractorConsultancyMissionVisionPage;

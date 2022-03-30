import React from 'react';
import RightSideTextBtn from '../Card/RightSideTextBtn';
import LeftSideTextBtn from '../Card/LeftSideTextBtn';
import Interior from '../../../images/Estimation & Management/ser/interior.jpg';
import Exterior from '../../../images/Estimation & Management/ser/exterior.jpg';
import CommercialBuilding from '../../../images/Estimation & Management/ser/commercial.jpg';
import ResidentialBuilding from '../../../images/Estimation & Management/ser/residental.jpg';
import Infrastructure from '../../../images/Estimation & Management/ser/infrastruture.jpg';
import RoadsHighways from '../../../images/Estimation & Management/ser/roads.jpg';
import LandscapePark from '../../../images/Estimation & Management/ser/park.jpg';
import HVAC from '../../../images/Estimation & Management/ser/hvac.jpg';
import TitleComponent from '../Extras/Title Component/TitleComponent';

const InteriorTitle = 'Interior';
const InteriorText =
  'We have the expertise of helping you design the most beautiful and extra ordinary housing interiors. With the combined expertise of our team of our team, we estimate interior design and renovation costs for you.';
const Interiorlink = '/estimationManagement/services';

const ExteriorTitle = 'Exterior';
const ExteriorText =
  'We have the expertise of helping you design the most beautiful and extra ordinary housing interiors. With the combined expertise of our team of our team, we estimate exterior design and renovation costs for you.';
const Exteriorlink = '/estimationManagement/services';

const CommercialBuildingTitle = 'Commercial Buildings';
const CommercialBuildingText =
  'Commercial Building estimation also involves monitoring and analysis at each stage of construction. The steps are Before Construction Estimation, Frame Structure Estimation, Grey Structure Estimation, Finishing Estimation and Furnish Estimation.';
const CommercialBuildinglink = '/estimationManagement/services';

const ResidentialBuildingTitle = 'Residential Buildings';
const ResidentialBuildingText =
  'We provide expert residential building estimation. The analysis process involves various steps that are crucial for an error-free output. The steps are Before Construction Estimation, Frame Structure Estimation, Grey Structure Estimation, Finishing Estimation and Furnish Estimation.';
const ResidentialBuildinglink = '/estimationManagement/services';

const InfrastructureTitle = 'Infrastructure';
const InfrastructureText =
  'Our expertise in this sector revolves around catering accurate and detailed plans with premium project management. Our services are carried out by professional planners and experienced workmen to deliver quality end-results. We provide Road Works, Electrical Work, Sewerage Works, Water Works, Security System, Main Gate and Sign Board Works. ';
const Infrastructurelink = '/estimationManagement/services';

const RoadsHighwaysTitle = 'Roads/Highways';
const RoadsHighwaysText =
  'We provide expert insight for longitudinal and cross-sectional area of the roads. From materials, machinery, to final execution, we take care of each and every financial detail the earthwork requires including the consideration of floods, gradient, height of bank, depth of cutting, etc. ';
const RoadsHighwayslink = '/estimationManagement/services';

const LandscapeParkTitle = 'Landscape & Park';
const LandscapeParkText =
  'We have hired the best landscape estimators for you. Their job is to collect the data of required materials and all items that would be involved in the execution of the project. ';
const LandscapeParklink = '/estimationManagement/services';

const HVACTitle = 'HVAC';
const HVACText =
  'Our HVAC specialists provide a deep insight of heating, ventilation, and air conditioning projects. These involve the cost of material, labor, and varies with respect to clients needs.';
const HVAClink = '/estimationManagement/services';

const Services = () => {
  return (
    <div>
      <TitleComponent title="Services" />

      <RightSideTextBtn img={Interior} title={InteriorTitle} text={InteriorText} link={Interiorlink} />
      <LeftSideTextBtn img={Exterior} title={ExteriorTitle} text={ExteriorText} link={Exteriorlink} />

      <RightSideTextBtn
        img={CommercialBuilding}
        title={CommercialBuildingTitle}
        text={CommercialBuildingText}
        link={CommercialBuildinglink}
      />
      <LeftSideTextBtn
        img={ResidentialBuilding}
        title={ResidentialBuildingTitle}
        text={ResidentialBuildingText}
        link={ResidentialBuildinglink}
      />

      <RightSideTextBtn
        img={Infrastructure}
        title={InfrastructureTitle}
        text={InfrastructureText}
        link={Infrastructurelink}
      />
      <LeftSideTextBtn
        img={RoadsHighways}
        title={RoadsHighwaysTitle}
        text={RoadsHighwaysText}
        link={RoadsHighwayslink}
      />

      <RightSideTextBtn
        img={LandscapePark}
        title={LandscapeParkTitle}
        text={LandscapeParkText}
        link={LandscapeParklink}
      />
      <LeftSideTextBtn img={HVAC} title={HVACTitle} text={HVACText} link={HVAClink} />
    </div>
  );
};

export default Services;

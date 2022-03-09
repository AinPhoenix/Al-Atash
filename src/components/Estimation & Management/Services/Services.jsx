import React from "react";
import RightSideTextBtn from "../Card/RightSideTextBtn";
import LeftSideTextBtn from "../Card/LeftSideTextBtn";
import Interior from "../../../images/Estimation & Management/ser/interior.jpg";
import Exterior from "../../../images/Estimation & Management/ser/exterior.jpg";
import CommercialBuilding from "../../../images/Estimation & Management/ser/commercial.jpg";
import ResidentialBuilding from "../../../images/Estimation & Management/ser/residental.jpg";
import Infrastructure from "../../../images/Estimation & Management/ser/infrastruture.jpg";
import RoadsHighways from "../../../images/Estimation & Management/ser/roads.jpg";
import LandscapePark from "../../../images/Estimation & Management/ser/park.jpg";
import HVAC from "../../../images/Estimation & Management/ser/hvac.jpg";

const InteriorTitle="Interior";
const InteriorText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const Interiorlink="/estimationManagement/services";

const ExteriorTitle="Exterior";
const ExteriorText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const Exteriorlink="/estimationManagement/services";

const CommercialBuildingTitle="Commercial Buildings";
const CommercialBuildingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const CommercialBuildinglink="/estimationManagement/services";

const ResidentialBuildingTitle="Residential Buildings";
const ResidentialBuildingText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const ResidentialBuildinglink="/estimationManagement/services";

const InfrastructureTitle="Infrastructure";
const InfrastructureText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const Infrastructurelink="/estimationManagement/services";

const RoadsHighwaysTitle="Roads/Highways";
const RoadsHighwaysText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const RoadsHighwayslink="/estimationManagement/services";

const LandscapeParkTitle="Landscape & Park";
const LandscapeParkText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const LandscapeParklink="/estimationManagement/services";

const HVACTitle="HVAC";
const HVACText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium purus eros, ut bibendum est pharetra nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consectetur massa sit amet velit commodo, vel sodales enim laoreet.";
const HVAClink="/estimationManagement/services";

const Services = () => {
return(
    <div>
    <div style={{display:"flex",width:"100%",height:"10vh",alignItems:"center",justifyContent:"center",background: "transparent linear-gradient(180deg, #00B4DB 0%, #0083B0 100%) 0% 0% no-repeat padding-box",font: "normal normal normal 60px/80px Poppins",color:"#FFFFFF"}}>
        Services
    </div>
        <RightSideTextBtn img={Interior} title={InteriorTitle} text={InteriorText} link={Interiorlink} />
        <LeftSideTextBtn img={Exterior} title={ExteriorTitle} text={ExteriorText} link={Exteriorlink} />

        <RightSideTextBtn img={CommercialBuilding} title={CommercialBuildingTitle} text={CommercialBuildingText} link={CommercialBuildinglink} />
        <LeftSideTextBtn img={ResidentialBuilding} title={ResidentialBuildingTitle} text={ResidentialBuildingText} link={ResidentialBuildinglink} />

        <RightSideTextBtn img={Infrastructure} title={InfrastructureTitle} text={InfrastructureText} link={Infrastructurelink} />
        <LeftSideTextBtn img={RoadsHighways} title={RoadsHighwaysTitle} text={RoadsHighwaysText} link={RoadsHighwayslink} />

        <RightSideTextBtn img={LandscapePark} title={LandscapeParkTitle} text={LandscapeParkText} link={LandscapeParklink} />
        <LeftSideTextBtn img={HVAC} title={HVACTitle} text={HVACText} link={HVAClink} />
    </div>
);


};

export default Services;
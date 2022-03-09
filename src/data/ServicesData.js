import Exterior from "../images/Estimation & Management/Exterior.PNG";
import HVAC from "../images/Estimation & Management/HVAC.PNG";
import Infrastructure from "../images/Estimation & Management/Infrastructure.PNG";
import Interior from "../images/Estimation & Management/Interior.PNG";
import Landscape from "../images/Estimation & Management/Landscape & Park.PNG";
import MEPEstimation from "../images/Estimation & Management/MEP Estimation.PNG";
import RoadsHighways from "../images/Estimation & Management/RoadsHighways.PNG";
import CommercialBuilding from "../images/Estimation & Management/Commercial Building.PNG";
import ResidentialBuilding from "../images/Estimation & Management/Residential Building.PNG";
import Construction from "../images/Estimation & Management/Construction.PNG";

const ServicesData = () => {

    return[
        {
        key:1,
        title:'Exterior',
        img:Exterior,
        Link: "/estimationManagement/",
    },
    {
        key:2,
        title:'HVAC',
        img:HVAC,
        Link: "/estimationManagement/",
    },
    {
        key:3,
        title:'Infrastructure',
        img:Infrastructure,
        Link: "/estimationManagement/",
    },
    {
        key:4,
        title:'Interior',
        img:Interior,
        Link: "/estimationManagement/",
    },
    {
        key:5,
        title:'Landscape & Park',
        img:Landscape,
        Link: "/estimationManagement/",
    },
    {
        key:6,
        title:'MEP Estimation',
        img:MEPEstimation,
        Link: "/estimationManagement/",
    },
    {
        key:7,
        title:'Roads / Highways',
        img:RoadsHighways,
        Link: "/estimationManagement/",
    },
    {
        key:8,
        title:'Commercial Building',
        img:CommercialBuilding,
        Link: "/estimationManagement/",
    },
    {
        key:9,
        title:'Residential Building',
        img:ResidentialBuilding,
        Link: "/estimationManagement/",
    },
    {
        key:10,
        title:'Construction',
        img:Construction,
        Link: "/estimationManagement/",
    },
];
};

export default ServicesData;
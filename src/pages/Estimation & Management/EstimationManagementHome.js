import React from 'react';
import Intro from "../../components/Estimation & Management/Home/Intro";
import Mission from "../../components/Estimation & Management/Home/Mission";
import Vision from "../../components/Estimation & Management/Home/Vision";
import Services from "../../components/Estimation & Management/Home/Services";
import Projects from "../../components/Estimation & Management/Home/Projects";
import { Fragment } from "react/cjs/react.production.min";
import Slider from '../../components/Estimation & Management/Home/Slider';

const EstimationManagementHome = () => {
  return     <Fragment >
  <Intro />
  <Mission />
  <Vision />
  <Services />
  <Projects />
  <Slider />
</Fragment>
};

export default EstimationManagementHome;

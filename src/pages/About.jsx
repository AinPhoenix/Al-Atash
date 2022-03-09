import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import VersesBar from "../components/VersesBar";
import Navbar from "../components/Main/Navbar/Navbar";

import Services from "../components/Main/About/OurServices";
import Abouts from "../components/Main/About/Abouts";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <Fragment>
      <VersesBar />
      <Navbar About="active_nav" />

      <Abouts />
      <Services />

      <Footer />
    </Fragment>
  );
};

export default About;

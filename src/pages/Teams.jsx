import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import VersesBar from "../components/VersesBar";
import Navbar from "../components/Main/Navbar/Navbar";

import Team from "../components/Main/Teams/Team";
import Footer from "../components/Footer/Footer";

const About = () => {
  return (
    <Fragment>
      <VersesBar />
      <Navbar Team="active_nav" />

      <Team />
      <Footer />
    </Fragment>
  );
};

export default About;

import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import VersesBar from "../components/VersesBar";
import Navbar from "../components/Main/Navbar/Navbar";

import Projects from "../components/Main/Home/Projects";
import Groups from "../components/Main/Home/Groups";
import Material from "../components/Main/Home/Material";
import ContactUs from "../components/Main/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <div>
        <VersesBar />
        <Navbar Home="active_nav" />

        <Groups />
        <Projects />
        <Material />

        <ContactUs />
        <Footer />
      </div>
    </Fragment>
  );
};

export default Home;

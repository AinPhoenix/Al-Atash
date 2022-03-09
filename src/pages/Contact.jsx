import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import VersesBar from "../components/VersesBar";
import Navbar from "../components/Main/Navbar/Navbar";

import Touch from "../components/Main/Contact/Touch";
import Message from "../components/Main/Contact/Message";
import MyMap from "../components/Main/Contact/MyMap";
import Footer from "../components/Footer/Footer";

const Contact = () => {
  return (
    <Fragment>
      <VersesBar />
      <Navbar Contact="active_nav" />

      <Touch />
      <Message />

      <MyMap />

      <Footer />
    </Fragment>
  );
};

export default Contact;

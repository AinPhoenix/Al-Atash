import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Estimation & Management/Navbar/Navbar';
import VersesBar from '../../components/VersesBar';

const EstimationManagementMain = () => {
  return (
    <Fragment >
      <VersesBar />
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default EstimationManagementMain;

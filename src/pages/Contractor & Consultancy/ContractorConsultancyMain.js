import React from 'react';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import Footer from '../../components/Contractor & Consultancy/Footer/Footer';
import Navbar from '../../components/Contractor & Consultancy/Navbar/Navbar';

const ContractorConsultancyMain = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default ContractorConsultancyMain;

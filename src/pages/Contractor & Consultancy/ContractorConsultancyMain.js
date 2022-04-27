import React from 'react';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

const ContractorConsultancyMain = () => {
  return (
    <Fragment>
      Navbar
      <Outlet />
      Footer
    </Fragment>
  );
};

export default ContractorConsultancyMain;

import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Teams';
import NotFound from './pages/NotFound';
import UnderConstruction from './pages/UnderConstruction';
import BuildEstimationApp from './pages/Build Estimation App/BuildEstimationApp';
import Main from './pages/Buildgencies/Main';
import ComingSoon from './pages/Buildgencies/ComingSoon';

// ----- Estimation & Management -----
import EstimationManagementMain from './pages/Estimation & Management/EstimationManagementMain';
import EstimationManagementHome from './pages/Estimation & Management/EstimationManagementHome';
import EstimationManagementAbout from './pages/Estimation & Management/EstimationManagementAbout';
import EstimationManagementServices from './pages/Estimation & Management/EstimationManagementServices';
import EstimationManagementProjects from './pages/Estimation & Management/EstimationManagementProjects';
import EstimationManagementTeam from './pages/Estimation & Management/EstimationManagementTeam';
import EstimationManagementService from './pages/Estimation & Management/EstimationManagementService';
import EstimationManagementProject from './pages/Estimation & Management/EstimationManagementProject';

// ----- Contractor & Consultancy -----
import ContractorConsultancyMain from './pages/Contractor & Consultancy/ContractorConsultancyMain';
import ContractorConsultancyHome from './pages/Contractor & Consultancy/ContractorConsultancyHome';
import ContractorConsultancyOurVision from './pages/Contractor & Consultancy/ContractorConsultancyOurVision';
import ContractorConsultancyOurCoreValues from './pages/Contractor & Consultancy/ContractorConsultancyOurCoreValues';
import ContractorConsultancyServices from './pages/Contractor & Consultancy/ContractorConsultancyServices';
import ContractorConsultancyService from './pages/Contractor & Consultancy/ContractorConsultancyService';
import ContractorConsultancyOurProjects from './pages/Contractor & Consultancy/ContractorConsultancyOurProjects';
import ContractorConsultancyBrochures from './pages/Contractor & Consultancy/ContractorConsultancyBrochures';
import ContractorConsultancyPackages from './pages/Contractor & Consultancy/ContractorConsultancyPackages';
import ContractorConsultancyInvestWithUs from './pages/Contractor & Consultancy/ContractorConsultancyInvestWithUs';
import ContractorConsultancyContactUs from './pages/Contractor & Consultancy/ContractorConsultancyContactUs';
import ContractorConsultancyAbout from './pages/Contractor & Consultancy/ContractorConsultancyAbout';

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index={true} path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/UnderConstruction" element={<UnderConstruction />} />

        {/* Build Estimation App */}
        <Route path="/buildEstimationApp" element={<BuildEstimationApp />} />

        {/* Buildgencies Side */}
        <Route path="/builgenices" element={<Main />}>
          <Route index={true} path="*" element={<ComingSoon />} />
        </Route>

        {/* Estimation & Management */}
        <Route path="/EstimationManagement" element={<EstimationManagementMain />}>
          <Route index={true} path="" element={<EstimationManagementHome />} />
          <Route path="about" element={<EstimationManagementAbout />} />
          <Route path="services" element={<EstimationManagementServices />} />
          <Route path="projects" element={<EstimationManagementProjects />} />
          <Route path="team" element={<EstimationManagementTeam />} />
          <Route path="services/:serviceId" element={<EstimationManagementService />} />
          <Route path="projects/:projectId" element={<EstimationManagementProject />} />
        </Route>

        {/* Contractor & Consultancy */}
        <Route path="/ContractorConsultancy" element={<ContractorConsultancyMain />}>
          <Route index={true} path="" element={<ContractorConsultancyHome />} />
          <Route path="About" element={<ContractorConsultancyAbout />} />
          <Route path="OurVision" element={<ContractorConsultancyOurVision />} />
          <Route path="OurValues" element={<ContractorConsultancyOurCoreValues />} />
          <Route path="Services" element={<ContractorConsultancyServices />} />
          <Route path="Services/:serviceId" element={<ContractorConsultancyService />} />
          <Route path="Projects" element={<ContractorConsultancyOurProjects />} />
          <Route path="Brochures" element={<ContractorConsultancyBrochures />} />
          <Route path="Packages" element={<ContractorConsultancyPackages />} />
          <Route path="Invest" element={<ContractorConsultancyInvestWithUs />} />
          <Route path="Contact" element={<ContractorConsultancyContactUs />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;

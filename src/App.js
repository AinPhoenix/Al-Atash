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
        <Route path="/estimationManagement" element={<EstimationManagementMain />}>
          <Route index={true} path="" element={<EstimationManagementHome />} />
          <Route path="about" element={<EstimationManagementAbout />} />
          <Route path="services" element={<EstimationManagementServices />} />
          <Route path="projects" element={<EstimationManagementProjects />} />
          <Route path="team" element={<EstimationManagementTeam />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;

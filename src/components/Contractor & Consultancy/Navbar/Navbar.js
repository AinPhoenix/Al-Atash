import React, { useState } from 'react';
import classes from './Navbar.module.css';

import logo from './../../../images/Contractor & Consultancy/Contractor & Consultancy.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navMobile, setNavMobile] = useState(false);

  if (navMobile) {
    return overlay(setNavMobile);
  }

  return (
    <div className={classes.screen}>
      <div className={classes.logo}>
        <a href="#">
          <img src={logo} />
        </a>
      </div>
      <div className={classes.navBox}>
        <div className={classes.companyName}>
          <h1>Al Atash Group</h1>
        </div>
        <div className={classes.navLinks}>
          <Link to="/ContractorConsultancy" className={classes.navLink}>
            Home
          </Link>
          <Link to="/ContractorConsultancy/About" className={classes.navLink}>
            About
          </Link>
          <Link to="/ContractorConsultancy/Services" className={classes.navLink}>
            Services
          </Link>
          <Link to="/ContractorConsultancy/Projects" className={classes.navLink}>
            Projects
          </Link>
          <Link to="/ContractorConsultancy/Packages" className={classes.navLink}>
            Packages
          </Link>
          <Link to="/ContractorConsultancy/Contact" className={classes.navLink}>
            Contact Us
          </Link>
          <Link to="/ContractorConsultancy/Brochures" className={classes.navLink}>
            Brochures
          </Link>
          <Link to="/ContractorConsultancy/Invest" className={classes.navLink}>
            Invest with us
          </Link>
        </div>
      </div>
      <div className={classes.mobileNav}>
        <div className={classes.navButton} onClick={() => setNavMobile(true)}>
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

const overlay = (setNavMobile) => {
  const close = () => {
    setNavMobile(false);
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.cross} onClick={close}>
        <i class="fas fa-times"></i>
      </div>
      <div className={classes.overlayLinks}>
        <Link to="/ContractorConsultancy" className={classes.overlayNavLink} onClick={close}>
          Home
        </Link>
        <Link to="/ContractorConsultancy/About" className={classes.overlayNavLink} onClick={close}>
          About
        </Link>
        <Link to="/ContractorConsultancy/Services" className={classes.overlayNavLink} onClick={close}>
          Services
        </Link>
        <Link to="/ContractorConsultancy/Projects" className={classes.overlayNavLink} onClick={close}>
          Projects
        </Link>
        <Link to="/ContractorConsultancy/Packages" className={classes.overlayNavLink} onClick={close}>
          Packages
        </Link>
        <Link to="/ContractorConsultancy/Contact" className={classes.overlayNavLink} onClick={close}>
          Contact Us
        </Link>
        <Link to="/ContractorConsultancy/Brochures" className={classes.overlayNavLink} onClick={close}>
          Brochures
        </Link>
        <Link to="/ContractorConsultancy/Invest" className={classes.overlayNavLink} onClick={close}>
          Invest with us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

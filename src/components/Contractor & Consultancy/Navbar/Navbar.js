import React from 'react';
import classes from './Navbar.module.css';

import logo from './../../../images/Contractor & Consultancy/Contractor & Consultancy.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={classes.screen}>
      <div className={classes.logo}>
        <a>
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
        </div>
      </div>
      <div className={classes.mobileNav}>
        <i class="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;

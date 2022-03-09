import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "./../../../images/Estimation & Management/Estimation & Management.png";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [navMobile, setNavMobile] = useState(false);

  if (navMobile) {
    return (
      <div>
        <div id="myNav" class={classes.overlay}>
          <div
            className={classes.closebtn}
            onClick={() => {
              setNavMobile(false);
            }}
          >
            <i class="fas fa-times"></i>
          </div>
          <div class={classes.overlayContent}>
            <Link to="/estimationManagement" className={`nav-item nav-link m-3  ${props.Home}`}>
              Home
            </Link>
            <Link
              to="/estimationManagement/about"
              className={`nav-item nav-link m-3  ${props.About}`}
            >
              About
            </Link>

            <Link
              to="/estimationManagement/services"
              className={`nav-item nav-link m-3  ${props.Contact}`}
            >
              Services
            </Link>
            <Link to="/estimationManagement/projects" className={`nav-item nav-link m-3  ${props.Team}`}>
              Projects
            </Link>
            <Link
              to="/estimationManagement/team"
              className={`nav-item nav-link m-3  ${props.Events}`}
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{
        backgroundColor: "#F6F5F5",
        boxShadow: "16%",
        padding: 0,
        boxShadow: "0 0 0.5rem 0 rgb(0 0 0 / 20%)",
      }}
    >
      <div className="container">
        <a href="#" className="navbar-brand">
          <img src={MainLogo} style={{ width: "auto" , height:"60px"}} />
        </a>
        <div className={`navbar-nav ms-auto ${classes.webLink}`}>
          <Link
            to="/estimationManagement"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.EstimationManagementHome}`}
          >
            Home
          </Link>
          <Link
            to="/estimationManagement/about"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.EstimationManagementAbout}`}
          >
            About
          </Link>

          <Link
            to="/estimationManagement/services"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Contact}`}
          >
            Services
          </Link>
          <Link
            to="/estimationManagement/projects"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Team}`}
          >
            Projects
          </Link>
          <Link
            to="/estimationManagement/team"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Events}`}
          >
            Team
          </Link>
        </div>

        <div className={`navbar-nav ms-auto ${classes.mobLink}`}>
          <div
            onClick={() => {
              setNavMobile(true);
            }}
          >
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

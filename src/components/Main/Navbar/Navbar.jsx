import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainLogo from "./../../../images/Main/Company Logo.png";

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
            <Link to="/" className={`nav-item nav-link m-3  ${props.Home}`}>
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link m-3  ${props.About}`}
            >
              About
            </Link>

            <Link
              to="/contact"
              className={`nav-item nav-link m-3  ${props.Contact}`}
            >
              Contact
            </Link>
            <Link to="/team" className={`nav-item nav-link m-3  ${props.Team}`}>
              Team
            </Link>
            <Link
              to="/UnderConstruction"
              className={`nav-item nav-link m-3  ${props.Events}`}
            >
              Events
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
          <img src={MainLogo} style={{ width: "100px" }} />
        </a>
        <div className={`navbar-nav ms-auto ${classes.webLink}`}>
          <Link
            to="/"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Home}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.About}`}
          >
            About
          </Link>

          <Link
            to="/contact"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Contact}`}
          >
            Contact
          </Link>
          <Link
            to="/team"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Team}`}
          >
            Team
          </Link>
          <Link
            to="/UnderConstruction"
            className={`nav-item nav-link m-3 ${classes.linkColor} ${props.Events}`}
          >
            Events
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

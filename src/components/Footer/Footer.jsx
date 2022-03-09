import React from "react";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div
        className={`d-flex justify-content-between px-5 ${classes.Footer}`}
        style={{ backgroundColor: "#414141" }}
      >
        <div className={classes.CopyRight}>
          COPYRIGHT
          <span style={{ fontWeight: "bold" }}> AL ATASH GROUP</span>
        </div>
        <div className={`text-center ${classes.WebAddress}`}>
          www.alatashgroup.com
        </div>
        <div className={classes.Links}>
          <div className={classes.LinkFloat}>
            <a href="https://wa.me/923111155572?text=I%20have%20a%20query" className="p-2" style={{ color: "white" }}>
              <i class="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/alatashgroup/"
              className="p-2"
              style={{ color: "white" }}
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.facebook.com/AAGroup.Pak"
              className="p-2"
              style={{ color: "white" }}
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              href="https://twitter.com/atash_group"
              className="p-2"
              style={{ color: "white" }}
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

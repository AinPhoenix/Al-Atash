import React from 'react';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.screen}>
      <div className={classes.companyName}>
        <h1>Al Atash Group</h1>
      </div>
      <div className={classes.socialLinks}>
        <a href="https://wa.me/923111155572?text=I%20have%20a%20query" className={classes.socialLink}>
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="https://www.instagram.com/alatashgroup/" className={classes.socialLink}>
          <i class="fab fa-instagram"></i>
        </a>

        <a href="https://www.facebook.com/AAGroup.Pak" className={classes.socialLink}>
          <i class="fab fa-facebook-f"></i>
        </a>

        <a href="https://twitter.com/atash_group" className={classes.socialLink}>
          <i class="fab fa-twitter"></i>
        </a>
      </div>
      <div className={classes.copyrights}>
        <p>Al-Atash 2022, All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

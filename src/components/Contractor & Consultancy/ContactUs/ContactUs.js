import React from 'react';
import classes from './ContactUs.module.css';

const ContactUs = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.screen}>
      <div className={classes.form}>
        <form className="container" onSubmit={formSubmitHandler}>
          <h4 className="">Contact Us</h4>
          <p>Feel free to Contact us any time. We will get back to you as soon as we can!</p>
          <input type="name" className={classes.input} id="name" placeholder="Name" />

          <input type="email" className={classes.input} placeholder="Email" />
          <textarea placeholder="Message" className={classes.input}></textarea>

          <button className={classes.btn} type="submit">
            Send
          </button>
        </form>
      </div>
      <div className={classes.address}>
        <div className={classes.infoBox}>
          <h2>Info</h2>
        </div>

        <div className={classes.displayBox}>
          <div className={classes.iconBox}>
            <i class="fas fa-envelope"></i>
          </div>
          <p>alatashgroup@gmail.com</p>
        </div>
        <div className={classes.displayBox}>
          <div className={classes.iconBox}>
            <i class="fas fa-phone-alt"></i>
          </div>
          <p>+92-310-5072012</p>
        </div>
        <div className={classes.displayBox}>
          <div className={classes.iconBox}>
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <p>
            SADIQ ARCADE,
            <br /> Phase 5-B, Near KALMA CHOWK,
            <br /> GHOURI TOWN, ISLAMABAD
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

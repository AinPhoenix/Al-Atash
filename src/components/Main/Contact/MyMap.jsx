import React from 'react';
import classes from './Contact.module.css';

const MyMap = () => {
  return (
    <section className={`container flex ${classes.MyMap}`}>
      <h1 className="display-4 text-center my-5">Locate us</h1>
      <div className="mb-5 shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.5856048095816!2d73.1374318!3d33.616054999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfc080c9a565c7%3A0x6abaca8271ba3d00!2sJamshed%20Electronics!5e0!3m2!1sen!2s!4v1654932481966!5m2!1sen!2s"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default MyMap;

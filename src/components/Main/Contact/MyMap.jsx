import React from 'react';
import classes from './Contact.module.css';

const MyMap = () => {
  return (
    <section className={`container flex ${classes.MyMap}`}>
      <h1 className="display-4 text-center my-5">Locate us</h1>
      <div className="mb-5 shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.5907982690837!2d73.13274222688912!3d33.61592028641395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeba42f95095d%3A0x72e629140c606851!2sAL%20ATASH%20GROUP!5e0!3m2!1sen!2s!4v1662034305431!5m2!1sen!2s"
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

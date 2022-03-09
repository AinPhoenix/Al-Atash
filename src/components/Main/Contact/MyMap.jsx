import React from "react";
import classes from "./Contact.module.css";

const MyMap = () => {
  return (
    <section className={`container flex ${classes.MyMap}`}>
      <h1 className="display-4 text-center my-5">Locate us</h1>
      <div className="mb-5 shadow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6650.624843463736!2d73.05094179491698!3d33.54525817849856!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x81e8f43fce4d0494!2sAL%20ATASH%20GROUP!5e0!3m2!1sen!2s!4v1639931891977!5m2!1sen!2s"
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

import React from "react";

import classes from "./ContactUs.module.css";
import ContactData from "../../../data/ContactData";

const ContactUs = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className={classes.ContactUs}>
      <div className="d-flex">
        <div className={`text-center ${classes.AddressContainer}`}>
          <div className="mb-2">
            <div style={{ fontSize: 24, color: "#32A9D4" }}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Address</h5>
            <p className="p-0 m-0">Al Atash Group</p>
            <p className="p-0 m-0">Jrahi Stop, Adyala Road</p>
            <p className="p-0 m-0">Rawalpindi</p>
          </div>
          <div className="mb-2">
            <div style={{ fontSize: 24, color: "#32A9D4" }}>
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Phone</h5>
            <p className="p-0 m-0">{ContactData.contact}</p>
          </div>
          <div>
            <div style={{ fontSize: 24, color: "#32A9D4" }}>
              <i className="fas fa-envelope"></i>
            </div>
            <h5>Email</h5>
            <p className="p-0 m-0">{ContactData.email}</p>
          </div>
        </div>
        <div className={classes.FormContainer}>
          <form
            className="container"
            style={{ padding: "0px 10%" }}
            onSubmit={formSubmitHandler}
          >
            <h4 className="">Contact Us</h4>
            <p>Question or just wanna say Hello... we are waiting</p>
            <input
              type="name"
              className="form-control py-2 my-2 shadow"
              id="name"
              placeholder="Name"
            />

            <input
              type="email"
              className="form-control py-2 my-2 shadow"
              placeholder="Email"
            />
            <textarea
              placeholder="Message"
              className="form-control py-1 my-2 shadow"
              style={{ height: "150px" }}
            ></textarea>

            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#32A9D4", color: "white" }}
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

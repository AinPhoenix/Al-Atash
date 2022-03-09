import React from "react";
import classes from "./Contact.module.css";

const Message = () => {

  const formSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <section className={`${classes.Message}`}>
      <h1 className="display-4 text-center my-5">Message us</h1>
      <div style={{ width: "100%" }}>
        <form className="container" style={{ padding: "0px 10%" }} onSubmit={formSubmitHandler}>
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
            style={{ height: "200px" }}
          ></textarea>
          <div className="my-5" style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="btn btn-primary shadow"
              style={{
                backgroundColor: "#32A9D4",
                border: "0px",
                borderRadius: "10px",
                padding: "10px 25px",
              }}
            >
              Send Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Message;

import React from "react";
import classes from "./About.module.css"

const Abouts = () => {
  return (
    <section
      className={classes.Abouts}
      style={{ backgroundColor: "#F6F5F5", color: "black" }}
    >
      <h1 className="display-3 text-center">About</h1>
      <div style={{ padding: "0px 10%" }}>
        <p style={{ textAlign: "justify" }}>
          AL ATASH GROUP is a trusted name in the house construction and
          consultancy industry. With the extensive experience in the field since
          2011, Al-Atash Group has made a name for itself providing high quality
          Construction and Building services to its clientele.
        </p>
        <p style={{ textAlign: "justify" }}>
          With prime focus to serve expatriates and overseas Pakistanis, Al-Atash Group not only provides necessary expertise in the construction, but
          leaps a step ahead to make sure that the turn-key solution is
          provided. Either it be residential construction or commercial, brick
          structure of frame structure, grey structure of complete finishing,
          our first and foremost priority is client’s satisfaction and ease that
          starts from the very first step in form of detailed paper work
          including quotations, bill of materials, agreements and contracts,
          regular interaction throughout the execution of project, addressing
          issues and successfully completing the project.
        </p>
        <p style={{ textAlign: "justify", margin:0 }}>
          Al-Atash Group is committed to provide quality and hassle-free service
          assuring peace of mind to the clientele with clear communication and
          transparent business processes. Using the earned experience and
          knowledge, Al-Atash Group also guarantees reliable and construction cost
          effective solutions with responsive after service to the clientele. We
          make long lasting relations with our clients by providing high quality
          services.
        </p>
      </div>
    </section>
  );
};

export default Abouts;

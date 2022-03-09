import React from "react";
import GroupsData from "./../../../data/GroupsData";
import AboutCard from "../Cards/AboutCard";
import classes from "./About.module.css";

const Services = () => {
  const AllGroups = GroupsData();

  const allCards = AllGroups.map((card) => (
    <AboutCard key={card.key} img={card.img} mainTitle={card.secondTitle} link={card.link} />
  ));

  return (
    <section className={classes.OurServices} style={{ backgroundColor: "#F6F5F5" }}>
      <h1 className="display-3 text-center mb-4">Our Services</h1>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ columnGap: "050px", rowGap: "10px" }}
      >
        {allCards}
      </div>
    </section>
  );
};

export default Services;

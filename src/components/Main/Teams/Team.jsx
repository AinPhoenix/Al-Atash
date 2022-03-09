import React from "react";

import classes from "./Team.module.css"

import TeamData from "./../../../data/TeamData";
import TeamCard from "../Cards/TeamCard";

const Team = () => {
  const AllGroups = TeamData();

  const allCards = AllGroups.map((card) => (
    <TeamCard
      key={card.key}
      img={card.img}
      Name={card.name}
      Designation={card.designation}
      Whatsapp={card.whatsapp}
      Instagram={card.instagram}
      Facebook={card.facebook}
      Twitter={card.twitter}
      Phone={card.Phone}
    />
  ));

  return (
    <section className="px-5 py-3" style={{ backgroundColor: "#F9F9F9" }}>
      <h1 className="display-4 text-center my-5">Team</h1>
      <div
        className="d-flex flex-wrap justify-content-evenly"
        style={{ columnGap: "4%", rowGap: "50px" }}
      >
        {allCards}
      </div>
    </section>
  );
};

export default Team;

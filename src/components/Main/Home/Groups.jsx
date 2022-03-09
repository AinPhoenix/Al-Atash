import React from "react";

import GroupsData from "./../../../data/GroupsData";

import Card from "./../Cards/Card";

const Groups = () => {
  const AllGroups = GroupsData();

  const allCards = AllGroups.map((card) => (
    <Card
      key={card.key}
      img={card.img}
      cmpTitle={card.title}
      mainTitle={card.secondTitle}
      link={card.Link}
    />
  ));

  return (
    <section className="container">
      <h1
        className="display-3 text-center my-5"
        style={{ fontWeight: "bolder" }}
      >
        AL-ATASH GROUP
      </h1>
      <div
        className="d-flex flex-wrap justify-content-evenly"
        style={{ columnGap: "5%", rowGap: "50px" }}
      >
        {allCards}
      </div>
    </section>
  );
};

export default Groups;

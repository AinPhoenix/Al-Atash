import React from "react";
import MaterialListData from "./../../../data/MaterialListData";

import Card from "./../Cards/Card";

const Material = () => {
  const AllGroups = MaterialListData();

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
    <section className="container my-3">
      <h1 className="display-4 text-center my-5">Materials</h1>
      <div
        className="d-flex flex-wrap justify-content-evenly"
        style={{ columnGap: "5%", rowGap: "50px" }}
      >
        {allCards}
      </div>
    </section>
  );
};

export default Material;

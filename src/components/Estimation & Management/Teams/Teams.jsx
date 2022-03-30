import React from 'react';
import TeamData from './../../../data/TeamData';
import TeamCard from '../../Main/Cards/TeamCard';
import TitleComponent from '../Extras/Title Component/TitleComponent';
import TeamFunction from '../../../functions/Team/TeamFunction';

const Teams = () => {
  const AllGroups = TeamFunction.fetchCustomeTeam('Estimation & Management');

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
    <section className="" style={{ background: '#EFEEEE 0% 0% no-repeat padding-box' }}>
      <TitleComponent title="Team" />
      <div style={{ padding: '15px' }}></div>
      <div className="d-flex flex-wrap justify-content-evenly" style={{ columnGap: '4%', rowGap: '50px' }}>
        {allCards}
      </div>

      <div style={{ padding: '15px' }}></div>
    </section>
  );
};

export default Teams;

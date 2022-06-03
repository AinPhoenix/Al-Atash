import React from 'react';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';
import BrochureCard from '../Cards/Brochures/BrochureCard';
import BrochuresData from '../../../data/Contractor & Consultancy/BrochuresData';

const AllGroups = BrochuresData();
const allCards = AllGroups.map((card) => <BrochureCard img={card.img} title={card.text} />);

function Brochures() {
  return (
    <div>
      {' '}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '40vh',
          padding: '3vh 0',
          fontWeight: 'bold',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '10vh',
          color: 'white',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        Brochures
      </div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          rowGap: '2vh',
          width: '90%',
          columnGap: '10%',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        }}
      >
        {allCards}
      </div>
    </div>
  );
}

export default Brochures;

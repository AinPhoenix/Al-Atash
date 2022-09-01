import React from 'react';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';
import PackagesCard from '../Cards/PackagesCard';
import PackagesData from '../../../data/Contractor & Consultancy/PackagesData';

const AllGroups = PackagesData();
const allCards = AllGroups.map((card) => (
  <PackagesCard img={card.img} measure={card.measure} title={card.title} price={card.price} />
));

export default function Packages() {
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          fontSize: '9vh',
          maxWidth: '100%',
          color: 'white',
          padding: '2vh',
        }}
      >
        Packages
      </div>

      <br />
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
      <br />
    </div>
  );
}
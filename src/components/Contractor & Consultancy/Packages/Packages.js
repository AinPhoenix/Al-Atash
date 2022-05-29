import React from 'react';
import exterior from '../../../images/Estimation & Management/ser/exterior.jpg';

export default function Packages() {
  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${exterior})`,
          fontSize: '9vh',
          maxWidth: '100%',
          color: 'white',
          padding: '2vh',
        }}
      >
        Packages
      </div>

      <br />
    </div>
  );
}

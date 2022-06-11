import react from 'react';
import RightSideText from '../../Cards/RightSideText';
import exterior from '../../../../images/Estimation & Management/ser/exterior.jpg';
const Title = 'About Us';
const Text =
  'AL ATASH GROUP is a trusted name in the house construction and consultancy industry. With the extensive experience in the field since 2011, Al-Atash Group has made a name for itself providing high quality Construction and Building services to its clientele.';
const Aboutus = () => {
  return (
    <div>
      <RightSideText text={Text} title={Title} img={exterior} />
    </div>
  );
};

export default Aboutus;

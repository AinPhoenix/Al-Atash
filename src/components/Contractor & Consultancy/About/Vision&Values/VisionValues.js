import react from 'react';
import OffersCardMoreWidth from '../../Cards/OffersCardMoreWidth';
import RightSideText from '../../Cards/RightSideText';
import vission from '../../../../images/Estimation & Management/Vision1.jpeg';
import Mission from '../../../../images/Estimation & Management/Mission1.png';
import classes from '../Vision&Values/VisionValues.module.css';
const text = 'View More';
const link = '../OurVision';
const VisionValues = () => {
  return (
    <div className={classes.parent} style={{}}>
      <div>
        <div className={classes.heading}>Our Vision</div>
        <OffersCardMoreWidth img={vission} text={text} link={link} />
      </div>
      <div>
        <div className={classes.heading}>Core Values</div>
        <OffersCardMoreWidth img={Mission} text={text} link={link} />
      </div>
    </div>
  );
};

export default VisionValues;

import react from "react";
import RightSideText from "../../Cards/RightSideText";
import exterior from "../../../../images/Estimation & Management/ser/exterior.jpg";
const Title = 'About Us';
const Text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus tortor tincidunt, aliquam erat non, vulputate ligula. Vivamus auctor ut purus vitae venenatis.';
const Aboutus = () => {
    return <div>
        <RightSideText text={Text} title={Title} img={exterior} />
    </div>
};

export default Aboutus;
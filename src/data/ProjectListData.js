import BuildGenices from './../images/BuildGenices/BuildGenices.png';
import EstimationApp from './../images/Estimation App/Estimation App.png';

const ProjectListData = () => {
  return [
    {
      key: 1,
      title: 'BuildGenices',
      img: BuildGenices,
      Link: '/builgenices',
    },
    {
      key: 2,
      title: 'Building Estimation App',
      img: EstimationApp,
      Link: '/buildEstimationApp',
    },
  ];
};

export default ProjectListData;

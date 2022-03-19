import BOQ1 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-01.jpg';
import BOQ2 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-07.jpg';
import BOQ3 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-08.jpg';
import BOQ4 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-12.jpg';
import BOQ5 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-13.jpg';
import BOQ6 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-15.jpg';
import BOQ7 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-23.jpg';
import BOQ8 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-28.jpg';
import BOQ9 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-36.jpg';
import BOQ10 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-38.jpg';
import BOQ11 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-43.jpg';
import BOQ12 from '../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-44.jpg';

const ProjectsData = () => {
  return [
    {
      id: 1,
      workTitle: 'BOQ + Tender (Grey Structure)',
      projectName: '6 Marla Villa',
      client: 'DHA',
      siteLocation: 'DHA Multan',
      project: 'Residential Project',
      work: 'Grey Structure + Finishing',
      buildingArea: '6 Marla',
      unit: 10,
      projectType: 'Villa',
      pictures: [BOQ1, BOQ2, BOQ3, BOQ4, BOQ5, BOQ6, BOQ7, BOQ8, BOQ9, BOQ10, BOQ11, BOQ12],
      price: 6000000.0,
    },
    {
      id: 2,
      workTitle: 'BOQ + Tender (Grey Structure)',
      projectName: '9 Marla Villa',
      client: 'DHA',
      siteLocation: 'DHA Multan',
      project: 'Residential Project',
      work: 'Grey Structure + Finishing',
      buildingArea: '9 Marla',
      unit: 10,
      projectType: 'Villa',
      pictures: [],
      price: 0.0,
    },
  ];
};

export default ProjectsData;

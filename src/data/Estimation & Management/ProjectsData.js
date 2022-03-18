import BOQ1 from "../../images/Estimation & Management/Project/01-6 Marla Villa Dha Multan/DHAM-6 MARLA-VOL-III BOQ-01.jpg";

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
      pictures: [BOQ1],
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
      price:0.0,
    },
  ];
};

export default ProjectsData;

import ProjectData from './../../data/Contractor & Consultancy/ProjectsData';

const fetchAllProject = () => {
  const data = ProjectData();
  return data;
};

const fetchProject = (id) => {
  const data = ProjectData();
  const found = data.find((element) => element.key === id);
  return found;
};

export default { fetchAllProject, fetchProject };

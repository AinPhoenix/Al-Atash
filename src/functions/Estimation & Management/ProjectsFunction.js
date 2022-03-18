import ProjectsData from '../../data/Estimation & Management/ProjectsData';

const fetchAllProjects = () => {
  const data = ProjectsData();
  return data;
};

const fetchProject = (id) => {
  const data = ProjectsData();

  const found = data.find((element) => element.id === id);

  return found;
};

export default { fetchAllProjects, fetchProject };

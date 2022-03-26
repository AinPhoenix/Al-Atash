import TeamData from '../../data/TeamData';

const fetchAllTeam = () => {
  const data = TeamData();
  return data;
};

const fetchCustomeTeam = (project) => {
  const data = TeamData();

  const found = data.filter((element) => element.team.includes(project));

  return found;
};

export default { fetchAllTeam, fetchCustomeTeam };

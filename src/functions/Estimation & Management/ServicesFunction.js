import ServicesData from '../../data/Estimation & Management/ServicesData';

const fetchAllService = () => {
  return ServicesData;
};

const fetchService = (id) => {
  const data = ServicesData();

  const found = data.find((element) => element.id === id);

  return found;
};

export default { fetchAllService, fetchService };

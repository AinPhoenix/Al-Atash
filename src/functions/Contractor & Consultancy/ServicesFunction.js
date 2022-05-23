import ServicesData from './../../data/Contractor & Consultancy/ServicesData';

const fetchAllService = () => {
  const data = ServicesData();
  return data;
};

const fetchService = (id) => {
  const data = ServicesData();

  const found = data.find((element) => element.key === id);

  return found;
};

export default { fetchAllService, fetchService };

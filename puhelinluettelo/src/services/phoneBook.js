import axios from "axios";

const baseUrl = "https://fullstack03.onrender.com/api/persons";

const getAll = () => {
  try {
    return axios.get(baseUrl).then((res) => res.data);
  } catch (err) {
    console.log(err.message);
    return { data: [] };
  }
};

const create = (person) => {
  return axios.post(baseUrl, person).then((res) => res.data);
};

const update = (person) => {
  return axios.put(`${baseUrl}/${person.id}`, person).then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((res) => res.data);
};

export default { getAll, create, update, remove };

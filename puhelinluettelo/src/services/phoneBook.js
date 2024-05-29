import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  try {
    return await axios.get(baseUrl).then((res) => res.data);
  } catch (err) {
    console.log(err.message);
    return { data: [] };
  }
};

const create = (person) => {
  return axios.post(baseUrl, person).then((res) => res.data);
};

const update = async (person) => {
  return await axios
    .put(`${baseUrl}/${person.id}`, person)
    .then((res) => res.data);
};

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, remove };

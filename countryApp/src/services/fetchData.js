import axios from "axios";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/";

const getAll = async () => {
  return await axios.get(`${baseUrl}api/all`).then((res) => {
    return res.data;
  });
};

export default { getAll };

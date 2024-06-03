import axios from "axios";

const getWeather = async (country) => {
  const api = import.meta.env.VITE_API_KEY;
  return await axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${country.capital[0]}&appid=${api}&units=metric`,
    )
    .then((res) => {
      return res.data;
    });
};

export default { getWeather };

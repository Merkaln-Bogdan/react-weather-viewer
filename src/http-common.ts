import axios from "axios";

const fetchData = () => {
  const defaultOptions = {
    baseURL: "https://api.openweathermap.org",
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export { fetchData };

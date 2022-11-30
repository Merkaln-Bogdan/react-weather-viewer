import axios from "axios";

const fetchData = () => {
  const defaultOptions = {
    baseURL: "http://api.openweathermap.org",
  };

  const instance = axios.create(defaultOptions);

  return instance;
};

export { fetchData };

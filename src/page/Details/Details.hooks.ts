import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { weatherDataService } from "services/services";

const useDetails = () => {
  const { id } = useParams();

  const [cityData, setCityData] = useState([]);
  console.log(id);
  useEffect(() => {
    weatherDataService.getCity(id!).then((res) => setCityData(res.data.list));
  }, [id]);

  return { cityData };
};
export { useDetails };

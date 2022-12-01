import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { weatherDataService } from "services/services";

const useDetails = () => {
  const { id } = useParams();

  const [cityData, setCityData] = useState<any>();

  useEffect(() => {
    weatherDataService.getCity(id!).then((res) => setCityData(res.data));
  }, [id]);

  const updateInfo = () => {
    weatherDataService.getCity(id!).then((res) => setCityData(res.data));
  };

  return { cityData, updateInfo };
};
export { useDetails };

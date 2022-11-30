import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { citiesSelector, setAllCities } from "redux/slices/cities";
import { StorageContext } from "contexts/StorageContext";

import { weatherDataService } from "services/services";
import { setIndeficators } from "redux/slices/ids";

const useBoard = () => {
  const dispatch = useAppDispatch();

  const storageContext = useContext(StorageContext);
  const { storegedData, setStoragedData, removeData, putData } = storageContext;

  const [query, setQuery] = useState("");

  const ids = useAppSelector((state) => state.ids.ids);
  const citiesData = useAppSelector(citiesSelector.selectAll);
  
  console.log("STORAGE ", storegedData, citiesData);
  useEffect(() => {
    if (ids !== storegedData) {
      setStoragedData(ids);
    }
  }, []);

  useEffect(() => {
    weatherDataService
      .getAllCities(storegedData)
      .then((res) => dispatch(setAllCities(res.data.list)));
  }, [dispatch, storegedData]);

  useEffect(() => {
    if (query.length > 3) {
      weatherDataService
        .getNewCity(query!)
        .then((res) => dispatch(setIndeficators(res.data.id)));
    }
  }, [query]);

  const handleAddCity = (e: any) => {
    const { value } = e.target;

    setQuery(value);
  };

  return { citiesData, handleAddCity, removeData };
};
export { useBoard };

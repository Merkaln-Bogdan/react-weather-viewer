import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { citiesSelector, setAllCities } from "redux/slices/cities";

import { StorageContext } from "contexts/StorageContext";

import { weatherDataService } from "services/services";

const useBoard = () => {
  const dispatch = useAppDispatch();

  const storageContext = useContext(StorageContext);
  const { storegedData, removeData, putData } = storageContext;

  const [query, setQuery] = useState("");

  const citiesData = useAppSelector(citiesSelector.selectAll);

  useEffect(() => {
    weatherDataService
      .getAllCities(storegedData)
      .then((res) => dispatch(setAllCities(res.data.list)));
  }, [dispatch, storegedData]);

  useEffect(() => {
    if (query.length > 3) {
      weatherDataService.getNewCity(query!).then((res) => putData(res.data.id));
    }
  }, [query]);

  const handleAddCity = (e: any) => {
    const { value } = e.target;

    setQuery(value);
  };

  return { citiesData, handleAddCity, removeData };
};
export { useBoard };
